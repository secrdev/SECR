package api

import (
	"net/http"
)

func HandleReportRequest(w http.ResponseWriter, r *http.Request) {
	url := r.URL.Query().Get("url")
	ExecuteVulnscan(url)
}


