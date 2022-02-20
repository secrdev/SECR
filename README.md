# SECR

Application security made easy.

## How It Works

<div align="center">
    <img src="./howitworks.png" alt="How SECR works" width="100%" />  
</div>

## Features

Currently SECR has the following features:

1. Basic vulnerability scanning with [nmap-vulners](https://github.com/vulnersCom/nmap-vulners) internally
2. Metadata about vulnerabilities (Port and Associated Service), along with their CVE IDs, which, can also be found on [Vulners](https://vulners.com/), hyperlinked in SECR's dashboard
3. Generalized security score for scanned application (based on number of vulnerabilities compared to services running)

I'm planning on adding more features in the future, such as:

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
