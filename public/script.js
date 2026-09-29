const tombol = document.getElementById("cek");
const hasil = document.getElementById("hasil");

tombol.addEventListener("click", function () {
    hasil.textContent =
        "Berhasil! JavaScript berjalan di browser melalui Cloudflare Workers.";
});