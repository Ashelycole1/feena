package models

type InitiateDonationReq struct {
	CampaignID  string  `json:"campaignId"`
	DonorName   string  `json:"donorName"`
	DonorEmail  string  `json:"donorEmail"`
	DonorPhone  string  `json:"donorPhone"`
	Amount      float64 `json:"amount"`
	IsAnonymous bool    `json:"isAnonymous"`
}

type NylonWebhookPayload struct {
	TransactionID string `json:"transactionId"`
	Reference     string `json:"reference"`
	Status        string `json:"status"`
}
