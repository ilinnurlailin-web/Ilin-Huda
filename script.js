// ==============================
// NAMA TAMU
// ==============================

const params = new URLSearchParams(window.location.search);

const guest = params.get("to");

if (guest) {
    document.getElementById("guest").textContent =
        decodeURIComponent(guest);
}

// ==============================
// OPEN INVITATION
// ==============================

function openInvitation() {

    // Hilangkan cover
    document.getElementById("cover").style.display = "none";

    // Tampilkan isi undangan
    document.getElementById("content").style.display = "block";

    // Putar musik
    const music = document.getElementById("music");

    if (music) {

        music.volume = 0.6;

        music.play().catch(function (err) {
            console.log(err);
        });

    }

    // Scroll ke halaman pertama
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

// ==============================
// COPY REKENING
// ==============================

function copyRekening(id) {

    const nomor = document.getElementById(id).innerText;

    navigator.clipboard.writeText(nomor);

    alert("Nomor rekening berhasil disalin.");

}

// ==============================
// ANIMASI SCROLL
// ==============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("#content section").forEach((el) => {

    observer.observe(el);

});