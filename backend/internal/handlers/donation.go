package handlers

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"time"

	"fenna-backend/internal/db"
	"fenna-backend/internal/models"
	"github.com/google/uuid"
)

func InitiateDonation(w http.ResponseWriter, r *http.Request) {
	var req models.InitiateDonationReq
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, "Invalid payload", http.StatusBadRequest)
		return
	}

	ctx, cancel := context.WithTimeout(r.Context(), 5*time.Second)
	defer cancel()

	txRef := fmt.Sprintf("FEN-%d-%s", time.Now().Unix(), uuid.New().String()[:6])
	
	_, err := db.Pool.Exec(ctx, ` INSERT INTO donations (campaign_id, donor_name, donor_email, donor_phone, amount, transaction_ref, is_anonymous, status) VALUES ($1, $2, $3, $4, $5, $6, $7, 'pending')`, req.CampaignID, req.DonorName, req.DonorEmail, req.DonorPhone, req.Amount, txRef, req.IsAnonymous)
	if err != nil {
		http.Error(w, "DB Error", 500)
		return
	}

	// Dispatch Payment Prompt to Nylon Pay Collection API
	nylonBody, _ := json.Marshal(map[string]interface{}{
		"amount":      req.Amount,
		"phoneNumber": req.DonorPhone,
		"reference":   txRef,
		"callbackUrl": os.Getenv("APP_BASE_URL") + "/api/webhooks/nylonpay",
	})

	nylonReq, _ := http.NewRequestWithContext(ctx, "POST", "https://api.nylonpay.nilesquad.com/v1/payments/collect", bytes.NewBuffer(nylonBody))
	nylonReq.Header.Set("Authorization", "Bearer "+os.Getenv("NYLON_PAY_API_KEY"))

	client := &http.Client{Timeout: 10 * time.Second}
	resp, err := client.Do(nylonReq)

	if err != nil || resp.StatusCode >= 400 {
		http.Error(w, "Gateway Error", 502)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]interface{}{"success": true, "transactionRef": txRef})
}
