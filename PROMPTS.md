Prompt:
I want to build a simple Book Tracker website for my student assessment using only index.html, style.css and app.js with vanilla JavaScript. Please dont write all the code at once. First give me a short plan and list of files you will create and wait for my next message before coding anything.

What changed:
A basic plan was given with the files we need to make. No code was written yet, waited for me to tell what to build first.

Prompt:
ok lets start with the basic part first. Create the html css and js files and make the book tracker UI. I need title, author and status fields with To read, Reading and Finished options. when i click Add the book should appear at the top of the list. Title and author are required and show an error below the empty field. pls keep the code simple and testable. Dont add all the other features yet.

What changed:
Created the three files index.html, style.css and app.js. Added the form with inputs for title, author and reading status. If title or author is empty it shows red error text below the box and trims spaces. When book is added it shows on top of the list.

Prompt:
Now add localStorage so my books stay there even after refreshing the page. Save the title, author, status and the information needed to keep the newest book at the top. When the page opens, load the saved books and show them. Please check that changing or adding a book doesnt accidentally erase the other books.

What changed:
Added local storage code in app.js so books are saved in browser. Now when i refresh the page the books are still there in same order and adding new book does not erase previous books.

Prompt:
Next add a search box above the book list. It should search both title and author while typing and ignore uppercase/lowercase differences. Also let me change the status of every book from the list itself. The new status must be saved in localStorage too. For example searching BEN should find a book by Benyamin.

What changed:
Added a search bar above the books list. It filters books as i type and works for both capital and small letters. Also added a dropdown inside each book row so i can change status directly and it saves to local storage.

Prompt:
The main features are done, now add the optional stuff: delete a book, show counts for To read, Reading and Finished, and make the page look good on mobile. Keep the design clean and dont break the features already working. After updating, give me a checklist to test each feature again.

What changed:
Added delete button for each book with confirmation alert box. Added total and status count badges at top that update automatically. Added media queries in css so it looks proper on small phone screens.

Prompt:
I tested the book tracker and found this issue: the ui is no clean. I expected a very clean and minumal look, but instead th ui was very complex . Please trace the problem in the existing code, explain the chnages in simple English, and fix it without breaking the other features. and update PROMPTS.md with the real issue and result.

What changed:
Changed style.css because earlier design had too many borders, dark shadows and loud colors. Made the list clean with simple line dividers between books, softer badge colors and a dark simple button.

Prompt:
Now do a final review of my Book Tracker assignment. Check each requirement against the actual code and help me test it manually. Fix any real issues you find, and dont claim a test passed unless it was actually run or I confirmed it. Please finish these records: update PROMPTS.md with the exact prompts, update README.md with run and deploy steps, update SUBMISSION.md with 5 important prompts and the ai mistake example, and give me a checklist of things i need to do myself.

What changed:
Checked the code to make sure all project requirements work. Updated the readme with project details and updated submission file with placeholders for my github links and explained the ui mistake and fix.
