import { Routes, Route } from "react-router-dom";
import Home from './Components/Pages/Home';
import Vote from './Components/Pages/Vote';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vote" element={<Vote />} />
      </Routes>
    </>
  );
}

export default App;
