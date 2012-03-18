# node-spamc

node-spamc is a nodejs module that connects to spamassassin's spamd daemon. You are able to:

  - Check a message for a spam score and return back what spamassassin matched on
  - Ability to send messages to spamassassin to learn from
  - Ability to do everything that `spamc` is capable of

## Commands Available

  - `check` checks a message for a spam score and returns an object of information
  - `symbols` like `check` but also returns what the message matched on
  - `report` like `symbols` but matches also includes a small description
  - `reportIfSpam` only returns a result if message is spam
  - `process` like `check` but also returns a processed message with extra headers
  - `headers` like `check` but also returns the message headers in a array
  - `learn` abilty to parse a message to spamassassin and learn it as spam or ham
  - `tell` ability to tell spamassassin that the message is spam
  - `revoke` abilty to tell spamassassin that the message is not spam


## Example

This example will parse a message to spamassassin to perform a report and will callback on success.

    var spamc = require('./spamc');
    var client = new spamc();

    client.report('My Message as String',function(result){
        console.log(result);
    });


    