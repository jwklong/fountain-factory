var game = {
    factoryVersion: [0,0],
    money: new e("10")
}

setInterval(() => {
    if (currentTab.name == "Factory") {
        document.getElementById('moneycounter').innerHTML = "$" + game.money.toStringWithDecimalPlaces(4)
    } if (currentTab.name == "Updater") {
        document.getElementById('factoryversionmajor').innerHTML = game.factoryVersion[0]
        document.getElementById('factoryversionminor').innerHTML = game.factoryVersion[1]
    }
}, 1000/60);