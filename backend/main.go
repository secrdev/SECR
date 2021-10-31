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
	fmt.Println(fmt.Sprintf("%+q\n", output))
}
