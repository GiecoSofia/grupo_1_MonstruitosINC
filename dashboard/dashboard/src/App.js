import React from 'react';
import SideBar from './components/SideBar';
import MainContent from "./components/MainContent";
import ProducList from './components/ProductList';
import UserList from './components/UserList';
import { Link, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <div>

      <div className="display">
        <SideBar />

        <Routes>
          <Route exact path='/' element={<MainContent />} />
          <Route  path='/productlist' element={<ProducList />} />
          <Route  path='/userList' element={<UserList />} />
        </Routes>

      </div>

    </div>
  );
}

export default App;
