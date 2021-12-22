var something = ""
for (v in tabs) {
    something += "<h5 class='tabbutton' onclick='setTab(tabs[\"" + v + "\"])'>" + v + "</h5>"
}
document.getElementById("tabs").innerHTML = something

setTab(tabs["Factory"])