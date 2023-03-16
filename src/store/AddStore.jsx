import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { addStores } from './StoreSlice';

function AddStore() {
    const [name, setName] = useState();
    const [owner, setOwner] = useState();
    const [location, setLocation] = useState();
    const [number, setNumber] = useState(); 


    const dispatch = useDispatch();
    const navigator = useNavigate();

    const AddStoreFunction = (e) => {
        e.preventDefault();
        const newStoreData = { id: uuidv4(), name, owner, location, number };
        dispatch(addStores(newStoreData))
        navigator('/view-store', {replace: true})
    }
    return (
        <div className='container py-2'>
            <div className="row">
                <div className="col-xl-12">
                    <h1>Create Book</h1>
                    <form action='' method='post' onSubmit={AddStoreFunction}>
                        <div className="mb-3 text-start">
                            <label

                                className="form-label ">
                                Store Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="type Store name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="mb-3 text-start">
                            <label

                                className="form-label ">
                                Owner
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="type Store Owner"
                                value={location}
                                onChange={(e) => setOwner(e.target.value)}
                            />
                        </div>

                        <div className="mb-3 text-start">
                            <label

                                className="form-label ">
                                Location
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="type Store Location"
                                value={owner}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                        </div>
                        <div className="mb-3 text-start">
                            <label

                                className="form-label ">
                                Number
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="type Number"
                                value={number}
                                onChange={(e) => setNumber(e.target.value)}
                            />
                        </div>
                       
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddStore;