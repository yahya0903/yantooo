const heartButton = document.getElementById("heartButton");

const loveProgress = document.getElementById("loveProgress");

const percentage = document.getElementById("percentage");

const loveText = document.getElementById("loveText");

const openButton = document.getElementById("openButton");

const loadingScreen = document.getElementById("loadingScreen");

const messageScreen = document.getElementById("messageScreen");

const finalScreen = document.getElementById("finalScreen");

const nextButton = document.getElementById("nextButton");

const restartButton = document.getElementById("restartButton");

const messageTitle = document.getElementById("messageTitle");

const messageText = document.getElementById("messageText");


let love = 0;

let messageIndex = 0;


const loveTexts = [
    "Lohhh Disuruh Pelan pelan kokk...",
    "Masihh kurangg sedikit lagii 💛",
    "Kerasaa ini sudahhh...",
    "Asekk, sudah agak banyak cintanya hehehe",
    "Dikitt lagiii...",
    "Hampirr penuhh ✨",
    "Sebentar lagiii...",
    "Cintanyaaa hampirr penuhh 💛"
];


const messages = [

    {
        title: "Untukk mimikuuu 💛",

        text:
        "Cwomu tauu mungkinn akhir akhir iniii ndaaa semuanya berjalan sesuai yang kitaa pengeninn..."
    },

    {
        title: "Cwomu cuman mau bilang",

        text:
        "Kitaaa sudahh berusahaa sejauhh inii + itu bukan sesuatu yang kecil, yaa meskipun cwomu ndaa full sihh ngesaksiin kitaa berusaha, apa yang dulu dulu cwomu belum adaa, tapi yang dimasa ini sama depan cwomu pengen saksiinnn"
    },

    {
        title: "Kaloo kitaa capeee...",

        text:
        "Kitaa bolehh kokk istirahat. Kitaa ndaa haruss selalu terlihat kuat setiap waktu. disini kata istirahat maksudnya isi tenagaa, memulihkan energi, menenangkan pikirann + cwomu ready"
    },

    {
        title: "Kaloo Kitaa kek ragu atau bimbang begituuu...",

        text:
        "Ingettt kaloo satuu kegagalann ato satuu harii yang buruk tuu ndaa menentukann seluruhh perjalanannnyaa kitaaa"
    },

    {
        title: "Satuu hall terakhiiir...",

        text:
        "cwomuu percayaa kitaaa. Jadiii jalann teruss pelan-pelan, Hariii baikk masihh mo datangg"
    }

];



/* =========================
   LOVE METER
========================= */

heartButton.addEventListener("click", function () {

    if (love >= 100) {
        return;
    }

    love += 10;

    loveProgress.style.width = love + "%";

    percentage.textContent = love + "%";


    if (love < 100) {

        let index = Math.floor(love / 15);

        if (index >= loveTexts.length) {
            index = loveTexts.length - 1;
        }

        loveText.textContent = loveTexts[index];

    }


    createFloatingHeart();


    if (love >= 100) {

        love = 100;

        percentage.textContent = "100%";

        loveProgress.style.width = "100%";

        loveText.textContent =
            "✨ CINTAA NYAA PENUH ✨";

        heartButton.innerHTML = "☀️";

        heartButton.style.transform = "scale(1.12)";

        setTimeout(() => {

            openButton.classList.remove("hidden");

        }, 500);

    }

});



/* =========================
   BUKA PESAN
========================= */

openButton.addEventListener("click", function () {

    loadingScreen.classList.remove("active");

    messageScreen.classList.add("active");

    messageIndex = 0;

    showMessage();

});



/* =========================
   PESAN BERIKUTNYA
========================= */

nextButton.addEventListener("click", function () {

    messageIndex++;

    if (messageIndex < messages.length) {

        showMessage();

    } else {

        messageScreen.classList.remove("active");

        finalScreen.classList.add("active");

    }

});



function showMessage() {

    const message = messages[messageIndex];


    messageTitle.style.opacity = "0";

    messageText.style.opacity = "0";


    setTimeout(() => {

        messageTitle.textContent = message.title;

        messageText.textContent = message.text;


        messageTitle.style.opacity = "1";

        messageText.style.opacity = "1";


        messageTitle.style.transition =
            "opacity 0.5s ease";

        messageText.style.transition =
            "opacity 0.7s ease";


    }, 250);


    if (messageIndex === messages.length - 1) {

        nextButton.textContent =
            "Pesan Terakhir →";

    }

}



/* =========================
   RESTART
========================= */

restartButton.addEventListener("click", function () {

    love = 0;

    messageIndex = 0;


    loveProgress.style.width = "0%";

    percentage.textContent = "0%";

    loveText.textContent =
        "Klik hatinya pelan-pelan...";


    heartButton.innerHTML = "❤️";

    heartButton.style.transform =
        "scale(1)";


    openButton.classList.add("hidden");


    finalScreen.classList.remove("active");

    messageScreen.classList.remove("active");

    loadingScreen.classList.add("active");

});



/* =========================
   FLOATING HEART
========================= */

function createFloatingHeart() {

    const heart = document.createElement("div");

    heart.className = "floating-heart";

    heart.innerHTML =
        Math.random() > 0.5 ? "💛" : "✨";


    heart.style.left =
        (window.innerWidth / 2 +
        (Math.random() * 120 - 60)) + "px";


    heart.style.top =
        (window.innerHeight / 2 + 40) + "px";


    heart.style.setProperty(
        "--move",
        (Math.random() * 100 - 50) + "px"
    );


    document.body.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 1000);

}