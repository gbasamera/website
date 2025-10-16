// server.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/api/submit', (req, res) => {
    console.log('收到数据:', req.body);
    // 这里可以保存到数据库或文件
    res.status(200).json({ message: '数据接收成功' });
});

app.listen(port, () => {
    console.log(`服务器运行在 http://localhost:${port}`);
});