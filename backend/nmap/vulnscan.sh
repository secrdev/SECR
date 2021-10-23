echo "Starting Vulnscan"
echo "-----------------------"
sudo nmap -sS -Pn $1 --script=nmap-vulners/vulners.nse -p80
echo "-----------------------"