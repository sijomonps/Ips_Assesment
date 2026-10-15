// Key used to store books in browser localStorage
const STORAGE_KEY = 'book_tracker_books';

// Array to store our list of books in memory
let books = [];

// --- LocalStorage Helpers ---

/**
 * Loads books from localStorage.
 * Returns an array of books, or an empty array if nothing is saved.
 */
function loadBooksFromStorage() {
  try {
    const savedData = localStorage.getItem(STORAGE_KEY);
    return savedData ? JSON.parse(savedData) : [];
  } catch (error) {
    console.error('Error loading books from localStorage:', error);
    return [];
  }
}

/**
 * Saves the current books array into localStorage as a JSON string.
 */
function saveBooksToStorage() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
  } catch (error) {
    console.error('Error saving books to localStorage:', error);
  }
}

// --- DOM Elements ---
const bookForm = document.getElementById('book-form');
const titleInput = document.getElementById('book-title');
const authorInput = document.getElementById('book-author');
const statusSelect = document.getElementById('book-status');
const titleError = document.getElementById('title-error');
const authorError = document.getElementById('author-error');
const searchInput = document.getElementById('search-input');
const bookList = document.getElementById('book-list');
const emptyState = document.getElementById('empty-state');

// Status Counter Elements
const countTotalEl = document.getElementById('count-total');
const countToReadEl = document.getElementById('count-to-read');
const countReadingEl = document.getElementById('count-reading');
const countFinishedEl = document.getElementById('count-finished');

// Search query state
let searchQuery = '';

// --- Helper Functions ---

/**
 * Updates the total and status-specific book counters in the UI.
 */
function updateStatusCounts() {
  const total = books.length;
  const toRead = books.filter(function (book) { return book.status === 'To read'; }).length;
  const reading = books.filter(function (book) { return book.status === 'Reading'; }).length;
  const finished = books.filter(function (book) { return book.status === 'Finished'; }).length;

  countTotalEl.textContent = total;
  countToReadEl.textContent = toRead;
  countReadingEl.textContent = reading;
  countFinishedEl.textContent = finished;
}

/**
 * Updates the status of a specific book and persists changes to localStorage.
 */
function updateBookStatus(bookId, newStatus) {
  const targetBook = books.find(function (book) {
    return book.id === bookId;
  });

  if (targetBook) {
    targetBook.status = newStatus;
    saveBooksToStorage();
    renderBooks();
  }
}

/**
 * Deletes a book from the list after user confirmation, then updates storage and UI.
 */
function deleteBook(bookId) {
  const targetBook = books.find(function (book) {
    return book.id === bookId;
  });

  if (!targetBook) return;

  const confirmed = confirm(`Are you sure you want to delete "${targetBook.title}"?`);
  if (confirmed) {
    books = books.filter(function (book) {
      return book.id !== bookId;
    });
    saveBooksToStorage();
    renderBooks();
  }
}

/**
 * Clears any validation error messages and reset input borders.
 */
function clearErrors() {
  titleError.textContent = '';
  authorError.textContent = '';
  titleInput.classList.remove('input-error');
  authorInput.classList.remove('input-error');
}

/**
 * Validates the title and author fields.
 * Trims whitespace and displays an error message if any field is empty.
 * Returns true if valid, false otherwise.
 */
function validateForm(title, author) {
  let isValid = true;
  clearErrors();

  if (!title) {
    titleError.textContent = 'Please enter a book title.';
    titleInput.classList.add('input-error');
    isValid = false;
  }

  if (!author) {
    authorError.textContent = 'Please enter an author name.';
    authorInput.classList.add('input-error');
    isValid = false;
  }

  return isValid;
}

/**
 * Returns the CSS class for styling the status badge based on its value.
 */
function getStatusBadgeClass(status) {
  switch (status) {
    case 'To read':
      return 'status-to-read';
    case 'Reading':
      return 'status-reading';
    case 'Finished':
      return 'status-finished';
    default:
      return '';
  }
}

/**
 * Renders the list of books to the DOM.
 * Filters books by search query (case-insensitive on title and author).
 * Updates status counters and uses textContent and DOM methods to ensure safe rendering.
 */
function renderBooks() {
  // Always keep status counts updated
  updateStatusCounts();

  // Clear the current list
  bookList.innerHTML = '';

  // Case-insensitive search query
  const query = searchQuery.trim().toLowerCase();

  // Filter books matching title OR author
  const filteredBooks = books.filter(function (book) {
    if (!query) return true;
    const titleMatch = book.title.toLowerCase().includes(query);
    const authorMatch = book.author.toLowerCase().includes(query);
    return titleMatch || authorMatch;
  });

  // Handle empty states
  if (books.length === 0) {
    emptyState.textContent = 'No books added yet. Use the form above to add your first book!';
    emptyState.style.display = 'block';
    return;
  } else if (filteredBooks.length === 0) {
    emptyState.textContent = `No books found matching "${searchQuery}".`;
    emptyState.style.display = 'block';
    return;
  } else {
    emptyState.style.display = 'none';
  }

  // Create an <li> for each filtered book
  filteredBooks.forEach(function (book) {
    const li = document.createElement('li');
    li.className = 'book-item';

    // Container for title and author
    const infoDiv = document.createElement('div');
    infoDiv.className = 'book-info';

    const titleEl = document.createElement('h3');
    titleEl.className = 'book-title';
    titleEl.textContent = book.title; // Safe rendering

    const authorEl = document.createElement('p');
    authorEl.className = 'book-author';
    authorEl.textContent = `by ${book.author}`; // Safe rendering

    infoDiv.appendChild(titleEl);
    infoDiv.appendChild(authorEl);

    // Actions container (Status dropdown + Delete button)
    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'book-actions';

    // Interactive Status dropdown on the book card
    const statusSelectDropdown = document.createElement('select');
    statusSelectDropdown.className = `status-select ${getStatusBadgeClass(book.status)}`;
    statusSelectDropdown.setAttribute('aria-label', `Change status for "${book.title}"`);

    const statuses = ['To read', 'Reading', 'Finished'];
    statuses.forEach(function (statusOption) {
      const option = document.createElement('option');
      option.value = statusOption;
      option.textContent = statusOption;
      if (statusOption === book.status) {
        option.selected = true;
      }
      statusSelectDropdown.appendChild(option);
    });

    // When status is changed from the card, update state and localStorage
    statusSelectDropdown.addEventListener('change', function (event) {
      updateBookStatus(book.id, event.target.value);
    });

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.className = 'btn-delete';
    deleteBtn.textContent = 'Delete';
    deleteBtn.setAttribute('aria-label', `Delete "${book.title}"`);
    deleteBtn.addEventListener('click', function () {
      deleteBook(book.id);
    });

    actionsDiv.appendChild(statusSelectDropdown);
    actionsDiv.appendChild(deleteBtn);

    // Assemble book item
    li.appendChild(infoDiv);
    li.appendChild(actionsDiv);

    bookList.appendChild(li);
  });
}

// --- Event Listeners ---

// Listen for form submission
bookForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent standard browser page reload

  // Get trimmed values from inputs
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const status = statusSelect.value;

  // Validate inputs
  if (!validateForm(title, author)) {
    return;
  }

  // Create new book object
  const newBook = {
    id: Date.now().toString(),
    title: title,
    author: author,
    status: status,
    createdAt: Date.now() // Timestamp to record when the book was added
  };

  // Add the newest book to the TOP of the array
  books.unshift(newBook);

  // Save the full updated books array to localStorage
  saveBooksToStorage();

  // Reset search box so the newly added book is immediately visible
  if (searchQuery) {
    searchQuery = '';
    searchInput.value = '';
  }

  // Re-render the list
  renderBooks();

  // Reset the form fields and focus the title input for the next entry
  bookForm.reset();
  titleInput.focus();
});

// Clear input error styling as soon as user types
titleInput.addEventListener('input', function () {
  if (titleInput.value.trim()) {
    titleError.textContent = '';
    titleInput.classList.remove('input-error');
  }
});

authorInput.addEventListener('input', function () {
  if (authorInput.value.trim()) {
    authorError.textContent = '';
    authorInput.classList.remove('input-error');
  }
});

// Real-time search filter as the user types
searchInput.addEventListener('input', function () {
  searchQuery = searchInput.value;
  renderBooks();
});

// --- Initial Startup ---
// 1. Load any previously saved books from localStorage
books = loadBooksFromStorage();

// 2. Render the books on initial page load
renderBooks();

