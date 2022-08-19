// -----array----
 let library = [];

 // ----dom elements (modal)----
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

 // -----object constructor----
class book {
constructor(title, author, page, status) {
    this.title = title;
    this.author = author;
    this.page = page;
        };
    }

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
    
    // closes modal when clicked outside modal window
    window.onclick = function(event) {
        if (event.target == $modalForm) {
            $modalForm.style.display = "none";
        }
    };
        
    // take user input and push into 'library' array
    const getUserInput = () => {
        let title = $title.value;
        let author = $author.value;
        let page = $page.value;
        newBook = new book(title, author, page, status);
        library.push(newBook);
    };
    

    // creates card for each array item, and adds button functionality
    function createCard() {
        clearCard();
        library.forEach((book, i) => {
            const cardContainer = `<div class="card-container" data-index=${i}>
                                        <p class='titles'>Book Title: ${book.title}</p>
                                            <p >Book Author: ${book.author}</p>
                                            <p>Total Pages: ${book.page}</p>                                  
                                        </div>`
            const elementdiv = document.createElement('div');
            elementdiv.className = 'contain1';
            const removeButton = document.createElement('button');
            removeButton.className = 'removeBtn';
            removeButton.textContent = 'X';
            elementdiv.innerHTML= cardContainer;
            $card.appendChild(elementdiv);
            const $statusBtn = document.createElement('button');
            $statusBtn.className ='stat';
            elementdiv.appendChild(removeButton);
            elementdiv.appendChild($statusBtn);
            let status = 'Not Read';
            $statusBtn.style.backgroundColor = ' rgba(247, 244, 78, 0.966)'; //red
            if (book.status) {
                status = 'Read';
                $statusBtn.style.backgroundColor = 'rgba(0, 247, 33, 0.900)'; //green
            }
            $statusBtn.textContent = status;
        
        });
        deleteCardEvent();
        statusCarEvents()
    };

    // clears input form
    function clearForm() {
        $form.reset();
    }    

    // removes all cards on display (used to reset display)
    function clearCard() {
        $card.innerHTML ="";
    }

    // function remove cards from display and corresponding array object        
        function deleteCardEvent() {
            const removeButtons = document.querySelectorAll('.removeBtn');
            let removeArray = Array.from(removeButtons);
            removeArray.forEach((button) => {
                button.addEventListener('click', () => {
                    library.splice(removeArray.indexOf(button), 1);
                    createCard();
                    console.log(removeArray)
                });
            }); 
        };


        function statusCarEvents(){                                      
            const statusButtons = document.querySelectorAll('.stat')
            let statusArray = Array.from(statusButtons)
            statusArray.forEach((button) => {
                button.addEventListener('click', () => {
                        library[statusArray.indexOf(button)].status = 
                        !(library[statusArray.indexOf(button)].status)
                        createCard();
                });
                
            });
        }    