# Assessment Deliverables — Book Tracker

Student assessment deliverable document containing project links, key prompts, and an example of an AI mistake and correction.

---

## 1. Project Links

- **GitHub Repository URL:** `[PLACEHOLDER: Insert your repository URL here, e.g., https://github.com/username/book-tracker]`
- **Live Website URL (GitHub Pages):** `[PLACEHOLDER: Insert your GitHub Pages URL here, e.g., https://username.github.io/book-tracker/]`

---

## 2. Five Important Prompts

Below are five key prompts used during the development of this project:

1. **Prompt 1 (Planning & Architecture):**
   > *"# Antigravity project instructions — Book Tracker ... Start by providing only the implementation plan and proposed file list. Do not create the complete app yet. Wait for my next prompt."*

2. **Prompt 2 (UI Setup & Basic Book Addition):**
   > *"ok lets start with the basic part first. Create the html css and js files and make the book tracker UI. I need title, author and status fields with To read, Reading and Finished options. when i click Add the book should appear at the top of the list. Title and author are required and show an error below the empty field. pls keep the code simple and testable. Dont add all the other features yet."*

3. **Prompt 3 (LocalStorage Persistence):**
   > *"Now add localStorage so my books stay there even after refreshing the page. Save the title, author, status and the information needed to keep the newest book at the top. When the page opens, load the saved books and show them. Please check that changing or adding a book doesnt accidentally erase the other books."*

4. **Prompt 4 (Real-time Search & Status Update):**
   > *"Next add a search box above the book list. It should search both title and author while typing and ignore uppercase/lowercase differences. Also let me change the status of every book from the list itself. The new status must be saved in localStorage too. For example searching BEN should find a book by Benyamin."*

5. **Prompt 5 (Optional Features: Delete, Counters & Mobile Responsiveness):**
   > *"The main features are done, now add the optional stuff: delete a book, show counts for To read, Reading and Finished, and make the page look good on mobile. Keep the design clean and dont break the features already working. After updating, give me a checklist to test each feature again."*

---

## 3. Genuine Example of an AI Mistake and Its Correction

- **The Issue / Mistake:**
  When implementing the full feature set (specifically the status counters, book cards, and delete buttons), the AI introduced an overly complex, cluttered design. It applied heavy enclosing borders to every card and book row, harsh high-saturation background colors to badges, bulky drop shadows, and an aggressive full-width primary button. This contradicted the project requirement for a clean, simple, and minimal aesthetic suitable for a student portfolio.

- **How It Was Identified:**
  During student user testing after Prompt 5, the student observed that the user interface felt visually noisy, boxy, and heavy rather than clean and minimal, prompt-reporting: *"the ui is no clean. I expected a very clean and minumal look, but instead th ui was very complex"*.

- **The Explanation & Fix:**
  - *Why it happened:* The CSS had "border overload" and excessive color saturation—every layer (card, row, button, badge) had its own border and shadow, creating visual friction.
  - *How it was resolved:* Refactored `style.css` by removing bulky box borders around each book item and switching to an airy, divider-based row list (`border-bottom: 1px solid var(--border-light)`). Muted the status badges into subtle pastel pills, replaced the loud blue button with a sleek minimalist slate button, integrated the status counter into a slim top bar, and turned the delete button into a subtle ghost action. All existing functionality and accessibility states were preserved.
