let activeTab = "1";
let tabContentCache = {};

document.getElementById("tabs").addEventListener('click', (event) => {
	if ([...Array(10).keys()].map(i => i + 29).includes(event.offsetX) && [...Array(10).keys()].map(i => i + 11).includes(event.offsetY)) closeTab(event.target);
})

const closeTab = (tab) => {
  document.getElementById("tabs").innerHTML = document.getElementById("tabs").innerHTML.replace(tab.outerHTML, "");
}

const showTab = (tab) => {
	let codebox = document.getElementById("code");
	if (!tabContentCache["tab" + activeTab]) tabContentCache["tab" + activeTab] = {code: codebox.value}
	else tabContentCache["tab" + activeTab] = {code: codebox.value}
	codebox.value = tabContentCache[tab.id].code;
	activeTab = tab.id.substring(3);
}

const newTab = () => {
  let tabs = document.getElementById("tabs");
  document.getElementById("tabs").innerHTML += "<button id=\"tab" + (tabs.childElementCount + 1) + "\" class=\"tab\" onclick=\"showTab(this)\">•\xa0\xa0\xa0untitled</button>";
  let codebox = document.getElementById("code");
  if (!tabContentCache["tab" + activeTab]) tabContentCache["tab" + activeTab] = {
	  code: codebox.value
  }
  else tabContentCache.code = codebox.value;
  console.log(tabContentCache)
  codebox.value = "";
  activeTab = tabs.childElementCount;
}

const scrollNums = (codebox) => document.getElementById("nums").scrollTop = codebox.scrollTop;

const initialise = () => {
  let nums = [...Array(9999).keys()].map(i => i + 1).join("\n");
  document.getElementById("nums").value = nums;
  let tab = document.getElementById("tab1");
  tab.textContent = "•\xa0\xa0\xa0untitled";
  tab.className += " active";
}
