import dotenv from "dotenv";
import { createServer } from "node:http";

dotenv.config();

const port = Number(process.env.PORT ?? 3000);

const server = createServer((request, response) => {
  if (request.method === "GET" && request.url === "/") {
    response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("server connected");
    return;
  }

  response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
  response.end("Not found");
});

server.once("listening", () => {
  const address = server.address();
  const listeningPort = typeof address === "object" && address ? address.port : port;
  console.log(`Server listening on http://localhost:${listeningPort}`);
});

const listen = (requestedPort: number) => {
  server.listen(requestedPort);
};

server.on("error", (error: NodeJS.ErrnoException) => {
  if (error.code === "EADDRINUSE" && port !== 0) {
    console.warn(`Port ${port} is busy; selecting an available port.`);
    listen(0);
    return;
  }

  throw error;
});

listen(port);