package main

import (
	"log"
	"net/http"
	"os"

	"fenna-backend/internal/db"
	"fenna-backend/internal/handlers"
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

func main() {
	db.InitDB()
	defer db.CloseDB()

	r := chi.NewRouter()
	r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)

	r.Post("/api/donations", handlers.InitiateDonation)
	r.Post("/api/webhooks/nylonpay", handlers.HandleNylonWebhook)

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Printf("Server starting on port %s", port)
	http.ListenAndServe(":"+port, r)
}
