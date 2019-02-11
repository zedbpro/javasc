var express = require('express');

var taha = express();

taha.get('/',function(req,res){

res.send('taha is the best');
/*res.sendFile(__dirname + '/html/index.html');*/

});
taha.listen(3000);









/*console.log('server is strting');

var express = require('express');
var app = express();
var server =listen(3000, listening);

function listening() {


  console.log("listening...");
}
*/
