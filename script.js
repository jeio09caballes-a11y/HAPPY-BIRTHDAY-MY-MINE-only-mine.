const startBtn = document.getElementById("startBtn");
const openBook = document.getElementById("openBook");

const loading = document.getElementById("loading");
const scrapbook = document.getElementById("scrapbook");

startBtn.onclick = () => {
    loading.style.display = "none";
    scrapbook.classList.remove("hidden");
};

openBook.onclick = () => {
    alert("window.location.href = "loveletter.html";");
};
