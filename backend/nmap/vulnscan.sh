
echo "nmap-vulners"
sudo nmap --script nmap-vulners -sV $1
echo "vulns"
sudo nmap --script vuln -sV $1