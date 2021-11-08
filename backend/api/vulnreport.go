package api

import (
	"log"
	"os/exec"
	"regexp"
)

type Report struct {
	Port    string   `json:"port"`
	Service string   `json:"service"`
	Vulns   []string `json:"vulns"`
}

var regexPatterns = map[string]string{
	"cve":     `https://vulners.com/cve/CVE-\d{4}-\d{1,10}`,
	"port":    `\d{0,5}\/tcp`,
	"service": `(?<=\_http-server-header:)[^\(*CR)]+`,
}

func ExecuteVulnscan(URL string) (Report, error) {
	var report Report
	output, err := exec.Command("/bin/sh", "./nmap/vulnscan.sh", URL).Output()
	if err != nil {
		return report, err
	}
	log.Println(string(output))
	patterns := []*regexp.Regexp{regexp.MustCompile(regexPatterns["port"]), regexp.MustCompile(regexPatterns["cve"]), regexp.MustCompile(regexPatterns["service"])}
	report.Port = string(patterns[0].Find(output))
	report.Service = string(patterns[2].Find(output))
	for _, v := range patterns[1].FindAll(output, -1) {
		report.Vulns = append(report.Vulns, string(v))
	}
	return report, nil
}
