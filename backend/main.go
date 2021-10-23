package main

import (
	"log"
	"net/http"
	"secr/api"
)

func main() {
	http.HandleFunc("/report", api.HandleReportRequest)
	log.Fatal(http.ListenAndServe(":8080", nil))
}
