const express = require("express");
const error = require("./middleware/errorMiddleware");
const found = require("./middleware/notFoundMiddleware");

const app = express();

const connectDB = require("./config/db");
const PORT = process.env.PORT || 3001;
connectDB();

// Body Parser Middleware
app.use(express.json());



app.use("/api/users", require("./routers/usersRoutes"));

app.use("/api/services", require("./routers/servicesRoutes"));

app.use("/api/tours", require("./routers/toursRoutes"));

// Body Parser Middleware
app.use(express.json());

app.use(found);


// Init middleware
app.use(error);


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
