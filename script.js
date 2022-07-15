function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    // this.read = read;
    // this.info = function () {
    //      return 'The book title: ' + title + ' by ' + author + '. The book is ' + pages +' pages long. book completed: ' + read ;
    // }
}

Book.prototype.sayTitle = function () {
    console.log(this.title)
}

const book = {
    read : false,
    info :function () {
        return 'The book title: ' + title + ' by ' + author + '. The book is ' + pages +' pages long. book completed: ' + read ;
   }
}


const book1 = new Book('IT', 'Steven King', '978', 'no');
const book2 = new Book('Nice Guy', 'Dean Koontz', '648', 'yes')
const book3 = new Book('Danger Zone', 'Aiden Finnigan', '540', 'no')
const mybook = Object.create(book);
// const person = {
//     isHuman: false,
//     printIntroduction: function() {
//       console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//     }
//   };



//   const Ace = Object.create(person);

// Ace.name = 'Aaron';
// Ace.isHuman = true;

// Ace.printIntroduction();

mybook.title = 'Ace Stories';
mybook.author = 'Aaron Griffin';
mybook.pages = '300';
mybook.read = 'yes';

console.log(mybook)