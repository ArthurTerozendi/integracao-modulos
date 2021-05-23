const express = require("express");
const cors = require("cors");

const app = express();
const posts = require("./routes/api/posts");

app.use(express.json());
app.use(cors());

const port = process.env.port || 5000;

app.listen(port,
    () => {
        console.log(`Servidor rodando, na porta ${port}`);
    }
)

app.use("/api/posts", posts);
