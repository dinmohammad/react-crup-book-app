import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddBook from '../features/AddBook'
import EditBook from '../features/EditBook'
import ViewBook from '../features/ViewBook'
import Header from '../layouts/Header'
import Home from '../pages/Home'

export default function Index() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/add-books" element={<AddBook/>}></Route>
            <Route path="/list-books" element={<ViewBook/>}></Route>
            <Route path="/edit-books" element={<EditBook/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

