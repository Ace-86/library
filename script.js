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
$modalForm = document.getElementById('modalForm');
$newBookBtn = document.querySelector('#addBtn');
$submit = document.querySelector('#submit')
$clearBtn = document.querySelector('#clearBtn');
$exitModal = document.getElementsByClassName('exit')[0];
$title = document.querySelector('#title');
$author = document.querySelector('#author');
$page = document.querySelector('#page');
$complete = document.querySelector('#complete');

 // -----object constructor----
 function Book(title, author, page, complete) {
     this.title = title;
     this.author = author;
     this.page = page;
     this.complete = complete;
    };
        
    // ------modal------
    
    //add button (modal popup)
    $newBookBtn.onclick = function() {
        $modalForm.style.display = "block";
    };
    
    //modal exit button
    $exitModal.onclick = function () {
        $modalForm.style.display = "none";
    };
//modal submit button
    $submit.onclick = function() {
        // e.preventDefault(); 
        getUserInput();
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
        newBook = new Book(title, author, page, complete);
        console.log(newBook);
        library.push(newBook);
    };
