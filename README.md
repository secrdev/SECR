# SECR

Application security made easy.

## How It Works

<div align="center">
    <img src="./howitworks.png" alt="How SECR works" width="100%" />  
</div>

## Features

### Current features:

1. Basic vulnerability scanning using [nmap-vulners](https://github.com/vulnersCom/nmap-vulners) 
2. Metadata about vulnerabilities (Port and Associated Services), along with their CVE IDs, which, can also be found on [Vulners](https://vulners.com/), hyperlinked in SECR's dashboard
3. Generalized security score for scanned application (based on number of vulnerabilities compared to services running)

### Planned features:

1. Descriptions of vulnerabilities, severity scores, and more metadata presented simply
2. Steps to recreate each vulnerability 
3. Steps to patch each vulnerability

## Tech Stack 

### Frontend

1. React + JS (planning on migrating to NextJS + TS)
2. Vanilla CSS and custom components (planning on migrating to SCSS)

### Backend

1. Go, with an internal REST API that invokes nmap-vulners to scan applications and serve results

## Run SECR
