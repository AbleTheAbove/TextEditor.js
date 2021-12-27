document.getElementById("tabs").addEventListener('click', (event) => ([...Array(10).keys()].map(i => i + 29).includes(event.offsetX) && [...Array(10).keys()].map(i => i + 11).includes(event.offsetY)) ? closeTab(event.target.id) : 0);

const closeTab = (tabid) => {
  let elemlength = 55;
  let tabs = document.getElementById("tabs").innerHTML;
  let tab = document.getElementById(tabid);
  if (tab.className.indexOf("active") > -1) elemlength += 7;
  let tabstring = tabs.substring(tabs.indexOf("<button id=\"" + tabid), tabs.indexOf("<button id=\"" + tabid) + elemlength + tabid.length + tab.innerHTML.length);
  console.log(tabstring)
  document.getElementById("tabs").innerHTML = tabs.replace(tabstring, "");
  
}

const showTab = () => {
  //hide current tab, show tab that was clicked on/just created
}

const newTab = (filename) => {
  let tabs = document.getElementById("tabs");
  if (filename) {
	  //stuff
  }
  document.getElementById("tabs").innerHTML += "<button id=\"tab" + tabs.innerHTML.split("</b").length + "\" class=\"tab\" onclick=\"showTab()\">•\xa0\xa0\xa0untitled</button>";
}

const scrollNums = (codebox) => document.getElementById("nums").scrollTop = codebox.scrollTop;

const initialise = () => {
  console.log("here")
  let nums = [...Array(9999).keys()].map(i => i + 1).join("\n");
  document.getElementById("nums").value = nums;
  let tab = document.getElementById("tab1");
  tab.textContent = "•\xa0\xa0\xa0untitled";
  tab.className += " active";
}
