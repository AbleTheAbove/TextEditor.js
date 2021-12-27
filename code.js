document.getElementById("tabs").addEventListener('click', (event) => {
	//console.log(event.target.outerHTML)
	if ([...Array(10).keys()].map(i => i + 29).includes(event.offsetX) && [...Array(10).keys()].map(i => i + 11).includes(event.offsetY)) closeTab(event.target);
})

const closeTab = (tab) => {
  console.log(tab.id)
  document.getElementById("tabs").innerHTML = document.getElementById("tabs").innerHTML.replace(tab.outerHTML, "");
  document.getElementById("textareas").innerHTML = document.getElementById("textareas").innerHTML.replace("<textarea id=\""+ tab.id + "code\" class=\"code\" rows=\"60\" cols=\"201\" nowrap=\"nowrap\" wrap=\"off\" spellcheck=\"false\" onscroll=\"scrollNums(this)\"></textarea>", "")
}

const showTab = () => {
  //hide current tab, show tab that was clicked on/just created
}

const newTab = (filename) => {
  let tabs = document.getElementById("tabs");
  if (filename) {
	  //stuff
  }
  document.getElementById("tabs").innerHTML += "<button id=\"tab" + (tabs.childElementCount + 1) + "\" class=\"tab\" onclick=\"showTab()\">•\xa0\xa0\xa0untitled</button>";
  document.getElementById("textareas").innerHTML += "<textarea id=\"" + (tabs.childElementCount + 1) + "code\" class=\"code\" rows=\"60\" cols=\"201\" nowrap=\"nowrap\" wrap=\"off\" spellcheck=\"false\" onscroll=\"scrollNums(this)\"></textarea>";
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
