// -----array----
 let library = [
    // {
    //     title: "IT",
    //     author: "Stephen King",
    //     pages: 604,
    //     complete: true
    // }
 ];

 // ----dom elements----
$modalForm = document.getElementById('modalForm');
$newBookBtn = document.querySelector('#addBtn');
$submit = document.querySelector('#submit')
$clearBtn = document.querySelector('#clearBtn');
$exitModal = document.getElementsByClassName('exit')[0];
$title = document.querySelector('#title');
$author = document.querySelector('#author');
$page = document.querySelector('#page');
$complete = document.querySelector('#complete');
$card = document.querySelector('.content');
$input = document.querySelector('.input');
$form = document.querySelector('.formData')
// $remove = document.querySelector('.removeBtn')

 // -----object constructor----
 function book(title, author, page, complete) {
     this.title = title;
     this.author = author;
     this.page = page;
     this.complete = complete;
    };
        
    // ------modal------
    
    //add button (modal popup)
    $newBookBtn.onclick = function() {
        $modalForm.style.display = "block";
        clearForm();
        // clearCard();
        // reloadModal();
    };
    
    //modal exit button
    $exitModal.onclick = function () {
        $modalForm.style.display = "none";
    };
    //modal submit button
    $submit.onclick = function() {
        getUserInput();
        createCard();
        // indexedD();
        $modalForm.style.display = "none";
        
    };
    
    // close modal when click outside modal
    window.onclick = function(event) {
        if (event.target == $modalForm) {
            $modalForm.style.display = "none";
        }
    };
    
    
    
    // get user input; push into existing 'library' array
    const getUserInput = () => {
        let title = $title.value;
        let author = $author.value;
        let page = $page.value;
        let complete = $complete.value;
        newBook = new book(title, author, page, complete);
        console.log(newBook);
        library.push(newBook);
    };
    
    ``
    function createCard() {
        // library.forEach(function() {
        var cardContainer = document.createElement('div');
        cardContainer.className = "card-container";
        let cardTitle = document.createElement('p');
        let cardAuthor = document.createElement('p');
        let cardPage = document.createElement('p');
        let cardComplete = document.createElement('p');
        let removeCard = document.createElement('button');
        let editCard = document.createElement('button');
        let buttonSection = document.createElement('div');

        buttonSection.className = 'buttonSection';
        removeCard.className = 'removeBtn';
        removeCard.textContent = "X";
        editCard.className = 'editBtn';
        editCard.textContent = 'Edit';
        // cardend = document.querySelectorAll('.card-container');
        cardContainer.appendChild(cardTitle);
        cardContainer.appendChild(cardAuthor);
        cardContainer.appendChild(cardPage);
        cardContainer.appendChild(cardComplete);
        cardContainer.appendChild(buttonSection);
        buttonSection.appendChild(removeCard);
        buttonSection.appendChild(editCard);
        $card.appendChild(cardContainer);

        cardTitle.innerHTML = "Book Title: " + title.value;
        cardAuthor.innerHTML = "Author: " + author.value;
        cardPage.innerHTML = "Total Pages: " + page.value;
        cardComplete.innerHTML = "Finished? " + complete.value;    
    // });
    };
    
    
    function clearForm() {
        $form.reset();
    }    
    
    function displayAll() {
        library.forEach(function() {
            createCard();
        });
    }
    
    function clearCard() {
       $card.innerHTML = " ";
    }
    
    // $remove.onclick(function(e) {
        // deleteCard();
    // }) ;
    // // function edit() {

    // }

    
    function deleteCard() {
        library.splice(0, 1);
        console.log(library);
    }

// function indexedD() {
//     const index = $(this).attr('data-layer');
//     const newIndex = Number(index) + 1;
//     $(this).attr('data-layer', newIndex);
//     console.log(this);
// }


    
    // function populateBooks(myLib, bookView) {
    //     document.querySelectorAll('.book-card').forEach(e => e.remove());
        
    //       myLib.forEach((book, i) => {
    //         const card = `<div class="book-card" data-index=${i}>
    //                                 <div class="card-info-wrapper">
    //                                      <h2>${book.title}</h2>
    //                                      <h3>${book.author}</h3>
    //                                      <h4>${book.pages} Pages</h4>
    //                                      <p>${book.info()}</p>
    //                                          <div class="button">
    //                                             Remove
    //                                          </div>
    //                                 </div>
    //                             </div>`
    //         const element = document.createElement('div');
    //         element.innerHTML = card;
    //         bookView.appendChild(element.firstChild);

    ' kjgkjhgk'
    title
    " kjgkjhgk"