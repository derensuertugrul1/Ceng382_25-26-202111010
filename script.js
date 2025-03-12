let userCredentials = [];

function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('clock').textContent = hours + ":" + minutes + ":" + seconds;
}

setInterval(updateClock, 1000);
updateClock();

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        userCredentials.push({ username, password });
        console.log(userCredentials);
        alert("Login successful! (Check console for stored data)");
    } else {
        alert("Lütfen kullanıcı adı ve şifreyi girin.");
    }
}

let formsVisible = true;
document.addEventListener('keydown', function(event) {
    if (event.key.toLowerCase() === 'h') {
        const forms = document.querySelectorAll('.container, .circle');
        formsVisible = !formsVisible;
        forms.forEach(form => {
            form.style.display = formsVisible ? 'block' : 'none';
        });
    }
});
