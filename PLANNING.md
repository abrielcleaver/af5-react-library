# Library App Add Feature

- Due Dec. 17th
- Netlify link -> abriels-react-library.netlify.app

* From Description:

  - finish off the remaining work by adding the necessary routes to the `App.jsx` file, as well as adding links to the different pages. You need to create the following routes:
  - `/books`
    - This page lists all the books in the library's database.
  - `/books/:id`

    - This page shows the details for a single book, such as its author and genre.

  - Take a look through the `views` directory to find the existing pages.

### NEEDS TO BE COMPLETED

- [x] Add Supabase
  - [x] add to netlify
  - [ ] & github
- Create Folders/Files:
  - /views
    - [ ] /Books
      - [x] BookList.js
      - [x] BookDetail.js
        - [x] import { useEffect, useState } from react
        - [x] import { Link } from react-router-dom
        - [x] import Book from /components/book/Book
        - [x] import { getBookById } from /services/books
        - [x] export DEFAULT function BookDetail
        - [ ] write out full function
   

## Page Details to add

- Homepage (within App.js)

  - [x] Header with title- "Library Catalog"
  - [x] H2(?) for Welcome message - "Welcome to Dangalf's Library of Computer Science!"
  - [x] <P> or <div> for message - "Check out the amazing selection of books in our catalog."
              - [] link to catalog

- Book List Page

* [] link to homepage - "Back to Homepage"
* [] link each book to their details page

- Book Details Page
  - [] link to Catalog - "Back to Catalog"
  - [] details of correct book rendering


{} string in