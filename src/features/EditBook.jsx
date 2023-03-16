import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateBooks } from './BooksSlice';

export default function EditBook() {
    const dispatch = useDispatch();
    const navigator = useNavigate();

    const location = useLocation();
    console.log(location);
    
    const [id, setId] = useState(location.state.id);
    const [title, setTitle] = useState(location.state.title);
    const [author, setAuthor] = useState(location.state.author);

    const UpdateBooksHandleFunction = (e) => {
        e.preventDefault();
        const updateBook = { id , title, author };
        dispatch(updateBooks(updateBook));
        navigator('/list-books', { replace: true })
    }
  return (
      <div className='container py-2'>
          <div className="row">
              <div className="col-xl-12">
                  <h1>Create Book</h1>
                  <form action='' method='post' onSubmit={UpdateBooksHandleFunction}>
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
                      <button type="submit" className="btn btn-primary">Update Book</button>
                  </form>
              </div>
          </div>
      </div>
  )
}
