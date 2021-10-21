echo "Starting Syn-Scan tests"
echo "nmap"
sudo nmap -sS 142.250.113.138
echo "netcat"
sudo nc -z -v -n 142.250.113.138