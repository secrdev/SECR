package api

import (
	"fmt"
	"net/http"
)

func HandleReportRequest(w http.ResponseWriter, r *http.Request) {
	url := r.URL.Query().Get("url")
	fmt.Fprint(w, url)
}
