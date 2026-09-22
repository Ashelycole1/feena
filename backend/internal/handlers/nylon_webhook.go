package handlers

import (
	"crypto/hmac"
	"crypto/sha256"
	"encoding/hex"
	"encoding/json"
	"io"
	"net/http"
	"os"

	"fenna-backend/internal/db"
	"fenna-backend/internal/models"
)

func HandleNylonWebhook(w http.ResponseWriter, r *http.Request) {
	rawBody, _ := io.ReadAll(r.Body)
	sig := r.Header.Get("x-nylon-signature")
	mac := hmac.New(sha256.New, []byte(os.Getenv("NYLON_PAY_WEBHOOK_SECRET")))
	mac.Write(rawBody)

	if !hmac.Equal([]byte(sig), []byte(hex.EncodeToString(mac.Sum(nil)))) {
		http.Error(w, "Invalid HMAC Signature", 401)
		return
	}

	var p models.NylonWebhookPayload
	_ = json.Unmarshal(rawBody, &p)

	if p.Status == "SUCCESSFUL" {
		tx, _ := db.Pool.Begin(r.Context())
		defer tx.Rollback(r.Context())

		var campaignID string
		var amount float64
		err := tx.QueryRow(r.Context(), ` UPDATE donations SET status = 'successful', nylon_transaction_id = $1 WHERE transaction_ref = $2 RETURNING campaign_id, amount`, p.TransactionID, p.Reference).Scan(&campaignID, &amount)

		if err == nil {
			_, _ = tx.Exec(r.Context(), "SELECT increment_campaign_balance($1, $2)", campaignID, amount)
			_ = tx.Commit(r.Context())
		}
	}

	w.WriteHeader(200)
}
