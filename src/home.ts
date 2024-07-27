const surah_list: any = document.querySelector("[data-surah-list]");

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

async function getData() {
    let URL: string = "./Quran.json";
    let response: Response = await fetch(URL);
    let data: any = await response.json();

    surah_list.innerHTML = "";

    data.forEach((ele: any) => {
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
};
getData();