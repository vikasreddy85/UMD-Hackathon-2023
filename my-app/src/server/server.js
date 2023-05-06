const express = require('express');
const app = express();
const port = 8000; 

app.get('/result', (req, res) => {    
    res.redirect('result');
});

app.listen(port, () => console.log(`Listening on port ${port}`));