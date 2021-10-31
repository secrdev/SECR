package api

import (
	"encoding/json"
	"log"
	"net/http"
)

func HandleReportRequest(w http.ResponseWriter, r *http.Request) {
	url := r.URL.Query().Get("url")
	scan, err := ExecuteVulnscan(url)
	if err != nil {
		log.Fatal(err)
	}
	json.NewEncoder(w).Encode(scan)
}
