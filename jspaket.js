// Data paket wisata
const packages = [
    { 
        title: "Paket Wisata A",
        description: "Deskripsi paket wisata A.",
        price: "Rp 500.000"
    },
    {
        title: "Paket Wisata B",
        description: "Deskripsi paket wisata B.",
        price: "Rp 750.000"
    },
    {
        title: "Paket Wisata C",
        description: "Deskripsi paket wisata C.",
        price: "Rp 1.000.000"
    }
];

// Fungsi untuk membuat konten paket wisata
function createPackageElement(packageData) {
    const packageDiv = document.createElement("div");
    packageDiv.classList.add("package");

    const title = document.createElement("h2");
    title.textContent = packageData.title;

    const description = document.createElement("p");
    description.textContent = packageData.description;

    const price = document.createElement("p");
    price.textContent = "Harga: " + packageData.price;

    const button = document.createElement("a");
    button.href = "#";
    button.textContent = "Pesan Sekarang";
    button.classList.add("btn");

    packageDiv.appendChild(title);
    packageDiv.appendChild(description);
    packageDiv.appendChild(price);
    packageDiv.appendChild(button);

    return packageDiv;
}

// Menambahkan konten paket wisata ke dalam kolom
const package1 = document.getElementById("package1");
const package2 = document.getElementById("package2");
const package3 = document.getElementById("package3");

packages.forEach((packageData, index) => {
    const packageElement = createPackageElement(packageData);
    if (index === 0) {
        package1.appendChild(packageElement);
    } else if (index === 1) {
        package2.appendChild(packageElement);
    } else if (index === 2) {
        package3.appendChild(packageElement);
    }
});
