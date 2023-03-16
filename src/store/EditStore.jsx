import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateStores } from './StoreSlice';

function EditStore() {
    const dispatch = useDispatch();
    const navigator = useNavigate();
    const data = useLocation();
    // console.log(location);

    const [id, setId] = useState(data.state.id);
    const [name, setName] = useState(data.state.name);
    const [owner, setOwner] = useState(data.state.owner);
    const [location, setLocation] = useState(data.state.location);
    const [number, setNumber] = useState(data.state.number); 



    const updateStoreFunction = (e) => {
        e.preventDefault();
        const updateStoreById = { id, name, owner, location, number };
        dispatch(updateStores(updateStoreById));
        navigator('/view-store', { replace: true })
    }
 
    return (
        <div className='container py-2'>
            <div className="row">
                <div className="col-xl-12">
                    <h1>Create Book</h1>
                    <form action='' method='post' onSubmit={updateStoreFunction}>
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

export default EditStore;