package api

import (
	"os/exec"
	"regexp"
)

var regexPatterns = map[string]string{
	"cve":  `CVE-\d{4}-\d{1,10}`,
	"port": `\d{0,5}/tcp`,
}

func ExecuteVulnscan(URL string) ([][]byte, error) {
	output, err := exec.Command("/bin/sh", "./nmap/vulnscan.sh", URL).Output()
	if err != nil {
		return nil, err
	}
	re := regexp.MustCompile(regexPatterns["cve"])
	return re.FindAll(output, -1), nil
}
