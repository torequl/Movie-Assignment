import { BrowserRouter, Route, Routes,  } from "react-router";
import Home from "./pages/Home"
import Movies from "./pages/Movies";
import Navbar from "./components/Navbar";

function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/movies" element={ <Movies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;