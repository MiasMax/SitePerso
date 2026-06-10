# ---------- Stage 1: build the Vite front-end ----------
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# ---------- Stage 2: lean runtime — Express serves API + static build ----------
FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
RUN npm install --omit=dev
COPY api ./api
COPY --from=build /app/dist ./dist
EXPOSE 3000
USER node
CMD ["node", "api/server.js"]
