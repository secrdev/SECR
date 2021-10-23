echo "Starting Vulnscan"
echo "-----------------------"
# Syn Scan for Port numbers then pipe into vuln scan w/ depending tier and open port #'s
sudo nmap -T5 -sV -Pn $1 --script=nmap-vulners/vulners.nse -p22,80,443
echo "-----------------------"