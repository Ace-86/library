Project: The goal is to create a library application that will allow you to keep track of which page your on in each book.


Issues: 
7/17/22 - Can not understand how to create an object using user form and push it into an array. Trying formEntries with varied success. 

7/18/22 - got rid of the form format and just used inputs directly to gather user info. Figured out how to save my objects into arrays. shows up in console.log

7/19/22 - need to create cards for each object in the array. I want to cycle through the array and create a card for each object added. Getting my pushed object to display was tedious but i eventually figured it out. Problem is that if I create a new book profile multiple times, the display is simply added the old information below. by creating a grid layout in container div, I was able to use document.createElement('div') to create a new card for book submission. 

Issue: Cannot get rid of modal input info when addbookbutton is pressed.

solved: went back to using form as container for inputs (not buttons). created a function that would reset form everytime addbookBtn is pressed. Removed modal from html contents div and placed it in footer div. This caused issues because when trying to reset the cards, the modal would also be cleared since it was a child of the parent container.

7/21 -
Issues: 
1- cards all update to last user input
2- cannot remove cards
3- cannot edit cards
4- buttons move out of card if info too large
