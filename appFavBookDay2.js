const prompt = require("prompt-sync")();
const dayjs = require("dayjs")
const fs = require("fs");

let books = [];

const addBook = () => {
    console.clear();
    const title = prompt("Insert book title : ");
    const interest = prompt("Insert book interest : ");
    const price = prompt("Insert book price : ");
    const added = dayjs().format("HH:mm:ss | DD-MM-YYYY");

    books.push({
        title,
        interest,
        price,
        added,
    });
};

const getBooks = () => {
    const data = fs.readFileSync("favorites.json");
    const books = JSON.parse(data);

    return books;
};

const save = () => {
    fs.writeFileSync("favorites.json", JSON.stringify(books)); // Menyimpan data ke file
};

const showBook = () => {
    console.clear();

    for (const book of books){
        console.log(`${book.title} (${book.interest})`);
        console.log(`Rp${book.price}`);
        console.log(`${book.added}` + "\n");
    }

    prompt("Press enter to continue...");
};

books = getBooks();

let running = true;

while (running) {

    console.clear();
    console.log("Favorite Books Library");
    console.log("1. Show Book");
    console.log("2. Add a book");
    console.log("3. Save & Exit");

    const choice = prompt("What do you want to do? :");

    if(choice == 1){
        console.log("Tampilkan buku");
        showBook();
    } else if(choice == 2) {
        console.log("Tambahkan Buku");
        addBook();
    } else if(choice == 3){
        console.log("Keluar");
        save();
        running = false;
    } else {
        console.log("Error");
    }
}

// const book = {
//     name : "",
//     interest : "",
//     price : 0,
//     added : "",
// };

// book.name = prompt("Masukkan judul buku : ");
// book.interest = prompt("Masukkan ketertarikan : ");
// book.price = prompt("Masukkan harga buku : ");
// book.added = dayjs().format("HH:mm:ss | DD-MM-YYYY");


// Arrow function
// const print = (book) => {
//     console.log(`Nama Buku          : ${book.name}`);
//     console.log(`Ketertarikan       : ${book.interest}`);
//     console.log(`Ditambahkan pada   : ${book.name}`);
// };
// print(book);

// Ouput yang diinginkan
// console.log(`Judul : ${book.name}`);
// console.log(`Ketertarikan : ${book.interest}`);
// console.log(`Harga : ${book.price}`);
// console.log(`Tanggal ditambahkan: ${book.added}`);

// Eksekusi dd/mm/yyyy kurang efisien, sehingga menggunakan dayjs
// const year = new Date().getFullYear();
// const month = new Date().getMonth() + 1;
// const date = new Date().getDate();

