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
	"cve":  `https://vulners.com/cve/CVE-\d{4}-\d{1,10}`,
	"port": `\d{0,5}\/tcp`,
}

func ExecuteVulnscan(URL string) (Report, error) {
	var report Report
	output, err := exec.Command("/bin/sh", "./nmap/vulnscan.sh", URL).Output()
	if err != nil {
		return report, err
	}
	re := regexp.MustCompile(regexPatterns["cve"])
	cveSearch := re.FindAll(output, -1)
	for _, v := range cveSearch {
		report.Vulns = append(report.Vulns, string(v))
	}
	return report, nil
}
