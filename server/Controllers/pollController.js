import { v4 as uuidv4 } from 'uuid';
//import {selectAll} from '../models/poll.js'

let polls = [
	{
		"question":"test"
			
	}
	]
export const getPoll = (req,res) => {
		res.send(selectAll);
	}
export const getPollByID = (req,res) => {
	const { id } = req.params;
	const foundPoll = polls.find((poll) => poll.id === id);
	res.send(foundUser);
}
export const CreatePoll = (req,res) => {
	const poll = req.body;
	
	polls.push({ ...poll, id: uuidv4() } );
	
	res.send(`poll with the name ${poll.question} added to the database! `);
}
export const DeletePoll = (req,res) => {
	const { id } = req.params;
	polls = polls.filter((poll => poll.id !== id));
   res.send(`your question with id  ${id} has been removed from the database`);
}