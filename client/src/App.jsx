import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout";
import Home from "./pages/Home";
import PasteBin from "./pages/PasteBin"
import AllBin from './pages/AllBin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path=":id" element={<PasteBin />} />
          <Route path="all" element={<AllBin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App
