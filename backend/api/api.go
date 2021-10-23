package api

type VulnReport struct {
	Vulnerabilities []Vulnerability
}

type Vulnerability struct {
	Port    uint32
	Service string
	ID      string
	URL     string
}
