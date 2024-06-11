const http = require("http");
const app = require("./app");
const httpServer = http.createServer(app);
const dotenv = require("dotenv");

//enviromental variables configuration
dotenv.config();

const PORT = process.env.PORT;

const startServer = async () => {
  httpServer.listen(PORT, () => {
    console.log(`server is runing on port: ${PORT}`);
  });
};

startServer();
