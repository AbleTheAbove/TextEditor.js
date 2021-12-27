document.getElementById("tabs").addEventListener('click', (event) => {
  if ([...Array(10).keys()].map(i => i + 29).includes(event.offsetX) && [...Array(10).keys()].map(i => i + 11).includes(event.offsetY)) return closeTab(event.target.id);
})

document.getElementById("code").addEventListener('click', (event) => {
  let element = document.getElementById("code");
  if (element.value === "Start coding...") element.value = "";
})

document.getElementById("code").addEventListener('keydown', (event) => {
  let element = document.getElementById("code");
  if (element.value === "Start coding...") element.value = "";
})

const closeTab = (tabid) => {
  let elemlength = 60;
  let tabs = document.getElementById("tabs").innerHTML;
  let tab = document.getElementById(tabid);
  if (tab.className.indexOf("active") > -1) elemlength += 7;
  let tabstring = tabs.substring(tabs.indexOf("<button id=\"" + tabid), tabs.indexOf("<button id=\"" + tabid) + elemlength + tabid.length + tab.innerHTML.length);
  document.getElementById("tabs").innerHTML = tabs.replace(tabstring, "");
}

const showTab = () => {
  //hide current tab, show tab that was clicked on/just created
}

const newTab = (filename) => {
  if (filename) {
    document.getElementById("tabs").innerHTML += " <button id = \"tab2\" class=\"tab\" onclick=\"showTab()\">•\xa0\xa0\xa0" + filename + "</button>";
	showTab();
    return;
  }
  document.getElementById("tabs").innerHTML += " <button id=\"tab2\" class=\"tab\" onclick=\"showTab()\">•\xa0\xa0\xa0untitled</button>";
}

const scrollNums = (codebox) => document.getElementById("nums").scrollTop = codebox.scrollTop;

const initialise = () => {
  document.getElementById("nums").value = [...Array(9999).keys()].map(i => i + 1).join("\n");
  let tab = document.getElementById("tab1");
  tab.textContent = "•\xa0\xa0\xa0untitled";
  tab.className += " active";
}
