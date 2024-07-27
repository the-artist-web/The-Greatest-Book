var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
 * scroll header
 */
var header = document.querySelector("[data-header]");
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
var dark_mood = document.querySelector("[data-dark-mood]");
var light_mood = document.querySelector("[data-light-mood]");
var HTML = document.documentElement;
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
var logo = document.querySelector("[data-logo]");
var form = document.querySelector("[data-form]");
var btnSearch = document.querySelector("[data-btn-search]");
var searchValue = document.querySelector("[data-search-value]");
var search_bar = document.querySelector("[data-search-bar]");
var icons = document.querySelector("[data-icons]");
var showSearchMobile = document.querySelector("[data-show-search-mobile]");
var hiddenSearchMobile = document.querySelector("[data-hidden-search-mobile]");
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
btnSearch.addEventListener("click", function () { if (searchValue.value)
    window.location.href = "surah.html?surah=".concat(searchValue.value.toLowerCase()); });
searchValue.addEventListener("keydown", function (e) { if (e.key === "Enter")
    btnSearch.click(); });
// search bar
search_bar.innerHTML = "\n<div class=\"search-bar-item\">\n    <div class=\"search-bar-link-skeleton\"></div> \n</div>\n".repeat(8);
function searchBar() {
    return __awaiter(this, void 0, void 0, function () {
        var URL, response, data, textSearchBar, searchBarItem, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    URL = "./Quran.json";
                    return [4 /*yield*/, fetch(URL)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    search_bar.innerHTML = "";
                    if (searchValue.value !== "") {
                        search_bar.classList.add("active");
                    }
                    else {
                        search_bar.classList.remove("active");
                    }
                    ;
                    data.forEach(function (ele) {
                        search_bar.innerHTML += "\n        <a href=\"surah.html?surah=".concat(ele.name, "\" class=\"search-bar-item\" data-search-bar-item>\n            <p class=\"search-bar-link\" data-text-search-bar>").concat(ele.name, "</p> \n            <p class=\"search-bar-link en\">").concat(ele.name_translation, "</p> \n        </a>\n        ");
                    });
                    textSearchBar = document.querySelectorAll("[data-text-search-bar]");
                    searchBarItem = document.querySelectorAll("[data-search-bar-item]");
                    for (i = 0; i < textSearchBar.length; i++) {
                        if (textSearchBar[i].innerHTML.toLowerCase().indexOf(searchValue.value.toLowerCase()) >= 0) {
                            searchBarItem[i].style.display = "";
                        }
                        else {
                            searchBarItem[i].style.display = "none";
                        }
                        ;
                    }
                    ;
                    return [2 /*return*/];
            }
        });
    });
}
;
searchValue.addEventListener("keyup", searchBar);
