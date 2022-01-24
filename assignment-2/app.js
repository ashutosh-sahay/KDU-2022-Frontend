// 3. Api call for Who To Follow - Submitted by Ashutosh

import express from "express";
import casual from "casual";

const app = express()

// --------DESIRED JSON STRUCTURE--------------
// user1{
//     connection1{
//         ..
//         ..
//     },
//     connection2{
//         ..
//         ..
//     },
// }
// user2{
//     connection1{
//         ..
//         ..
//     }
// }


//function to get connection details of one connection 
function getConnection(){
    return ({
                connectionAvatar : casual.word+'.png',
                connectionUserName : casual.full_name,
                connectionUserHandle : '@'+casual.username,
                connectionUserDescription : casual.short_description,
                connectionUserMutual : casual.name +', '+casual.name+', and '+casual.integer(1,10) + ' others',
    })
}

//api call
app.get('/api.twitter.com/users/:userID/connect_people',(req,res)=>{
    let userConnectionItems = {
    }

    let limit = casual.integer(1,7)

    for(let i=0;i<limit;i++){
        let key = "connection"+ (i+1).toString()
        let connectionItems = getConnection();
        userConnectionItems[key]=connectionItems;
    }

    let userConnections = {}
    userConnections[req.params.userID] = userConnectionItems;

    res.send(userConnections)
})

app.listen(3000, ()=>{
    console.log("Server started on port 3000")
})

