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
var pushSurah = document.querySelector("[data-push-surah]");
pushSurah.innerHTML = "\n<div class=\"arabic-text\">\n    <h1 class=\"title\">\u0627\u0644\u0646\u0635 \u0627\u0644\u0639\u0631\u0628\u064A</h1>\n\n    <p class=\"text-surah-skeleton\"></p>\n    <p class=\"text-surah-skeleton\"></p>\n    <p class=\"text-surah-skeleton\"></p>\n    <p class=\"text-surah-skeleton\"></p>\n    <p class=\"text-surah-skeleton\"></p>\n    <p class=\"text-surah-skeleton\"></p>\n    <p class=\"text-surah-skeleton\"></p>\n</div>\n\n<section class=\"englsch-text section\">\n    <h1 class=\"title\">\u0627\u0644\u062A\u0631\u062C\u0645\u0647</h1>\n\n    <p class=\"text-surah-skeleton\"></p>\n    <p class=\"text-surah-skeleton\"></p>\n    <p class=\"text-surah-skeleton\"></p>\n    <p class=\"text-surah-skeleton\"></p>\n    <p class=\"text-surah-skeleton\"></p>\n    <p class=\"text-surah-skeleton\"></p>\n    <p class=\"text-surah-skeleton\"></p>\n</section>\n\n<section class=\"verses section\">\n    <h1 class=\"title\">\u0627\u0644\u0622\u064A\u0627\u062A</h1>\n\n    <ul class=\"verses-list\">\n        <li class=\"card-verses\">\n            <div class=\"card-top\">\n                <div class=\"card-header\">\n                    <div class=\"surah-text-skeleton\"></div>\n                    \n                    <div class=\"id-skeleton\"></div>\n                </div>\n\n                <h3 class=\"surah-text-skeleton en-skeleton\"></h3>\n            </div>\n\n            <div class=\"card-bottom\">\n                <div class=\"icon-card-skeleton\"></div>\n                <div class=\"icon-card-skeleton\"></div>\n            </div>\n        </li>\n\n        <li class=\"card-verses\">\n            <div class=\"card-top\">\n                <div class=\"card-header\">\n                    <div class=\"surah-text-skeleton\"></div>\n                    \n                    <div class=\"id-skeleton\"></div>\n                </div>\n\n                <h3 class=\"surah-text-skeleton en-skeleton\"></h3>\n            </div>\n\n            <div class=\"card-bottom\">\n                <div class=\"icon-card-skeleton\"></div>\n                <div class=\"icon-card-skeleton\"></div>\n            </div>\n        </li>\n\n        <li class=\"card-verses\">\n            <div class=\"card-top\">\n                <div class=\"card-header\">\n                    <div class=\"surah-text-skeleton\"></div>\n                    \n                    <div class=\"id-skeleton\"></div>\n                </div>\n\n                <h3 class=\"surah-text-skeleton en-skeleton\"></h3>\n            </div>\n\n            <div class=\"card-bottom\">\n                <div class=\"icon-card-skeleton\"></div>\n                <div class=\"icon-card-skeleton\"></div>\n            </div>\n        </li>\n\n        <li class=\"card-verses\">\n            <div class=\"card-top\">\n                <div class=\"card-header\">\n                    <div class=\"surah-text-skeleton\"></div>\n                    \n                    <div class=\"id-skeleton\"></div>\n                </div>\n\n                <h3 class=\"surah-text-skeleton en-skeleton\"></h3>\n            </div>\n\n            <div class=\"card-bottom\">\n                <div class=\"icon-card-skeleton\"></div>\n                <div class=\"icon-card-skeleton\"></div>\n            </div>\n        </li>\n    </ul>\n</section>\n";
function getFetch() {
    return __awaiter(this, void 0, void 0, function () {
        var URL, response, data, urlPrams, langPrams, lang, filter, textCopies, audio, btn_check_copy, btn_copy, end_audio, start_audio, _loop_1, i, _loop_2, i;
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
                    urlPrams = new URLSearchParams(window.location.search);
                    langPrams = urlPrams.get("surah");
                    lang = langPrams ? decodeURIComponent(langPrams).toLowerCase() : "";
                    filter = data.filter(function (title) {
                        return title.name.toLowerCase().includes(lang);
                    });
                    pushSurah.innerHTML = "";
                    filter.forEach(function (ele) {
                        var cardVerses = "";
                        ele.array.forEach(function (ele) {
                            cardVerses += "\n            <li class=\"card-verses\">\n                <div class=\"card-top\">\n                    <div class=\"card-header\">\n                        <h3 class=\"surah-text\" data-text-copies>".concat(ele.ar, "</h3>\n                        \n                        <p class=\"id\">").concat(ele.id, "</p>\n                    </div>\n\n                    <h3 class=\"surah-text en\">").concat(ele.en, "</h3>\n                </div>\n\n                <div class=\"card-bottom\">\n                    <audio class=\"audio\" controls loop data-audio>\n                        <source src=\"./src/assets").concat(ele.path, "\" type=\"audio/mpeg\">\n                        Your browser does not support the audio element.\n                    </audio>\n                    \n                    <button class=\"icon-card check\" data-btn-check-copy><i class=\"fa-solid fa-check\"></i></button>\n                    <button class=\"icon-card copy\" data-btn-copy><i class=\"fa-regular fa-copy\"></i></button>\n                    <button class=\"icon-card pause\" data-end-audio><i class=\"fa-solid fa-pause\"></i></button>\n                    <button class=\"icon-card play\" data-start-audio><i class=\"fa-solid fa-play\"></i></button>\n                </div>\n            </li>\n            ");
                        });
                        pushSurah.innerHTML = "\n        <div class=\"arabic-text\">\n            <h1 class=\"title\">\u0633\u0648\u0631\u0629 ".concat(ele.name, "</h1>\n\n            <p class=\"text-surah\">").concat(ele.ar, "</p>\n        </div>\n\n        <section class=\"englsch-text section\">\n            <h1 class=\"title\">\u0627\u0644\u062A\u0631\u062C\u0645\u0647</h1>\n\n            <p class=\"text-en en\">").concat(ele.en, "</p>\n        </section>\n\n        <section class=\"verses section\">\n            <h1 class=\"title\">\u0627\u0644\u0622\u064A\u0627\u062A</h1>\n\n            <ul class=\"verses-list\">\n                ").concat(cardVerses, "\n            </ul>\n        </section>\n        ");
                    });
                    textCopies = document.querySelectorAll("[data-text-copies]");
                    audio = document.querySelectorAll("[data-audio]");
                    btn_check_copy = document.querySelectorAll("[data-btn-check-copy]");
                    btn_copy = document.querySelectorAll("[data-btn-copy]");
                    end_audio = document.querySelectorAll("[data-end-audio]");
                    start_audio = document.querySelectorAll("[data-start-audio]");
                    _loop_1 = function (i) {
                        btn_copy[i].addEventListener("click", function () {
                            btn_check_copy[i].classList.add("active");
                            btn_copy[i].classList.add("active");
                            var textToCopy = textCopies[i].textContent || '';
                            navigator.clipboard.writeText(textToCopy).then(function () {
                                console.log('Text copied to clipboard');
                            }).catch(function (err) {
                                console.error('Failed to copy text: ', err);
                            });
                        });
                    };
                    for (i = 0; i < btn_copy.length; i++) {
                        _loop_1(i);
                    }
                    ;
                    _loop_2 = function (i) {
                        start_audio[i].addEventListener("click", function () {
                            for (var i_1 = 0; i_1 < start_audio.length; i_1++) {
                                start_audio[i_1].classList.remove("active");
                                end_audio[i_1].classList.remove("active");
                                audio[i_1].pause();
                            }
                            ;
                            start_audio[i].classList.add("active");
                            end_audio[i].classList.add("active");
                            audio[i].play();
                        });
                        end_audio[i].addEventListener("click", function () {
                            start_audio[i].classList.remove("active");
                            end_audio[i].classList.remove("active");
                            audio[i].pause();
                        });
                    };
                    for (i = 0; i < start_audio.length; i++) {
                        _loop_2(i);
                    }
                    ;
                    return [2 /*return*/];
            }
        });
    });
}
;
getFetch();
