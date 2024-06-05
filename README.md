# Apollo GraphQL Starter

This repository was created to help developers to quickly set-up Apollo + GraphQL projects.

## How to use

1. **Install the dependencies**

```bash
yarn install
```

2. **Copy the .env.example to .env**

```bash
cp .env.example .env
```

3. **Run the project via Docker (this will run a MongoDB instance aswell)**

```bash
yarn start:docker
```

3. **Run the locally**

```bash
yarn dev
```

## Apollo

To use Apollo and query your database or test mutations, you should go to:

```
http://localhost:{APOLLO_PORT}/
```

To make requests to the GraphQL server, you should use the endpoint:

```
http://localhost:{APOLLO_PORT}/graphql
```

**IMPORTANT:** To run the project locally, you need to make sure that you have your own Mongo container running via Docker. To see how you can run your own Docker instance locally, [check out this](https://www.geeksforgeeks.org/how-to-run-mongodb-as-a-docker-container/).

At this point, I assume you already have docker installed on your machine, but, if you doesn't, do it [here.](https://docs.docker.com/engine/install/)

### Project scripts

```json
"scripts": {
    "dev": "ts-node-dev src/index.ts",
    "build": "tsc",
    "start:build": "tsc && node dist/index.js",
    "start": "node dist/index.js",
    "lint": "eslint 'src/**/*.ts'",
    "start:docker": "docker-compose up --build"
  },
```

### Sample tests

I created a sample test to make sure your GraphQL connection is secured. You can call it by:

```bash
yarn test
```

or

```bash
yarn jest src/__tests__/e2e.spec.ts
```
