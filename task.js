let naviconEle = document.getElementById("navicon");
let canceliconEle = document.getElementById("cancelicon");
let navitemEl = document.getElementById("list");

naviconEle.addEventListener("click", function() {
    naviconEle.classList.toggle("icon2");
    canceliconEle.classList.toggle("cancel")
    navitemEl.classList.toggle("lists")
})

canceliconEle.addEventListener("click", function() {
    naviconEle.classList.toggle("icon2");
    canceliconEle.classList.toggle("cancel")
    navitemEl.classList.toggle("lists")
})