echo "Starting Vulnscan"
echo "-----------------------"
sudo nmap -T5 -sV -Pn $1 --script=nmap-vulners/vulners.nse -p22, 80, 443
echo "-----------------------"