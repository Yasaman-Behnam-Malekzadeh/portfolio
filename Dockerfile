FROM node:lts-slim as builder
EXPOSE 3000

WORKDIR /app

COPY public/ /app/public
COPY src/ /app/src/
COPY package.json /app/

RUN npm install

## Save output to build directoy
RUN npm run build

FROM node:lts-slim

WORKDIR /app

RUN npm install -g serve
COPY --from=builder /app/build /app/build

CMD ["serve", "-s", "build"]