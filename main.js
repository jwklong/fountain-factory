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
    game.factoryVersion = loadObj.factoryVersion
    game.money = new e(loadObj.money)
    for(const u of Object.getOwnPropertyNames(loadObj.upgrades))
    {
        if(game.upgrades[u])
        {
            game.upgrades[u].level = new e(loadObj.upgrades[u].level);
        }
    }
}
loadGame()
setInterval(() => {
    saveGame()
}, 10000);

setInterval(() => {
    let gain = game.upgrades.mupg1.getEffect()
    game.money = game.money.add(gain.div("50"))
    if (currentTab.name == "Factory") {
        document.getElementById('moneycounter').innerHTML = "$" + (game.money.eq("0") ? "0" : game.money.toStringWithDecimalPlaces(4)) + " (" + (gain.eq(0) ? "0" : gain.toStringWithDecimalPlaces(4)) + "/ps)"
        if (game.factoryVersion[0] > 0) {
            var text = ""
            text += "<a id='mupg1' class='button' onmousedown='game.upgrades.mupg1.buy()'>Start gaining money.<br>Level "+game.upgrades.mupg1.level+"<br>Effect: +"+(game.upgrades.mupg1.getEffect().eq("0") ? "0" : game.upgrades.mupg1.getEffect().toStringWithDecimalPlaces(4))+"/ps<br>"+game.upgrades.mupg1.getCostDesc();
            document.getElementById('moneyupgrades').innerHTML = text
        }
    } if (currentTab.name == "Updater") {
        document.getElementById('factoryversionmajor').innerHTML = game.factoryVersion[0]
        document.getElementById('factoryversionminor').innerHTML = game.factoryVersion[1]
        document.getElementById('majorupdatebutton').innerHTML = "Do a Major Update.<br>$" + majorUpdateCosts[game.factoryVersion[0]].toStringWithDecimalPlaces(4) + "<br>(RESETS EVERYTHING)"
    }
}, 1000/50);