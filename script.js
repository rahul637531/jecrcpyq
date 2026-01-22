function openPDF() {
  window.open("PASTE_FIREBASE_PDF_LINK_HERE", "_blank");
}

/* SEARCH FUNCTION */
function searchPYQ() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let items = document.getElementsByClassName("pyq-item");

  for (let i = 0; i < items.length; i++) {
    let text = items[i].innerText.toLowerCase();
    items[i].style.display = text.includes(input) ? "block" : "none";
  }
}

/* DARK MODE */
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

