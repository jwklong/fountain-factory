var currentTab = null
var tabs = []

class Tab {
    constructor(name,contains,unlocked) {
        this.name = name;
        this.contains = contains;
        this.unlocked = unlocked;
    }
    isUnlocked() {
        return this.unlocked
    }
}

function setTab(tab) {
    if (currentTab !== tab) {
        currentTab = tab
        document.getElementById("tab").innerHTML = currentTab["contains"]
    }
}