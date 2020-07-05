# dockerized-application
 
 Dockerizing a web application using:
 
 - node.js-v10
 - docker
 - docker-compose-v3.7
 
 The main goal of this repo is to get an understanding of how dockerized applications work and also, how to set up a database using docker.
 
 # Usage
 
 ## Code
 Go into the folder `./api` and run `npm install`
 
## Building Images and Containers
Run:

```docker-compose up -d```

This command will create two containers: *mysql-container* and *node-container*.

**Details**
You can check for logs using: ```docker logs node-container```

# Acknowlegments

Special thanks to the YouTube channel: programadorabord.

- https://www.youtube.com/watch?v=Kzcz-EVKBEQ&t=763s
- https://www.youtube.com/watch?v=HxPz3eLnXZk&t=69s
- https://medium.com/better-programming/customize-your-mysql-database-in-docker-723ffd59d8fb
