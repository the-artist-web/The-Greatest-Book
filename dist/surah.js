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
const pushSurah = document.querySelector("[data-push-surah]");
pushSurah.innerHTML = `
<div class="arabic-text">
    <h1 class="title">النص العربي</h1>

    <p class="text-surah-skeleton"></p>
    <p class="text-surah-skeleton"></p>
    <p class="text-surah-skeleton"></p>
    <p class="text-surah-skeleton"></p>
    <p class="text-surah-skeleton"></p>
    <p class="text-surah-skeleton"></p>
    <p class="text-surah-skeleton"></p>
</div>

<section class="englsch-text section">
    <h1 class="title">الترجمه</h1>

    <p class="text-surah-skeleton"></p>
    <p class="text-surah-skeleton"></p>
    <p class="text-surah-skeleton"></p>
    <p class="text-surah-skeleton"></p>
    <p class="text-surah-skeleton"></p>
    <p class="text-surah-skeleton"></p>
    <p class="text-surah-skeleton"></p>
</section>

<section class="verses section">
    <h1 class="title">الآيات</h1>

    <ul class="verses-list">
        <li class="card-verses">
            <div class="card-top">
                <div class="card-header">
                    <div class="surah-text-skeleton"></div>
                    
                    <div class="id-skeleton"></div>
                </div>

                <h3 class="surah-text-skeleton en-skeleton"></h3>
            </div>

            <div class="card-bottom">
                <div class="icon-card-skeleton"></div>
                <div class="icon-card-skeleton"></div>
            </div>
        </li>

        <li class="card-verses">
            <div class="card-top">
                <div class="card-header">
                    <div class="surah-text-skeleton"></div>
                    
                    <div class="id-skeleton"></div>
                </div>

                <h3 class="surah-text-skeleton en-skeleton"></h3>
            </div>

            <div class="card-bottom">
                <div class="icon-card-skeleton"></div>
                <div class="icon-card-skeleton"></div>
            </div>
        </li>

        <li class="card-verses">
            <div class="card-top">
                <div class="card-header">
                    <div class="surah-text-skeleton"></div>
                    
                    <div class="id-skeleton"></div>
                </div>

                <h3 class="surah-text-skeleton en-skeleton"></h3>
            </div>

            <div class="card-bottom">
                <div class="icon-card-skeleton"></div>
                <div class="icon-card-skeleton"></div>
            </div>
        </li>

        <li class="card-verses">
            <div class="card-top">
                <div class="card-header">
                    <div class="surah-text-skeleton"></div>
                    
                    <div class="id-skeleton"></div>
                </div>

                <h3 class="surah-text-skeleton en-skeleton"></h3>
            </div>

            <div class="card-bottom">
                <div class="icon-card-skeleton"></div>
                <div class="icon-card-skeleton"></div>
            </div>
        </li>
    </ul>
</section>
`;
function getFetch() {
    return __awaiter(this, void 0, void 0, function* () {
        let URL = "./Quran.json";
        let response = yield fetch(URL);
        let data = yield response.json();
        const urlPrams = new URLSearchParams(window.location.search);
        const langPrams = urlPrams.get("surah");
        const lang = langPrams ? decodeURIComponent(langPrams).toLowerCase() : "";
        const filter = data.filter((title) => {
            return title.name.toLowerCase().includes(lang);
        });
        pushSurah.innerHTML = "";
        filter.forEach((ele) => {
            let cardVerses = "";
            ele.array.forEach((ele) => {
                cardVerses += `
            <li class="card-verses">
                <div class="card-top">
                    <div class="card-header">
                        <h3 class="surah-text" data-text-copies>${ele.ar}</h3>
                        
                        <p class="id">${ele.id}</p>
                    </div>

                    <h3 class="surah-text en">${ele.en}</h3>
                </div>

                <div class="card-bottom">
                    <audio class="audio" controls loop data-audio>
                        <source src="./src/assets${ele.path}" type="audio/mpeg">
                        Your browser does not support the audio element.
                    </audio>
                    
                    <button class="icon-card check" data-btn-check-copy><i class="fa-solid fa-check"></i></button>
                    <button class="icon-card copy" data-btn-copy><i class="fa-regular fa-copy"></i></button>
                    <button class="icon-card pause" data-end-audio><i class="fa-solid fa-pause"></i></button>
                    <button class="icon-card play" data-start-audio><i class="fa-solid fa-play"></i></button>
                </div>
            </li>
            `;
            });
            pushSurah.innerHTML = `
        <div class="arabic-text">
            <h1 class="title">سورة ${ele.name}</h1>

            <p class="text-surah">${ele.ar}</p>
        </div>

        <section class="englsch-text section">
            <h1 class="title">الترجمه</h1>

            <p class="text-en en">${ele.en}</p>
        </section>

        <section class="verses section">
            <h1 class="title">الآيات</h1>

            <ul class="verses-list">
                ${cardVerses}
            </ul>
        </section>
        `;
        });
        const textCopies = document.querySelectorAll("[data-text-copies]");
        const audio = document.querySelectorAll("[data-audio]");
        const btn_check_copy = document.querySelectorAll("[data-btn-check-copy]");
        const btn_copy = document.querySelectorAll("[data-btn-copy]");
        const end_audio = document.querySelectorAll("[data-end-audio]");
        const start_audio = document.querySelectorAll("[data-start-audio]");
        for (let i = 0; i < btn_copy.length; i++) {
            btn_copy[i].addEventListener("click", () => {
                btn_check_copy[i].classList.add("active");
                btn_copy[i].classList.add("active");
                const textToCopy = textCopies[i].textContent || '';
                navigator.clipboard.writeText(textToCopy).then(() => {
                    console.log('Text copied to clipboard');
                }).catch(err => {
                    console.error('Failed to copy text: ', err);
                });
            });
        }
        ;
        for (let i = 0; i < start_audio.length; i++) {
            start_audio[i].addEventListener("click", () => {
                for (let i = 0; i < start_audio.length; i++) {
                    start_audio[i].classList.remove("active");
                    end_audio[i].classList.remove("active");
                    audio[i].pause();
                }
                ;
                start_audio[i].classList.add("active");
                end_audio[i].classList.add("active");
                audio[i].play();
            });
            end_audio[i].addEventListener("click", () => {
                start_audio[i].classList.remove("active");
                end_audio[i].classList.remove("active");
                audio[i].pause();
            });
        }
        ;
    });
}
;
getFetch();
//# sourceMappingURL=surah.js.map