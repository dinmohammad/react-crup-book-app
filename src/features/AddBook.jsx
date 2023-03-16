import React, { useState } from 'react'

export default function AddBook() {
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();

  const booksHandleFunction = (e) => {
    e.preventDefault();
    const book = {title, author};
    console.log(book);
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
                          />
                      </div>
                      <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}
