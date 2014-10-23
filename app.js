//Ga naar deze link om fbToken te verkrijgen. Na redirect URL snel kopieren.
//https://www.facebook.com/dialog/oauth?client_id=464891386855067&redirect_uri=https://www.facebook.com/connect/login_success.html&scope=basic_info,email,public_profile,user_about_me,user_activities,user_birthday,user_education_history,user_friends,user_interests,user_likes,user_location,user_photos,user_relationship_details&response_type=token 

var tinder = require('tinderjs');
var client = new tinder.TinderClient();

var fbToken = '',
    fbId    = '';



client.authorize(fbToken, fbId, function(response){
    var settings = client.getDefaults();
    setSettings(settings);
    client.updatePosition('4.897156', '52.368368', function(){
        client.getRecommendations(1, function(error, data){
                console.log(error);
                console.log(data);
        });
    });
    
});

var setSettings = function(settings){
    settings.user.age_filter_min = 18;
    console.log(settings);
};