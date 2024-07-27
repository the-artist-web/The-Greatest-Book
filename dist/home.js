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
const surah_list = document.querySelector("[data-surah-list]");
surah_list.innerHTML = `
<div class="card-surah">
    <span class="id-skeleton"></span>

    <div class="card-body">
        <div class="card-title">
            <h3 class="title-content-skeleton"></h3>
            <h3 class="title-content-skeleton"></h3>
        </div>
        <p class="words-skeleton"></p>
    </div>
</div>
`.repeat(30);
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        let URL = "./Quran.json";
        let response = yield fetch(URL);
        let data = yield response.json();
        surah_list.innerHTML = "";
        data.forEach((ele) => {
            surah_list.innerHTML += `
        <a href="surah.html?surah=${ele.name}" class="card-surah">
            <span class="id">${ele.id}</span>

            <div class="card-body">
                <div class="card-title">
                    <h3 class="title-content">${ele.name}</h3>
                    <h3 class="title-content en">${ele.name_translation}</h3>
                </div>
                <p class="words">${ele.words} كلمة</p>
            </div>
        </a>
        `;
        });
    });
}
;
getData();
//# sourceMappingURL=home.js.map