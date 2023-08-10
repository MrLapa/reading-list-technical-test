# Reading list app development (Technical test)

## Level: Junior

This repository shows how to build a React application using different techniques we use when developing a React application.

This project includes handling user interactions, state management, data filtering and code structuring.

[demo](https://leafy-crostata-7a6702.netlify.app/)

## Context

This project will be developed for a multinational book publishing company. They want to offer their audience a way to see your catalog and be able to save the books they are interested in a reading list.

To do this, we want to develop a web application that allows users to view available books and create a reading list. Keep in mind that:

They are still determining if the framework we are going to use will be the final one, but we will want to reuse as much code as possible.

The application must be easy to use and pleasing to the eye.

We have to use the books.json file to get the books' data. We can add more books if we want, as long as it follows the same structure.

## Requirements

### Functionality

1. Available Books Viewing: The application must display a list of available books that the user can review.

2. Reading List Creation: The user must be able to create a reading list from the available books. It should be clear in the UI which books are in the reading list and which are not. Moving a book from the reading list to the available list should also be possible.

3. Filtering Books by Genre: Users should be able to filter the list of available books by genre, and a counter will be displayed with the number of available books, the number of books in the reading list, and the number of available books in the selected genre.

4. Status Synchronization: A global status synchronization should reflect the number of books in the reading list and the number of books still available. If a book moves from the available list to the reading list, the count of both should be updated accordingly.

5. Data Persistence: The application must persist the reading list data in the browser's local storage. When reloading the page, the reading list must be maintained.

6. Synchronization between tabs: If the user opens the application in two different tabs, changes made in one tab must be reflected in the other. No need to use Backend.

7. Deployment: The application must be deployed on a free hosting service (Netlify, Vercel, Firebase, etc) and must be accessible through a public URL. Indicate the URL in the README.

8. Test: The application must have AT LEAST one test. Make the test that you consider most important for your application.

![Reading list design](https://github.com/MrLapa/reading-list-technical-test/assets/5798165/08d51e31-0ce5-49cf-9698-eae1f1a8fd28)

**Feel free to leave feedback, and don't hesitate to reach out to me if you have any questions. I'll be happy to help you.** :+1:
