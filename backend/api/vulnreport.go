package api

import (
	"os/exec"
	"regexp"
)

type Report struct {
	Service string   `json:"service"`
	Vulns   []string `json:"vulns"`
}

var regexPatterns = map[string]string{
	"cve":     `https://vulners.com/cve/CVE-\d{4}-\d{1,10}`,
	"service": `\d{0,5}\/tcp`,
}

func ExecuteVulnscan(URL string) (Report, error) {
	var report Report
	output, err := exec.Command("/bin/sh", "./nmap/vulnscan.sh", URL).Output()
	if err != nil {
		return report, err
	}
	patterns := []*regexp.Regexp{regexp.MustCompile(regexPatterns["service"]), regexp.MustCompile(regexPatterns["cve"])}
	report.Service = string(patterns[0].Find(output))
	for _, v := range patterns[1].FindAll(output, -1) {
		report.Vulns = append(report.Vulns, string(v))
	}
	return report, nil
}
