import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBooks } from './BooksSlice';

export default function ViewBook() {
    const Books = useSelector((state) => state.booksReducer.books)
    console.log(Books)
    const dispatch = useDispatch();


    // delete
    const booksDeletFunction = (id) => {
        dispatch(deleteBooks(id))
    }
  return (
      <div className='container py-2'> 
          <div className="row">
              <div className="col-xl-12">
                <h1>All Book List</h1>
                  <table className="table">
                      <thead>
                          <tr>
                              <th scope="col">ID</th>
                              <th scope="col">Book Name</th>
                              <th scope="col">Author Name</th>
                              <th scope="col">Action</th>
                          </tr>
                      </thead>
                      <tbody>
                            {
                                Books && Books.map((book) => {
                                    const {id, title, author} = book;
                                    return <tr key={id}>
                                            <th scope="row">{id}</th>
                                            <td>{title}</td>
                                            <td>{author}</td>
                                            <td className='d-flex flex-wrap gap-2 justify-content-center'>
                                                <button type="button" className="btn btn-info">Edit</button>
                                                <button 
                                                    type="button" 
                                                    className="btn btn-danger"
                                                    onClick={() => {booksDeletFunction(id)}}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                })
                            }
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
  )
}
