"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * scroll header
 */
const header = document.querySelector("[data-header]");
function scrollHeader() {
    if (scrollY >= 100) {
        header.classList.add("active");
    }
    else {
        header.classList.remove("active");
    }
    ;
}
;
window.addEventListener("scroll", scrollHeader);
/**
 * theme
 */
const dark_mood = document.querySelector("[data-dark-mood]");
const light_mood = document.querySelector("[data-light-mood]");
const HTML = document.documentElement;
// localStorage
if (localStorage.length >= 0) {
    if (localStorage.getItem("mood")) {
        HTML.dataset.theme = localStorage.mood;
    }
    ;
    if (localStorage.getItem("dark")) {
        dark_mood.classList.add(localStorage.dark);
    }
    ;
    if (localStorage.getItem("light")) {
        light_mood.classList.add(localStorage.light);
    }
    ;
}
;
// code theme
function darkMood() {
    HTML.dataset.theme = "dark";
    dark_mood.classList.add("active");
    light_mood.classList.add("active");
    localStorage.setItem("mood", "dark");
    localStorage.setItem("dark", "active");
    localStorage.setItem("light", "active");
}
;
dark_mood.addEventListener("click", darkMood);
function lightMood() {
    HTML.dataset.theme = "light";
    dark_mood.classList.remove("active");
    light_mood.classList.remove("active");
    localStorage.setItem("mood", "light");
    localStorage.setItem("dark", "");
    localStorage.setItem("light", "");
}
;
light_mood.addEventListener("click", lightMood);
/**
 * search
 */
const logo = document.querySelector("[data-logo]");
const form = document.querySelector("[data-form]");
const btnSearch = document.querySelector("[data-btn-search]");
const searchValue = document.querySelector("[data-search-value]");
const search_bar = document.querySelector("[data-search-bar]");
const icons = document.querySelector("[data-icons]");
const showSearchMobile = document.querySelector("[data-show-search-mobile]");
const hiddenSearchMobile = document.querySelector("[data-hidden-search-mobile]");
// search mobile
function showForm() {
    form.classList.add("active");
    logo.style.display = "none";
    icons.style.display = "none";
    searchValue.focus();
}
;
showSearchMobile.addEventListener("click", showForm);
function hiddenForm() {
    form.classList.remove("active");
    logo.style.display = "flex";
    icons.style.display = "flex";
    searchValue.value = "";
    searchBar();
}
;
hiddenSearchMobile.addEventListener("click", hiddenForm);
// search pages
btnSearch.addEventListener("click", () => { if (searchValue.value)
    window.location.href = `surah.html?surah=${searchValue.value.toLowerCase()}`; });
searchValue.addEventListener("keydown", (e) => { if (e.key === "Enter")
    btnSearch.click(); });
// search bar
search_bar.innerHTML = `
<div class="search-bar-item">
    <div class="search-bar-link-skeleton"></div> 
</div>
`.repeat(8);
function searchBar() {
    return __awaiter(this, void 0, void 0, function* () {
        let URL = "./Quran.json";
        let response = yield fetch(URL);
        let data = yield response.json();
        search_bar.innerHTML = "";
        if (searchValue.value !== "") {
            search_bar.classList.add("active");
        }
        else {
            search_bar.classList.remove("active");
        }
        ;
        data.forEach((ele) => {
            search_bar.innerHTML += `
        <a href="surah.html?surah=${ele.name}" class="search-bar-item" data-search-bar-item>
            <p class="search-bar-link" data-text-search-bar>${ele.name}</p> 
            <p class="search-bar-link en">${ele.name_translation}</p> 
        </a>
        `;
        });
        const textSearchBar = document.querySelectorAll("[data-text-search-bar]");
        const searchBarItem = document.querySelectorAll("[data-search-bar-item]");
        for (let i = 0; i < textSearchBar.length; i++) {
            if (textSearchBar[i].innerHTML.toLowerCase().indexOf(searchValue.value.toLowerCase()) >= 0) {
                searchBarItem[i].style.display = "";
            }
            else {
                searchBarItem[i].style.display = "none";
            }
            ;
        }
        ;
    });
}
;
searchValue.addEventListener("keyup", searchBar);
//# sourceMappingURL=component.js.map