# -------- Base ---------
# What image do you want to start building on?
FROM node:12-alpine AS base

# Tell your container where your app's source code will live
WORKDIR /app

# -------- Builder ---------
FROM base AS builder

COPY package*.json .babelrc ./

RUN npm install

COPY ./src ./src

RUN npm run build

RUN npm prune --production

# -------- Release ---------
FROM base AS release

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

USER node

# What port will the container talk to the outside world with once created?
EXPOSE 4000

# How do you start your app?
CMD ["node", "./dist/index.js"]