const express = require('express')
const app = express();
const port = 3000

var a = 1;
let b = 1;
const c = 1;

function unusedFunc() {
    if(true)
        return false;
    return 1;
}
unusedFunc("what");
app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
