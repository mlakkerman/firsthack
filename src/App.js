import './App.css';
import { Header } from './Components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
          <Routes>

          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;