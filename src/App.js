import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Shop from "./page/Shop";
import Blog from "./page/Blog";
import Contact from "./page/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
