function addBook() {
    const title = document.getElementById("title").value.trim();
    const year = document.getElementById("year").value.trim();
    const currentYear = new Date().getFullYear();

    const titlePattern = /^[A-Za-z]+$/;

    if (!titlePattern.test(title)) {
        alert("Title must contain only letters (no spaces).");
        return;
    }

    
    if (!/^\d{4}$/.test(year) || year < 1900 || year > currentYear) {
        alert("Year must be a valid number between 1900 and " + currentYear);
        return;
    }


    const tbody = document.getElementById("bookTable").querySelector("tbody");
    const row = tbody.insertRow();

   
    row.style.backgroundColor = year < 2000 ? "lightgray" : "lightgreen";

    row.insertCell(0).innerText = title;
    row.insertCell(1).innerText = year;

    document.getElementById("title").value = "";
    document.getElementById("year").value = "";
}
