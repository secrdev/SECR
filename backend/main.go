package main

import (
	"fmt"
	"log"
	"secr/api"
)

func main() {
	output, err := api.ExecuteVulnscan("127.0.0.1")
	if err != nil {
		log.Fatal(err)
	}
	// fmt.Printf("%+q\n", output)
	for _, v := range output {
		fmt.Println(string(v))
	}
}
