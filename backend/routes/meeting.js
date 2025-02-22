import express from 'express';

var router = express.Router();

router.get('/meeting-id', async function (req, res) {
    const data = req.query
    console.log(data)
    
})
export default router