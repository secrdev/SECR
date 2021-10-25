package api

import (
	"encoding/xml"
	"fmt"
	"os/exec"
)

type Vulnreport struct {
	XMLName         xml.Name `xml:"table"`
	Vulnerabilities []Vulnerability
}

type Vulnerability struct {
	ID        string `xml:"id,attr"`
	Type      string `xml:"type,attr"`
	Cvss      string `xml:"cvss,attr"`
	IsExploit bool   `xml:"is_exploit,attr"`
}

func ExecuteVulnscan(URL string) error {
	var report Vulnerability
	output, err := exec.Command("/bin/sh", "./nmap/vulnscan.sh", URL).Output()
	if err != nil {
		return err
	}
	xml.Unmarshal(output, &report)
	fmt.Println(report.Cvss, report.ID, report.Type, report.IsExploit)
	return nil
}
