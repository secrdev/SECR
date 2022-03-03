<div align="center">
<h1>SECR</h1>
<a href="https://discord.com/invite/g7XEQgF5BH">
		<img src="https://img.shields.io/discord/884452044566577182?color=738ADB&label=discord&style=for-the-badge" />
</a>
<h4>Application security made easy.</h4>
</div>

<div align="center">
<h2>How It Works</h2>
<img src="demo.gif" width="512"/>
</div>

<div align="center">
<h2>Get Started</h2>
</div>

1. `git clone https://github.com/secrdev/SECR`
2. Install Nmap
3. Run Backend
   1. `cd backend/`
   2. `go run main.go`
4. Run Frontend
   1. `cd app/`
   2. `npm install`
   3. `npm start`
5. Open `localhost:3000` in your browser 

<div align="center">
<h2>Features</h2>
</div>

### Current features:

- Vulnerability scanning using [nmap-vulners](https://github.com/vulnersCom/nmap-vulners) 
- Metadata about vulnerabilities, along with their CVE IDs, which can also be found on [Vulners](https://vulners.com/)
- Generalized security score for scanned applications 

### Planned features:

- Steps to recreate and patch each vulnerability found
- Implementing SECR in a Chrome extension and/or Github Marketplace app

<div align="center">
<h2>Contributing</h2>
</div>

Check out [CONTRIBUTING](CONTRIBUTING.md)
