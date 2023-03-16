import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteStore } from './StoreSlice';

function ViewStore(props) {
    const dispatch = useDispatch();
    const AllStores = useSelector((state) => state.storeReducer.StoresData);
    console.log(AllStores)


    const deleteStoreFunction = (id) => {
        dispatch(deleteStore(id))
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
                                <th scope="col">Store Name</th>
                                <th scope="col">Owner Name</th>
                                <th scope="col">Location</th>
                                <th scope="col">Number</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                AllStores && AllStores.map((data) => {
                                    const { id, name, owner, location, number } = data;
                                    return <tr key={id}>
                                        <th scope="row">{id}</th>
                                        <td>{name}</td>
                                        <td>{owner}</td>
                                        <td>{location}</td>
                                        <td>{number}</td>
                                        <td className='d-flex flex-wrap gap-2 justify-content-center'>
                                            <Link
                                                to='/edit-store'
                                                state={{ id, name, owner, location, number }}
                                            >
                                                <button
                                                    type="button"
                                                    className="btn btn-info"
                                                >
                                                    Edit
                                                </button>
                                            </Link>
                                            <button
                                                type="button"
                                                className="btn btn-danger"
                                                onClick={() => { deleteStoreFunction(id) }}
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
    );
}

export default ViewStore;