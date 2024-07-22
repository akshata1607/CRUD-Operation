var express = require("express");
var mongoose = require("mongoose");
var routes = require("./routes/routes");
var cors = require("cors"); // Import the cors middleware
var server = express();

const corsOptions = {
  origin: "http://localhost:4200", // Specify the allowed origin
  optionsSuccessStatus: 200, // For legacy browser support
};

server.use(cors(corsOptions)); // Enable CORS with specified options

async function connectToDatabase() {
  try {
    await mongoose.connect("mongodb://localhost:27017/CRUD", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connected!");
  } catch (error) {
    console.error("Error connecting to DB:", error.message);
    process.exit(1); // Exit the process if unable to connect to the database
  }
}

connectToDatabase();

server.use(express.json());
server.use(routes);
server.use(cors());

server.listen(8080, function check(error) {
  if (error) {
    console.error("Error starting server:", error.message);
    process.exit(1); // Exit the process if unable to start the server
  } else {
    console.log("Server started on port 8080!");
  }
});
