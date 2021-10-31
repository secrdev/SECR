package api

import (
	"fmt"
	"os/exec"
)

func ExecuteVulnscan(URL string) error {
	output, err := exec.Command("/bin/sh", "./nmap/vulnscan.sh", URL).Output()
	if err != nil {
		return err
	}
	fmt.Println(string(output))
	return nil
}
