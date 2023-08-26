const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const users = [
  {
    username: 'kms',
    password: 'kms',
  },
  {
    username: 'mskwon',
    password: 'mskwon',
  },
];

app.post('/login', (req, res) => {
  const { id, password } = req.body;
  console.log(id, password);

  const user = users.find(
    (user) => user.username === id && user.password === password
  );

  if (user) {
    res.status(200).json({ username: user.username });
  } else {
    res.status(401).json({ message: '인증에 실패하였습니다.' });
  }
});

app.listen(8000, () => {
  console.log('서버가 8000 포트에서 작동 중입니다.');
});
