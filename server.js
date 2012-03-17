/**
 * User: Carl Glaysher
 * Date: 17/03/2012
 * Time: 08:46
 * Description: Front end to check spamc client
 */
var spamc = require('./spamc');
var client = new spamc();

client.report('My Message as String',function(result){
    console.log(result);
});

/* Example Response
 {
    responseCode: 0,
    responseMessage: 'EX_OK',
    isSpam: true,
    spamScore: 6.9,
    baseSpamScore: 5,
    report:[
        {
            score: '0.0',
            name: 'NO_RELAYS',
            description: 'Informational',
            type: 'message'
        }
    ]
 }
*/