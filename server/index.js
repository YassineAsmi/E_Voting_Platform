import express from 'express';
import bodyParser from 'body-parser';
import pollsRoute from './poll.js'

const app =express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/poll',pollsRoute);

app.get('/',(req,res)=>{
	console.log("test");
	res.send('Send hello');
	
});
app.listen(PORT,() => console.log(`Server Running on port: ${PORT}`))