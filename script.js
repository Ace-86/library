


// -----array----
 let library = [
    {
        title: "IT",
        author: "Stephen King",
        pages: 604,
        complete: true
    }
 ];
 // ----dom elements----
 
 // let btn = document.getElementById("addBtn");
$modalForm = document.getElementById('modalForm');
// $form = document.querySelector('#contact-form');?
$newBookBtn = document.querySelector('#addBtn');
$submit = document.querySelector('#submit')
$clearBtn = document.querySelector('#clearBtn');
$exitModal = document.getElementsByClassName('exit')[0];
$title = document.querySelector('#title');
$author = document.querySelector('#author');
$page = document.querySelector('#page');
$complete = document.querySelector('#complete');

 // -----object----
 function Book(title, author, page, complete) {
     this.title = title;
     this.author = author;
     this.page = page;
     this.complete = complete;
    };
    

    
 
    
    // ------modal------
    
    $newBookBtn.onclick = function() {
        $modalForm.style.display = "block";
    }
    
    $exitModal.onclick = function () {
        $modalForm.style.display = "none";
    }

    $submit.onclick = function(e) {
        // e.preventDefault(); 
        getUserInput();

    };
// window.onclick = function(event) {
//     if (event.target == $modalForm) {
//         $modalForm.style.display = "none";
//     }
// }
// ------modal----


   const getUserInput = () => {
        let title = $title.value;
        let author = $author.value;
        let page = $page.value;
        let complete = $complete.value;
        newBook = new Book(title, author, page, complete);
        console.log(newBook);
        library.push(newBook);
    };








// ----form-----

// function createBook(event) {
//     event.preventDefault();
//     const bookForm = new FormData(this);
//     const entries = bookForm.entries();
//     const data = Object.fromEntries(entries);
//     console.log(data);
// };






























// function Book(title, author, pages, read) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     // this.read = read;
//     // this.info = function () {
//     //      return 'The book title: ' + title + ' by ' + author + '. The book is ' + pages +' pages long. book completed: ' + read ;
//     // }
// }

// Book.prototype.sayTitle = function () {
//     console.log(this.title)
// }

// const book = {
//     read : false,
//     info :function () {
//         return 'The book title: ' + title + ' by ' + author + '. The book is ' + pages +' pages long. book completed: ' + read ;
//    }
// }


// const book1 = new Book('IT', 'Steven King', '978', 'no');
// const book2 = new Book('Nice Guy', 'Dean Koontz', '648', 'yes')
// const book3 = new Book('Danger Zone', 'Aiden Finnigan', '540', 'no')
// const mybook = Object.create(book);
// // const person = {
// //     isHuman: false,
// //     printIntroduction: function() {
// //       console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
// //     }
// //   };



// //   const Ace = Object.create(person);

// // Ace.name = 'Aaron';
// // Ace.isHuman = true;

// // Ace.printIntroduction();

// mybook.title = 'Ace Stories';
// mybook.author = 'Aaron Griffin';
// mybook.pages = '300';
// mybook.read = 'yes';

// console.log(mybook)








