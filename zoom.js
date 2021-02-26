const config = require('./config/config');
const agenda=require("./agenda");
const User = require("./models/UserSchema");

function test()
{
    console.log("Test");
}

async function StartZoomMeeting(topicname,date) {
    const email=User.find({
        "email":email
    },(err,teams) => {
        console.log(err);
    });
    console.log(email);
    const options = {
        method: "POST",
        uri: "https://api.zoom.us/v2/users/" + email + "/meetings",
        body: {
            topic: topicname,
            start_time: date,
            type: 1,
            settings: {
                host_video: "true",
                participant_video: "true",
                approval_type: 0
            }
        },
        auth: {
            bearer:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOm51bGwsImlzcyI6IktNSHhaV0IyVE11OHR0RlFUT3Bib3ciLCJleHAiOjE2MTQ5MjQ5NTMsImlhdCI6MTYxNDMyMDE2OH0.jLl7V1bU97R1NvDAzqbMermO3zBH8QjK5rHnU-1mvas"
        },
        headers: {
            "User-Agent": "Zoom-api-Jwt-Request",
            "content-type": "application/json"
        },
        json: true //Parse the JSON string in the response
    };

    try {
        const response = await rp(options);
        result = JSON.stringify(response);
        result = JSON.parse(result);
        console.log(result.start_url);
        agenda.scheduleMsg(result.start_url,result.start_time); // To schedule msg send


    } catch (error) {
        console.log("API call failed, reason ", error);
    }
}

module.exports.StartZoomMeeting=StartZoomMeeting;
