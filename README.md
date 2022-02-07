# Save-the-date
Bring your wedding album to the internet

## Installation and Setup Instructions
### Installation
Clone down this repository. You will need node and npm installed globally on your machine.
`npm install`
### Start the server
`npm start`
### Build the application:
`npm run dist`

### Deploy to gh page
The application currently have a task that support gh page. Take a look at task `gh-build` in [package.json](package.json) and change the public url to your gh page url

### Visit application:
`http://localhost:1234/`

## Demo
https://kingtran2112.github.io/save_the_date

## Custom the application
The content of the application is in [Resource file](src/resources/content.json). For custom the preview content, take a look at [index.html](src/index.html) and change the value of meta tag at your wish

## Deploy production

This application using Docker to make it easier for deploying in production
environment. The [Docker compose file](docker-compose/docker-compose.yml)
make the process more easier. Please fill your value to the docker compose
file and using

```cmd
docker-compose up -d
```

to run it.

The docker-compose will pull the image for the application and `traefik`
and start these images.

## Troubleshoot problem

* If any problem with letenscript certificate, please delete the json file (the file is specified in `--certificatesresolvers.myresolver.acme.storage`
in docker-compose file) and restart traefik, it will re-create the certificate for you
## Roadmap
[Take a look to the list here](Optimize-list.md)
