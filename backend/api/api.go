package api

type VulnReport struct {
}

type Vulnerability struct {
	Port    uint32
	Service string
	ID      string
	URL     string
}
