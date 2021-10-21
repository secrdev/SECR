echo "Starting Syn-Scan tests"
echo "-----------------------"
sudo nmap -sS 142.250.113.138
# 1. look for open ports under 10k range through nmap -sS -p1-10000 type functionality, may look into script scanning 
# 2. encode scan result into JSON, parse thru middleware
# 3. from middleware, attempt attacks/vuln detection based off of available ports/protocols etc
echo "-----------------------"