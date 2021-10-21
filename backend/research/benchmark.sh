echo "Starting Syn-Scan tests"
echo "-----------------------"
sudo nmap -sS 142.250.113.138
echo "-----------------------"
sudo zmap -B 10M -p 80 -n 10000 142.250.113.138