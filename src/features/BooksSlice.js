import { createSlice } from "@reduxjs/toolkit"
const { v4: uuidv4 } = require('uuid');

// initial data 
const initialBooks = {
    books: [
        {id: uuidv4(), title: "Love Bangladesh", author: "Anishur Rahaman"},
        {id: uuidv4(), title: "English Therapy", author: "Saiful Islam"},
    ]
};

// action
export const BookSlice = createSlice({
    name: "books",
    initialState: initialBooks,
    reducers: {
        showBooks: (state) => state,
        addBooks: (state , action) => {
            state.books.push(action.payload)
        },
        updateBooks: (state , action) => {
            const {id, title, author} = action.payload;
            const isBooksExist = state.books.filter(book => book.id === id);
            if(isBooksExist){
                isBooksExist[0].title = title;
                isBooksExist[0].author = author;
            }
        },
        deleteBooks: (state , action) => {
            const id = action.payload;
            state.books = state.books.filter(book => book.id !== id)
        },
        
    }
})

// reducer export 
export const {showBooks, addBooks, deleteBooks, updateBooks} = BookSlice.actions;
export default BookSlice.reducer;