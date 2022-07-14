import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors())

app.listen(4000, () => {
  console.log(`server running on port 4000`);
});

app.get('/', function (req, res) {  
    res.send("Typescript Node Docker Express server running here")  
 })  