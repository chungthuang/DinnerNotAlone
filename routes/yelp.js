var Yelp = require('yelp');

var yelp = new Yelp({
  consumer_key: 'gLuYHAYcXRewqUmCFD8nQw',
  consumer_secret: 'EKeSrHWDLxAcVtGfBlV1FPPVU7Y',
  token: 'MterUEI1N6NHEoI5PYOuy7R6miwTVzbV',
  token_secret: '4UsxJ_10D2vR7vNSwvgVIG5PYsE',
});

function search(choices, _callback){
    console.log("search");
    yelp.search({ term: "Soup", location: '61820' })
      .then(function (data) {
        //console.log(data.businesses);
        var food = data.businesses;
        // var chocies = [];
        for(var i = 0; i < 10; i++){
          choices.push({text: food[i].name, votes:[]});
        }
        _callback(choices);
        // console.log("second",choices);
        // var pollObj = {question: question, choices: choices};
        // var poll = new Poll(pollObj);

        // poll.save(function(err, doc) {
        //   if(err || !doc) {
        //     throw 'Error';
        //   } else {
        //     res.json(doc);
        //     //res.send({redirect: '/#/poll'+doc._id});
        //   }   
        // })
      })
      .catch(function (err) {
        console.error(err);
      });
  }
  function getData(choices,callback){
    search(choices,function(response){
      console.log("Im done");
      //console.log(response);
      callback(response);
    })
  }
  module.exports = {
  	get_data: function(choices,callback){
    	search(choices,function(response){
      	console.log("Im done");
      	//console.log(response);
      	callback(response);
    	})
  	}
  }

 