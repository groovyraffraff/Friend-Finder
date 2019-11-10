//require friends.js as a data source for our comparison profiles

var friendData = require("../app/data/friends.js");

module.exports = function(app) {
        app.get("/api/friends", function(req, res) {
            res.json(friendData); 
        });


  // A POST route will add newFriend to the Friends json object
      app.post("/api/friends", function (req, res) { 
        var newF = req.body
 
//logic to find best match from existing friends with the new friend
  //This object will hold our most compatible friend
        var compatibleF = {};
    
     //Loop through all of the current friends    
        for(var i = 0; i < friendData.length; i++){        
          var totalDif =0;
    //Loop through scores of a given friend, subtract scores of the new friend to find the total difference of the score of each friend with the new friend
          for (var j=0; j<friendData[i].scores.length; j++) {
            var diff = Math.abs(newF.scores[j] - friendData[i].scores[j]);
            totalDif += diff;
          }
    //Set the first friend as 'compatible', then compare the next friend. If they have a lower Total Difference, make them 'compatible'. Continue to compare the next friend to the 'compatible' friend until you've compared each friends Total Difference, which will ultimately make the one with the lowest Total Differnece the 'compatible' friend.
          if (i===0) {
            compatibleF={index: i, totalDif: totalDif};
          } else {
              if (totalDif < compatibleF.totalDif) {
                compatibleF={index: i, totalDif: totalDif};
                  }
              }         
        }  
//Store the compatible friends data in variable
        var bestieMatch = friendData[compatibleF.index]    
//send the compatible friend's data to client
        res.json(bestieMatch);
            });
        };

