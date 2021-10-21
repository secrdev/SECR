echo "Starting Syn-Scan tests"
echo "nmap"
nmap -sS 142.250.113.138
echo "netcat"
nc -z -v -n 142.250.113.138