# My Home Pages

![Full Test](https://github.com/vikidi/Homepages/workflows/Full%20Test/badge.svg?branch=main)
[![codecov](https://codecov.io/gh/vikidi/Homepages/branch/main/graph/badge.svg?token=1WIVGX4OYC)](https://codecov.io/gh/vikidi/Homepages)
![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability/vikidi/Homepages)
![Code Climate technical debt](https://img.shields.io/codeclimate/tech-debt/vikidi/Homepages)
![GitHub](https://img.shields.io/github/license/vikidi/Homepages?color=brightgreen)

This is my personal home page's code base which is at [villesaarinen.me](https://villesaarinen.me).

## Server
These websites are currently running at the moment on a single Raspberry Pi 3B+ board. I have plans to create RPi cluster whish would act as a more sophisticated hardware solution. Later when I mention server it means this board.

Production instances of the NodeJS servers are created and managed with _PM2_ and can be reviewed (by me) from [pm2.io](https://pm2.keymetrics.io/). 

## Security
The server uses following programs to ensure better security. Reports generated by _Logwatch_ and _Fail2Ban_ are send to my email via _Sendmail_ and _SendinBlue_ SMTP server.   
- UFW
- Logwatch
- [Fail2Ban](https://www.fail2ban.org/wiki/index.php/Main_Page)
- (ClamAV - Not enough RAM, not using...)

### Hacking Me
**Please do not try to hack my site or my server!**

If you still try to hack me and even succeed in it, please make an issue to this repo covering the vulnerabilities :slightly_smiling_face:

## Overall System
I'm not going into too much detail here for security reasons. If you want to know more feel free to contact me directly.

Domain name (villesaarinen.me) is from _GoDaddy_.

Nameservers are moved to _CloudFlare_, which handles the routing to my site. _CloudFlare_ provides also CDN service and extra security to the application.

DNS is updated to _CloudFlare_ using _ddclient_ on the server, which then requests _DNS-O-Matic_ to update _CloudFlare_. 

My router forwards requests to the server's private ip address. This is setup to be static in the local network.

On the server is _Nginx_ reverse-proxy server which recives the requests and forwards them to the port where the application is running.

## About The Code
This section mainly discusses about the code itself.

### Get Started
To be continued...

### Frontend
To be continued...

### Backend
To be continued...

## CI/CD
This section is about the continuous integration and deployment that the project has. This consists of Github action and 3rd party applications reviewing the code base.

### Github actions
_To be continued..._

### 3rd Party Applications
Mainly using these products to test them out and learn about them:  
- [CodeClimate](https://codeclimate.com/)
- [Cypress](https://www.cypress.io/)
- [Imgbot](https://imgbot.net/)
- [Renovate](https://www.whitesourcesoftware.com/free-developer-tools/renovate)
- [Whitesource Bolt](https://www.whitesourcesoftware.com/free-developer-tools/bolt)
- [Snyk](https://snyk.io/)
- [CodeCov](https://about.codecov.io/)
- [CodeBeat](https://codebeat.co/)
- [Codacy](https://www.codacy.com/)
- [Debendabot](https://app.dependabot.com/)
- [AccessLint](https://accesslint.com/)
- [CodeFactor](https://www.codefactor.io/)
- [DeepScan](https://deepscan.io/)
- [CodeScene](https://codescene.io/)
- [Depfu](https://depfu.com/)
- [Restyled](https://restyled.io/)
- [Better Code Hub](https://bettercodehub.com/)

### Unit Testing
Unit testing is done in both frontend and backend cases with _Jest_.  
_To be continued..._

### Integration Testing
Integration testing is also done using _Jest_ and it mainly consists of API testing for backend.  
_To be continued..._

### End-2-End Testing
E2E-testing is done by using _Cypress_. Also npm package "start-server-and-test" is used in CI pipeline to run these tests easily.  
_To be continued..._

### Coverage
Testing coverage is generated by _Jest_ combined from unit and integration testing and it is then uploaded to _CodeCov_ for further investigation.  
Graph from _CodeCov_ for coverage:

![GitHub Logo](https://codecov.io/gh/vikidi/Homepages/branch/main/graphs/sunburst.svg)

## Contact
You can contact me any time through any of these:  
Email - villesaarinendev@gmail.com  
Telegram - @vikidi

## Contributing
I am not currently accepting PRs to this project, since it is part of my own portfolio. If you want to help, you can leave an issue or contact me directly.

## License
Open source rules! This project is under MIT license, which means you can freely use the code. If you use this project and feel generous, please include my name and website in your project: Ville Saarinen, [villesaarinen.me](https://villesaarinen.me).