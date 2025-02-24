import express from 'express';

var router = express.Router();

router.post('/meeting-id', async function (req, res) {
    const data = req.body; // Read data from the body of the POST request
    console.log(data);

    // Send a response back to the client
    res.status(200).json({
        message: 'Meeting data received successfully',
        data: data
    });
});

export default router;
