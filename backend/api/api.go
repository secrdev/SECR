package api

// VulnerabilityReport is an entire report (collection of vulnerabilities)
type VulnReport struct {
	Vulnerabilities []Vulnerability
}

// Vulnerability is a struct representation of a detected vulnerability thru nmap
type Vulnerability struct {
	Port    uint32
	Service string
	ID      string
	URL     string
}
