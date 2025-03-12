// Form verilerini alıp tabloyu güncelleme GPT yardımı
document.getElementById("submitClass").addEventListener("click", function () {
    let className = document.getElementById("className").value.trim();
    let numberOfPeople = document.getElementById("numberOfPeople").value.trim();
    let description = document.getElementById("description").value.trim();

    if (className && numberOfPeople && description) {
        let tableBody = document.getElementById("classTable").getElementsByTagName("tbody")[0];
        let newRow = tableBody.insertRow(tableBody.rows.length);
        
        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);
        let cell3 = newRow.insertCell(2);

        cell1.textContent = className;
        cell2.textContent = numberOfPeople;
        cell3.textContent = description;

        // Input alanlarını temizle GPT yardımı
        document.getElementById("className").value = "";
        document.getElementById("numberOfPeople").value = "";
        document.getElementById("description").value = "";
    } else {
        alert("Lütfen tüm alanları doldurun!");
    }
});

// Tablo üzerinde etkileşim (row click, table click, input focus) GPT YARDIMI 
document.querySelector("table").addEventListener("click", function (event) {
    if (event.target.tagName === "TD") {
        console.log("Row Clicked:", event.target.parentElement);
        // Satırın arka plan rengini değiştirme
        event.target.parentElement.style.backgroundColor = "#f0f0f0"; // Arka plan rengini değiştirme

        // Tıklanan satırın bilgilerini konsola yazdırma
        let row = event.target.parentElement;
        console.log("Class Name:", row.cells[0].textContent);
        console.log("Number of People:", row.cells[1].textContent);
        console.log("Description:", row.cells[2].textContent);
    }
});
