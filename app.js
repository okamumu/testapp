const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// body-parserを使用してJSONデータを解析します。
app.use(bodyParser.json());

app.post('/register', (req, res) => {
    const { Name, Email } = req.body;

    console.log(req.body)

    // 受信データから新たなデータを生成
    const newData = {
        Name: Name,
        Email: Email,
        command: `./run prog1 ${Name} ${Email}`
    };

    console.log(newData);

    // ここでデータベースにnewDataを登録するロジックを追加します。
    // 例：db.collection('users').insertOne(newData);

    res.status(201).send("Data registered successfully!");
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
