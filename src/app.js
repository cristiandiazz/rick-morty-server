const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(router);

mongoose.connect(
  'mongodb+srv://kiri:7iOheo3RSbQmxi5s@cluster0.sxkmm.mongodb.net/Cluster0?retryWrites=true&w=majority',
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err) => {
    if (err) return console.log('Error: ', err);
    return app.listen(3000, () => {
      console.log('Node server running on http://localhost:3000');
      console.log(mongoose.connection.readyState);
    });
    // eslint-disable-next-line comma-dangle
  }
);
