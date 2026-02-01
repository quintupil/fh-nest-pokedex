# Install dependencies only when needed
FROM node:18-alpine3.15 AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.

RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn/ .yarn/

#RUN yarn install --frozen-lockfile
# RUN corepack enable
# RUN corepack prepare yarn@4.12.0 --activate
# RUN yarn install --immutable
RUN corepack enable \
  && yarn config set nodeLinker node-modules \
  && yarn install --immutable

# Build the app with cache dependencies
FROM node:18-alpine3.15 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
#RUN yarn build
# IMPORTANTE: corepack en este stage también
RUN corepack enable && yarn build


# Production image, copy all the files and run next
FROM node:18-alpine3.15 AS runner
# Set working directory
WORKDIR /usr/src/app
ENV NODE_ENV=production

#COPY package.json yarn.lock ./
#RUN yarn install --prod
#COPY --from=builder /app/dist ./dist
# Copia lo necesario para ejecutar
COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY package.json ./



# # Copiar el directorio y su contenido
# RUN mkdir -p ./pokedex

# COPY --from=builder ./app/dist/ ./app
# COPY ./.env ./app/.env

# # Dar permiso para ejecutar la applicación
# RUN adduser --disabled-password pokeuser
# RUN chown -R pokeuser:pokeuser ./pokedex
# USER pokeuser

# EXPOSE 3000

CMD [ "node","dist/main" ]