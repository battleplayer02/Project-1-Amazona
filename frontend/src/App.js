import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import AllRouts from './components/AllRouts';
import { listProductCategories } from './actions/productActions';

function App() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProductCategories());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <div className="grid-container">
        <Header
          setSidebarIsOpen={setSidebarIsOpen}
          sidebarIsOpen={sidebarIsOpen} />
        <main><AllRouts /> </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
