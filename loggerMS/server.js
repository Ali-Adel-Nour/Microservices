const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const Producer = require('./producer');
const producer = new Producer();


app.use(bodyParser.json());

app.post('/sendLog', async (req, res) => {
   await producer.publishMessage(req.body.logType,req.body.message);

   res.send()

})

app.listen(3000, () => {
  console.log ('Server is running on port 3000');
})