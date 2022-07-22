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
    };
    
    //modal exit button
    $exitModal.onclick = function () {
        $modalForm.style.display = "none";
    };
    //modal submit button
    $submit.onclick = function() {
        getUserInput();
        createCard();
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
    

    function createCard() {
        clearCard();
        library.forEach((book, i) => {
            const cardContainer = `<div class="card-container" data-index=${i}>
                                        <p class='titles' data-index=${i}>${book.title}</p>
                                            <p >Book Author: ${book.author}</p>
                                            <p>Total Pages: ${book.page}</p>
                                                <div class="buttonSection">
                                                    <button class="removeBtn"> X </button>
                                                    <button class= "editBtn"> Edit </button>
                                                </div>
                                        </div>`
            const elementdiv = document.createElement('div');
            elementdiv.innerHTML= cardContainer;
            $card.appendChild(elementdiv);

            $deleteButton = document.querySelector('.removeBtn');
            $deleteButton.addEventListener('click', deleteCard);
            console.log(library);

        });
    };

    // buttonRM.onclick = function() {
    //     deleteCard();
    // }

    function clearForm() {
        $form.reset();
    }    
    
    function clearCard() {
        $card.innerHTML ="";
    }

    function marker() {
        const mark = library.map(book => book.title);
        console.log(mark);
        };

    // function deleteCard() {
        
        function deleteCard () {
            b = document.querySelector('.titles');
            index = library.findIndex(book => {
                return book.title == b.innerHTML; 
                // try searching innerhtml and removing space
            });
            console.log(index)
        };
            // library.splice(index, 1);
            // createCard();
        
        
        
        // p = document.querySelector('.titles');
        // const index = library.findIndex(book => {
        //     return  book.title === p.innerHTML;
            
        // })
        
        
        // library.splice(0, 1);
        // console.log(index);
        
        // find indexof card with shared title
        // splice that index from library
    // };


    
    // function displayAll() {
    //     clearCard();
    //     library.forEach(function() {
    //         createCard();
    //     });
    // }