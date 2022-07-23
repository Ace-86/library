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
 function book(title, author, page, status) {
     this.title = title;
     this.author = author;
     this.page = page;
    //  this.status = status;
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
        // let status = status;
        newBook = new book(title, author, page, status);
        console.log(newBook);
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
                                                <div class="buttonSection">
                                                    <button class="removeBtn"> X </button>
                                                    <button class= "bookStatus" id="stat"> </button>
                                                </div>
                                        </div>`
            const elementdiv = document.createElement('div');
            elementdiv.innerHTML= cardContainer;
            $card.appendChild(elementdiv);
            
            $statusBtn = document.querySelector('#stat')
            let status = 'Not Read'
            $statusBtn.style.backgroundColor = 'rgb(177, 88, 88)'; //red
            if (book.status) {
                 status = 'Read';
                $statusBtn.style.backgroundColor = 'rgb(41, 75, 40)'; //green
            }
            $statusBtn.textContent = status;

            console.log(library);
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
            // console.log(removeArray);
            removeArray.forEach((button) => {
                button.addEventListener('click', () => {
                    library.splice(removeArray.indexOf(button), 1);
                    // console.log(library);
                    createCard();
                });
            }); 
        };


        function statusCarEvents(){                                      
            const statusButtons = document.querySelectorAll('.bookStatus')
            let statusArray = Array.from(statusButtons)
            // statusButtons.style.backgroundColor = 'rgb(177, 88, 88)';
            statusArray.forEach((button) => {
                button.addEventListener('click', () => {
                        library[statusArray.indexOf(button)].status = 
                        !(library[statusArray.indexOf(button)].status)
                        // console.log(statusArray);
                        createCard();
                });
                
            });
        }    