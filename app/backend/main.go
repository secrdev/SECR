package main

import (
	"log"
	"net/http"
	"secr/api"
)

func main() {
	http.HandleFunc("/", api.HandleReportRequest)
	log.Fatal(http.ListenAndServe(":15411", nil))
}
