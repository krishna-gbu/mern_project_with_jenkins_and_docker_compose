const express = require("express");
const app = express();
const axios = require("./utils/axios");
const cors = require("cors");

app.use(cors());



app.get("/api", async (req, res) => {
   console.log(req.socket.remotePort); 
  try {
    let posts = await axios.get("/users/1");
    res.status(200).json(posts.data);
  } catch (error) {
    console.log(error.message);
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server running on port: ${port}`));
