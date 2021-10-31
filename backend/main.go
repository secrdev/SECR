package main

import (
	"net/http"
	"secr/api"
)

func main() {
	http.HandleFunc("/", api.HandleReportRequest)
	http.ListenAndServe(":8080", nil)
}
