import express from 'express';
import {CreatePoll,getPoll,getPollByID,DeletePoll} from '../Controllers/pollController.js';

const router = express.Router();


router.get('/',getPoll);

router.post('/',CreatePoll);

router.get('/:id',getPollByID);

router.delete('/:id',DeletePoll);

export default router;