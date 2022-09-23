import express from 'express';

const router = express.Router();

router.get('/users',(req,res)=>res.send('This is the users page'));

export default router;