//Friend Finder App - html routes javascript file
//Contains two routes
//A GET Route to `/survey` which should display the survey page.
//* A default, catch-all route that leads to `home.html` which displays the home page.

//---Dependencies---
var path = require("path");

module.exports = function(app) {

//route to survey
    app.get('/survey', function(req, res){
        res.sendFile(path.join(__dirname, '../public/survey.html'));

    });

//no matching route is found then route back to home page
    app.get("*", function(req, res){
            res.sendFile(path.join(__dirname, '../public/home.html'))
        });
}