var express = require('express');
var bodyParser = require('body-parser');


var app = express();

app.get('/:query', function(req, res) {
    var date = req.params.query;

    if (!isNaN(Date.parse(date))) {
        var dateTime1 = new Date(date).toDateString();

        var dateTime2 = Date.parse(date);

        data = { "unix": dateTime2, "natural": dateTime1 }
        res.send(data);
    } else {
        var timestamp = parseInt(date);
        var unixtime = new Date(timestamp);
        var unixdate1 = new Date(unixtime).toDateString();

        datas = { "unix": timestamp, "natural": unixdate1 }
        res.send(datas);
    }



});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
})