import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBooks } from './BooksSlice';
import { v4 as uuidv4 } from 'uuid';

export default function AddBook() {
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();

  const dispatch = useDispatch();
  const navigator = useNavigate();

  // const numberOfBooks = useSelector((state) => state.booksReducer.books.length)
  // console.log(numberOfBooks)

  const booksHandleFunction = (e) => {
    e.preventDefault();
    const book = { id: uuidv4(), title, author};
    dispatch(addBooks(book));
    navigator('/list-books', {replace: true})
    // console.log(book);
  }
  return (
      <div className='container py-2'> 
        <div className="row">
            <div className="col-xl-12">
                <h1>Create Book</h1>
                <form action='' method='post' onSubmit={booksHandleFunction}>
                      <div className="mb-3 text-start">
                        <label 
                             
                            className="form-label ">
                            Book Name
                        </label>
                          <input 
                            type="text" 
                            className="form-control" 
                            id="exampleFormControlInput1" 
                            placeholder="type book name" 
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                          />
                      </div>
                      <div className="mb-3 text-start">
                          <label
                              
                              className="form-label">
                              Author Name
                          </label>
                          <input
                              type="text"
                              className="form-control"
                              id="exampleFormControlInput1"
                              placeholder="type author name"
                              value={author}
                              onChange={(e) => setAuthor(e.target.value)}
                          />
                      </div>
                      <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}
