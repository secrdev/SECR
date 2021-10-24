package main

import (
	"log"
	"secr/api"
)

func main() {
	// http.HandleFunc("/report", api.HandleReportRequest)
	// log.Fatal(http.ListenAndServe(":8080", nil))
	err := api.ExecuteVulnscan("127.0.0.1")
	if err != nil {
		log.Fatal(err)
	}
}
