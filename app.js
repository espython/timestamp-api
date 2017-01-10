var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.get('/:query', function(req, res) {
    var date = req.params.query;
    console.log(!isNaN(Date.parse(date)));
    if (!isNaN(Date.parse(date))) {
        var dateTime1 = new Date(date).toDateString();
        console.log(dateTime1);
        var dateTime2 = Date.parse(date);
        console.log('success')
        console.log(dateTime2);
        data = { "unix": dateTime2, "natural": dateTime1 }
        res.send(data);
    } else {
        var timestamp = parseInt(date);
        var unixtime = new Date(timestamp);
        var unixdate1 = new Date(unixtime).toDateString();
        console.log('fail')
        console.log("unixdate", unixdate1);
        console.log("unixTime", timestamp);
        datas = { "unix": timestamp, "natural": unixdate1 }
        res.send(datas);
    }

    // dateTime = new Date(date);
    // var timestamp = Math.floor(dateTime / 1000);
    // var strdate = dateTime.toDateString();
    // var dateTime = new Date();
    //dateTime.toString()
    // var stringdate = dateTime.toISOString();
    //console.log('string date:', stringdate); // 
    // console.log(timestamp);
    //var data = { "unix": 1450137600, "natural": "December 15, 2015" }

    // console.log('dateTime', dateTime);
    // console.log('unixdate', parseInt(date));
    //console.log('unixdate', typeof parseInt(date));

});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
})