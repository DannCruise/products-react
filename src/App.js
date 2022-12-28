import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ShowProducts from './components/ShowProducts';
import CreateProducts from './components/CreateProducts';
import EditProducts from './components/EditProducts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ShowProducts></ShowProducts>}></Route>
        <Route path='/create' element={<CreateProducts></CreateProducts>}></Route>
        <Route path='/edit/:id' element={<EditProducts></EditProducts>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
