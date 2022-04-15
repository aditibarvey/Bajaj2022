const express = require("express");
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;
app.use(express.json());


app.get('/', (req, res) => {

    let chars = [];
    let nums = [];

    res.forEach(char => {
        if (typeof char === 'string' || char instanceof Stringchar.isalpha()) {
            chars.push(char);           
        }
        else{
            nums.push(char);
        }
    })
    
    res.send({
            "is_success": true,
            "user_id": "aditi_barvey_12082001",
            "email":"adu001barvey@gmail.com",
            "roll_number": "0832CS191012",
            "numbers": nums,
            "alphabets": chars
        });
    
});

app.post('/bfhl', (req, res) => {
    console.log(req.body);
    
    res.send({
            "is_success": true,
            "user_id": "aditi_barvey_12082001",
            "email":"adu001barvey@gmail.com",
            "roll_number": "0832CS191012",
            "numbers": nums,
            "alphabets": chars
        });
    
   
    var numbers = req.body['numbers'];

    var check = true;
    for (var i = 0; i < numbers.length; i++) {
        var num = numbers[i];
        console.log(num)
        if (num >= '0' && num <= '9')
            num = parseInt(num);
        else if (num >= 0 && num <= 9)
            num = num;
        else
            check = true;

        if (typeof (num) != 'number') {
            check = false;
            break;
        }
    }

    if (check) {

        res.send({
            "is_success": true,
            "user_id": "aditi_barvey_12082001",
            "email":"adu001barvey@gmail.com",
            "roll_number": "0832CS191012",
            "numbers": ["1", "45", "343"],
            "alphabets": ["A", "B"]
        });
    }
    else {
        res.send({
            "is_success": false,
            "user_id": "aditi_barvey_12082001"
        });
    }

})



app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
