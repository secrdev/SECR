echo "Starting Syn-Scan tests"
echo "-----------------------"
sudo nmap -sS 142.250.113.138
echo "-----------------------"
sudo nc -z -v -n 142.250.113.138 1-5000