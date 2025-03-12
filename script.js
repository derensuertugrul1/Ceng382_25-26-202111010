// Giriş işlemi
document.getElementById("loginButton").addEventListener("click", function () {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username === "admin" && password === "admin") {
        window.location.href = "table.html";
    } else {
        alert("Invalid credentials");
    }
});

// Formdan veri alıp tabloya ekleme
document.getElementById("classForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
    let table = document.getElementById("classTable").getElementsByTagName('tbody')[0];
    let row = table.insertRow();
    row.insertCell(0).textContent = document.getElementById("className").value;
    row.insertCell(1).textContent = document.getElementById("numPeople").value;
    row.insertCell(2).textContent = document.getElementById("description").value;
    document.getElementById("classForm").reset();
});

// Canlı saat fonksiyonu
function updateClock() {
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);
updateClock();

// Butona Animasyon Eklemek
const loginBtn = document.getElementById("loginButtonAnim");
loginBtn.addEventListener("mouseover", () => {
    loginBtn.style.transform = "scale(1.2)";
});
loginBtn.addEventListener("mouseout", () => {
    loginBtn.style.transform = "scale(1)";
});
