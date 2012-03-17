/**
 * User: Carl Glaysher
 * Date: 17/03/2012
 * Time: 08:46
 * Description: Server to Test Connections
 */
var spamc = require('./spamc');
var client = new spamc('localhost');
client.learn('My Message','spam',function(res){
    console.log(res);
});