package api

import (
	"fmt"
	"log"
	"os/exec"
)

// VulnerabilityReport is an entire report (collection of vulnerabilities)
type VulnReport struct {
	Vulnerabilities []Vulnerability
}

// Vulnerability is a struct representation of a detected vulnerability thru nmap
type Vulnerability struct {
	Port      uint32 `xml:"portid"`
	Service   string `xml:"output"`
	ID        string `xml:"id"`
	IsExploit bool   `xml:"is_exploit"`
	Type      string `xml:"type"`
	Cvss      uint8  `xml:"cvss"`
}

func ExecuteVulnscan(URL string) {
	out, err := exec.Command("sh", "vulnscan.sh").Output()
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(string(out[:]))
}
