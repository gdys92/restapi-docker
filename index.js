const express= require('express')
const app = express()

const port = 3000;

app.listen(port, () => {
  console.log(`The app is working at http://localhost:${port}`)
});

app.get('/this', function (req, res) {
    res.json({"this": "api"});
});

app.use(express.urlencoded({
  extended: true
}));

app.post('/api', function(req, res) {
  var body = req.body;
  console.log(req.body.this);
  res.send(req.body.this);
});
