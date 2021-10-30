package api

import (
	"encoding/xml"
	"fmt"
	"os/exec"
)

type Table struct {
	XMLName xml.Name `xml:"table"`
	Elem    []Elem   `xml:"tag"`
}

type Elem struct {
	Key   string `xml:"key,attr"`
	Value string `xml:",chardata"`
}

func ExecuteVulnscan(URL string) error {
	var elem Table
	output, err := exec.Command("/bin/sh", "./nmap/vulnscan.sh", URL).Output()
	if err != nil {
		return err
	}
	xml.Unmarshal([]byte(output), &elem)
	fmt.Println(elem)
	return nil
}
