const http = require("http");
const fs = require("fs");
const path = require("path");

const port = Number(process.env.PORT || 4173);
const rootDir = __dirname;

const mimeTypes = {
  ".css": "text/css; charset=UTF-8",
  ".html": "text/html; charset=UTF-8",
  ".js": "text/javascript; charset=UTF-8",
  ".json": "application/json; charset=UTF-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
};

const resolveFilePath = (requestUrl) => {
  const cleanPath = requestUrl === "/" ? "/index.html" : requestUrl;
  const filePath = path.join(rootDir, decodeURIComponent(cleanPath));
  if (!filePath.startsWith(rootDir)) {
    return null;
  }
  return filePath;
};

const server = http.createServer((request, response) => {
  const filePath = resolveFilePath(request.url || "/");

  if (!filePath) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  fs.stat(filePath, (statError, stats) => {
    if (statError) {
      response.writeHead(404);
      response.end("Not found");
      return;
    }

    const finalPath = stats.isDirectory() ? path.join(filePath, "index.html") : filePath;
    const extension = path.extname(finalPath).toLowerCase();
    const contentType = mimeTypes[extension] || "application/octet-stream";

    fs.readFile(finalPath, (readError, data) => {
      if (readError) {
        response.writeHead(500);
        response.end("Server error");
        return;
      }

      response.writeHead(200, { "Content-Type": contentType });
      response.end(data);
    });
  });
});

server.listen(port, () => {
  console.log(`Proyecto disponible en http://localhost:${port}`);
});
