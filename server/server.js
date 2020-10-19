const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('HOMEPAGE SOON TO BE DEVELOPED');
});


let PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server on ${PORT}`);
})