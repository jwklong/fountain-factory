var currentTab = null
var tabs = []

class Tab {
    constructor(name,contains,unlocked) {
        this.name = name;
        this.contains = contains;
        this.unlocked = unlocked;
    }
}

function setTab(tab) {
    if (currentTab !== tab && tab.unlocked === true) {
        currentTab = tab
        document.getElementById("tab").innerHTML = currentTab["contains"]
    }
}