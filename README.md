# First Cloud Hosting

A minimal Node.js HTTP server written in TypeScript.

## Run

```bash
npm install
npm run dev
```

The server loads settings from `.env`. Copy `.env.example` to `.env` and set `PORT` as needed.
Send a `GET` request to `http://localhost:3001/` with the included local `.env`; the response is `server connected`.
An environment-provided `PORT` takes precedence over `.env`.

To compile and run the production build:

```bash
npm run build
npm start
```# first_aws_server
# first_aws_server
