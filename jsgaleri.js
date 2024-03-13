// Fungsi untuk menambahkan gambar-gambar dari folder srcgaleri ke dalam grid
function addImagesToGrid() {
    const container = document.getElementById('grid-container');

    // Ganti dengan path yang sesuai dengan struktur folder Anda
    const imageFolderPath = 'srcgaleri/';

    // Mengambil semua gambar dari folder srcgaleri
    const imageFiles = [
        '1.jpg',
        '2.jpg',
        '3.jpg',
        '4.jpg',
        '5.jpg',
        '6.jpg',
        '7.jpg',
        '8.png'
    ];

    // Menambahkan setiap gambar ke dalam grid
    imageFiles.forEach((fileName) => {
        const item = document.createElement('div');
        item.classList.add('grid-item');
        const img = document.createElement('img');
        img.src = imageFolderPath + fileName;
        item.appendChild(img);
        container.appendChild(item);
    });
}

// Panggil fungsi untuk menambahkan gambar ke dalam grid saat halaman dimuat
window.onload = function () {
    addImagesToGrid();
};
