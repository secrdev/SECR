# SECR

Application security made easy.

## How It Works

<div align="center">
    <img src="./howitworks.png" alt="How SECR works" width="100%" />  
</div>

## Get Started

1. `git clone https://github.com/secrdev/SECR`
2. Execute `./run.sh`
3. Open `localhost:3000` in your browser 

## Features

### Current features:

- Basic vulnerability scanning using [nmap-vulners](https://github.com/vulnersCom/nmap-vulners) 
- Metadata about vulnerabilities (Port and Associated Services), along with their CVE IDs, which, can also be found on [Vulners](https://vulners.com/), hyperlinked in SECR's dashboard
- Generalized security score for scanned application (based on number of vulnerabilities compared to services running)

### Planned features:

- Displaying steps to recreate and patch each vulnerability found
- Implementing SECR in a Chrome extension and/or Github Marketplace app
