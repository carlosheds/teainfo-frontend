import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './views/Home';
import Blog from './views/Blog';
import Teste from './views/Teste';
import Contato from './views/Contato';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/teste" element={<Teste />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
