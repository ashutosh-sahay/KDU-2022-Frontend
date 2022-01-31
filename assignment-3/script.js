// OnHover UserProfile - Submitted by Ashutosh Sahay


const url = "http://localhost:3000/api/user/spiderman";

//Function to fetch data 
async function getData(){
    const data = await fetch(url)
    const jsonData = await data.json()
    console.log(jsonData)
    return jsonData;
}

//function to be triggered on mouseOver of userDp, userName, userHandle
async function profilePopUp(){
    const userData = await getData() //userData now has the json data fetched from URL

    let popDiv = document.querySelector("#popUp-profile");
    popDiv.innerHTML = "" //resetting innerHTML to avoid duplication of popUp profile contents on each mouseOver

    //Creating elements for each data member as per our req.
    let userName = document.createElement("label")
    userName.textContent = userData.name;

    let userHandle = document.createElement("label")
    userHandle.textContent = userData.id;

    let userDescription = document.createElement("label")
    userDescription.textContent = userData.description;

    let userFollowing = document.createElement("label")
    userFollowing.textContent = userData.following + " Following";
    
    let userFollowers = document.createElement("label")
    userFollowers.textContent = userData.followers + " Followers";

    // This div will contain all elements and will be attached finally to our popUp div
    let attachDiv = document.createElement("div")
    attachDiv.style.display = "flex";
    attachDiv.style.flexDirection = "column"
    
    //Creating and styling rows of div - Styling of popUp profile elements are done in JS only

    let row1 = document.createElement("div")
    row1.style.display = "flex";
    row1.style.alignItems = "center"

    let userDp = document.createElement("img")
    userDp.src = "./Spiderman.png"
    userDp.style.height = "5vh";
    userDp.style.width = "3vw";
    userDp.style.borderRadius = "5vh";
    userDp.style.marginLeft = "0.5vw"
 
    let followBtn = document.createElement("button")
    followBtn.innerText = "Follow"
    followBtn.style.width = "6vw"
    followBtn.style.height = "4vh"
    followBtn.style.backgroundColor = "black"
    followBtn.style.color = "white"
    followBtn.style.border = "none"
    followBtn.style.borderRadius = "2vh"
    followBtn.style.marginLeft = "10vw"
    followBtn.style.fontStyle = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
     
    row1.append(userDp,followBtn)
    attachDiv.append(row1)


    let row2 = document.createElement("div")
    row2.append(userName)
    attachDiv.append(row2)


    let row3 = document.createElement("div")
    row3.append(userHandle)
    attachDiv.append(row3)

    let row4 = document.createElement("div")
    row4.style.marginTop = "0.75vh"
    row4.style.marginBottom = "0.75vh"
    row4.append(userDescription)
    attachDiv.append(row4)

    let row5 = document.createElement("div")
    userFollowers.style.marginLeft = "4vw"
    row5.append(userFollowing,userFollowers)
    attachDiv.append(row5)

    //attaching carrier div to our main popUp profile div finally
    popDiv.append(attachDiv)

    //setting visibility to visible on whenever mouseOver happens
    popDiv.style.visibility ="visible"
}

//function to hide profile popUp when mouse is removed 
function hidePopUp()
{
    document.querySelector("#popUp-profile").style.visibility = "hidden"
}

//Event Listeners for mouseOver and mouseOut
document.getElementById("feed-dp").addEventListener("mouseover", profilePopUp);
document.getElementById("feed-dp").addEventListener("mouseout", hidePopUp );

document.getElementById("feed-name").addEventListener("mouseover", profilePopUp);
document.getElementById("feed-name").addEventListener("mouseout", hidePopUp );

document.getElementById("feed-handle").addEventListener("mouseover", profilePopUp);
document.getElementById("feed-handle").addEventListener("mouseout", hidePopUp );