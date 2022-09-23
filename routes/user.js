const  express= require('express')

const router = express.Router();

router.get('/users',(res,req)=>res.send('This is the users page'));

export default router;