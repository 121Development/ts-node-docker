https://dev.to/dariansampare/setting-up-docker-typescript-node-hot-reloading-code-changes-in-a-running-container-2b2f

Prod YML:
This file is going to work together with our first docker-compose file, but it will overwrite the commands we want to change in production.

So, in this case, we are just going to target the production step of our Dockerfile instead, and run node build/index.js instead of npm run dev so we can start our compiled project.

To start our container in production, run:
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
