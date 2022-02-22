import express from 'express';
import { v4 as uuidv4 } from 'uuid';


const router = express.Router();

let polls = []

router.get('/',(req,res) => {
	console.log(polls);
	res.send(polls);
});

router.post('/',(req,res) =>{

	const poll = req.body;
	const pollwithID = { ...poll,id:uuidv4()}
	polls.push(pollwithID);
	console.log(poll.question);
	res.send(`your question is ${poll.question}`);
});
router.get('/:id',(req,res) => {
	const { id } = req.params;
	const foundPoll = polls.find((poll) => poll.id === id);
	res.send(foundUser)
	// res.send("itt works")
});
router.delete('/:id',(req,res) => {
	const { id } = req.params;
	 polls = polls.filter((poll => poll.id !== id));
	res.send(`your question with id  ${id} has been removed from the database`);
});

export default router;