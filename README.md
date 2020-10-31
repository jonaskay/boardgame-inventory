# React + NestJS Example

This project is an example of how to build a React + NestJS that is end-to-end testable both locally and in a CI pipeline.

## Development

### Requirements

* [Docker Compose](https://docs.docker.com/compose/)

### Getting started

To develop the project locally, run

```
$ docker-compose up
```

### Testing

To run end-to-end tests, run

```
$ docker-compose run --rm test yarn start
```

### Directories

* **/api** contains the server application
* **/client** contains the client application
* **/proxy** contains a reverse proxy that is used to replicate load balancing in production
* **/test** contains a test runner for end-to-end testing
