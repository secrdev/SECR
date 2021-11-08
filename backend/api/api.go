package api

import (
	"encoding/json"
	"log"
	"net/http"
)

func HandleReportRequest(w http.ResponseWriter, r *http.Request) {
	if url := r.URL.Query().Get("url"); url != "" {
		for name, values := range r.Header {
			log.Println(name, values)
		}

		scan, err := ExecuteVulnscan(url)
		if err != nil {
			log.Fatal(err)
		}
		json.NewEncoder(w).Encode(scan)
	}
}
