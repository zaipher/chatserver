const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3000;

var messages = [];
var id = 1;
app.get("/messages", (req, res) => {
    res.send(messages);
});

app.post("/messages", (req, res) => {
    console.log(req.body);

    var message = req.body;
    message.id = id;

    messages.push(message);

    id = id + 1;

    var payload = {
        message: "ok"
    }

    res.send(payload);
});

/**
 * Endpoint: POST /messages/:id/delete
 */
app.post("/messages/:id/delete", (req, res) => {
    var id = req.params.id;

    messages = messages.filter((item) => {
        return item.id != id;
    });

    var payload = {
        message: "ok"
    }

    res.send(payload);
});

app.listen(port);
