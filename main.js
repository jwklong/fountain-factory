let something = ""
for (v in tabs) {
    something += "<h5 class='tabbutton' onclick='setTab(tabs[\"" + v + "\"])'>" + v + "</h5>"
}
document.getElementById("tabs").innerHTML = something

setTab(tabs["Factory"])

function saveGame(){
    try{
        localStorage.setItem("FountainFactory", btoa(encodeURIComponent(JSON.stringify(game))));
    }
    catch(e){
        console.warn("game is no save ;(");
    }
}

function loadGame(str)
{
    let loadObj;
    str = str || localStorage.getItem("FountainFactory") || "reset";
    if(str === "reset") return;
    try
    {
        loadObj = JSON.parse(decodeURIComponent(atob(str)));
    }
    catch(e)
    {
        console.warn("game is no load ;(");
        return false;
    }
    game = loadObj
    //initialise properties
    game.money = new e(game.money)
}
loadGame()
setInterval(() => {
    saveGame()
}, 10000);