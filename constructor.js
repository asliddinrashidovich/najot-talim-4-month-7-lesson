function book(title, author, year, genre) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;
    this.getSummary = function () {
        console.log(`${this.title}, ${this.author} (${this.year})`)
    }
    this.isClassic = function () {
        return year < 2005 ? true : false;
    }
}

const book1 = new book("rich dad poor dad", "Robert Kiyosaki", 1995, 'Shaxsiy rivojlanish')
const book2 = new book("do'st ortirish sirlari", "Deyl Kornegi", 1950, 'Shaxsiy rivojlanish')
const book3 = new book("muvaffiqiyatli insolarning 7 ko'nikmasi", "Stiven Kovi", 2001, 'Shaxsiy rivojlanish')

console.log(book1.getSummary());
console.log(book1.isClassic());

console.log(book2.getSummary());
console.log(book2.isClassic());

console.log(book3.getSummary());
console.log(book3.isClassic());
// console.log(book2);
// console.log(book3);