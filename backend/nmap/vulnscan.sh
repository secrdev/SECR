echo "Starting Vulnscan"
echo "-----------------------"
sudo nmap -sS -Pn 142.250.113.138 --script=vulners/vulners.nse -p80
echo "-----------------------"