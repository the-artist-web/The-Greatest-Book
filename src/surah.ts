const pushSurah: any = document.querySelector("[data-push-surah]");

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

async function getFetch() {
    let URL: string = "./Quran.json";
    let response: Response = await fetch(URL);
    let data: any = await response.json();

    const urlPrams: URLSearchParams = new URLSearchParams(window.location.search);
    const langPrams: string | null = urlPrams.get("surah");
    const lang: string = langPrams ? decodeURIComponent(langPrams).toLowerCase() : "";
    const filter: any = data.filter((title: any) => {
        return title.name.toLowerCase().includes(lang);
    });

    pushSurah.innerHTML = "";

    filter.forEach((ele: any) => {
        let cardVerses: any = "";
        ele.array.forEach((ele: any) => {
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

    const textCopies: any = document.querySelectorAll("[data-text-copies]");
    const audio: any = document.querySelectorAll("[data-audio]");
    const btn_check_copy: any = document.querySelectorAll("[data-btn-check-copy]");
    const btn_copy: any = document.querySelectorAll("[data-btn-copy]");
    const end_audio: any = document.querySelectorAll("[data-end-audio]");
    const start_audio: any = document.querySelectorAll("[data-start-audio]");

    for (let i: number = 0; i < btn_copy.length; i++) {
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
    };

    for (let i: number = 0; i < start_audio.length; i++) {
        start_audio[i].addEventListener("click", () => {
            for (let i: number = 0; i < start_audio.length; i++) {
                start_audio[i].classList.remove("active");
                end_audio[i].classList.remove("active");
                audio[i].pause();
            };

            start_audio[i].classList.add("active");
            end_audio[i].classList.add("active");
            audio[i].play();
        });

        end_audio[i].addEventListener("click", () => {
            start_audio[i].classList.remove("active");
            end_audio[i].classList.remove("active");
            audio[i].pause();
        });
    };
};
getFetch();