package api

import (
	"fmt"
	"net/http"
)

type Report struct {
	Port  uint32   `json:"port"`
	Vulns []string `json:"vulns"`
}

func HandleReportRequest(w http.ResponseWriter, r *http.Request) {
	url := r.URL.Query().Get("url")
	fmt.Fprint(w, url)
}
