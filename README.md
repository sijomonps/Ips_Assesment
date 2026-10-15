# 📚 Book Tracker

A simple, accessible, and clean web application for students and book lovers to keep track of their reading journey. Built purely with semantic HTML, CSS, and vanilla JavaScript.

---

## 🚀 Features

- **Add Books:** Add a book with its title, author, and reading status.
- **Reading Statuses:** Categorize books into `To read`, `Reading`, or `Finished`.
- **Form Validation:** Ensures title and author are not empty (automatically trims extra spaces) and displays clear inline error messages.
- **Chronological Sorting:** Newly added books appear at the top of the reading list.
- **Safe DOM Rendering:** Uses browser `textContent` APIs to safely render titles and authors, preventing script injection.
- **LocalStorage Persistence:** Books and their reading statuses are automatically saved to the browser and persist across page refreshes.
- **In-List Status Changing:** Change any book's status directly from the list item and have it immediately saved to `localStorage`.
- **Live Case-Insensitive Search:** Search books by title or author as you type, ignoring uppercase and lowercase differences.
- **Delete Books:** Remove a book from the list and storage with a confirmation prompt.
- **Reading Status Counts:** Real-time counters showing Total, To read, Reading, and Finished books.
- **Mobile Responsive Design:** Thoughtfully tailored layout for phones and smaller screens.

---

## 🛠️ Built With

- **HTML5:** Semantic markup and accessible labels.
- **CSS3:** Custom styles, focus indicators, responsive card layout.
- **Vanilla JavaScript:** State management and DOM manipulation (no external libraries or frameworks).

---

## 💻 How to Run Locally

You do not need to install any dependencies, packages, or servers.

1. Clone or download this repository to your local machine:
   ```bash
   git clone <YOUR_REPOSITORY_URL>
   cd ipsr_assesment
   ```
2. Open `index.html` directly in any web browser:
   - On Windows/macOS/Linux: Double-click `index.html`, or right-click and choose **Open With > Your Browser**.
   - Or, if you use VS Code, you can use the **Live Server** extension to open it on a local development port.

---

## 🌐 GitHub Pages Deployment Steps

Follow these steps to deploy this app as a free static website on GitHub Pages:

1. Push your project code to a public GitHub repository.
2. In your repository on GitHub, click on **Settings** (tab at the top).
3. In the left-hand navigation sidebar, click on **Pages** (under the "Code and automation" section).
4. Under **Build and deployment**:
   - Set **Source** to `Deploy from a branch`.
   - Under **Branch**, select `main` (or `master`) and keep folder as `/ (root)`.
5. Click **Save**.
6. Wait 1–2 minutes, then refresh the page. GitHub will display a message with your live website URL (e.g., `https://<your-username>.github.io/<repo-name>/`).
