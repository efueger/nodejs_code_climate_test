const express = require('express')
const app = express();
const port = 3000

var a = 1;
let b = 1;
const c = 1;
abc = 123;

function unusedFunc() {
    var unused_local = 1;
    if(true)
        return false;
    return 1;
}

unusedFunc("what");
x=y;
app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
