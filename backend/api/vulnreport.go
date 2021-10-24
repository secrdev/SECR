package api

import (
	"encoding/xml"
	"os/exec"
)

type Vulnreport struct {
	XMLName         xml.Name `xml:"table"`
	Vulnerabilities []Vulnerability
}

type Vulnerability struct {
	ID        string `xml:"elem"`
	Type      string `xml:"elem"`
	Cvss      string `xml:"elem"`
	IsExploit bool   `xml:"elem"`
}

func ExecuteVulnscan(URL string) error {
	var report Vulnreport
	output, err := exec.Command("/bin/sh", "./nmap/vulnscan.sh", URL).Output()
	if err != nil {
		return err
	}
	xml.Unmarshal(output, &report)
	return nil
}
