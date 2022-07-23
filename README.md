Project: The goal is to create a library application that will allow you to keep track of books your reading


Log: 
- Can not understand how to create an object using user form and push it into an array. Trying formEntries with varied success. 
 - got rid of the form format and just used inputs directly to gather user info. Figured out how to save my objects into arrays. shows up in console.log
- need to create cards for each object in the array. I want to cycle through the array and create a card for each object added. Getting my pushed object to display was tedious but i eventually figured it out. Problem is that if I create a new book profile multiple times, the display is simply added the old information below. by creating a grid layout in container div, I was able to use document.createElement('div') to create a new card for book submission. 

-went back to using form as container for inputs (not buttons). created a function that would reset form everytime addbookBtn is pressed. Removed modal from html contents div and placed it in footer div. This caused issues because when trying to reset the cards, the modal would also be cleared since it was a child of the parent container.

-whenever user information is submitted, cards are cloned (original card + original card plus new card). I created a function to clear all card on display then another function to repopulate the current array list by using library.forEach. Due to function placement, I got bad results multiple times until tying the functions to the submit.onclick.

-removing objects from the array on button click was driving me crazy. I couldn't undertand how to tie the cards populated to their corresponding object within the array. After multiple failed attempts (loops, forEach, map(), ect...). Eventually, i decided to create an array for each removebutton attached to a card. Then i could tie the removebutton array to the library array, so that when the removebutton is pressed, the corresponding library index is matched and the object is removed from array. the cards in the display are cleared and repopulated.


Issues: 
1- cards all update to last user input(cloning) -- fixed

2- cannot remove cards --fixed

3- cannot edit cards

4- buttons move out of card if info too large

5- Cannot get rid of modal input info when addbookbutton is pressed. -- fixed
