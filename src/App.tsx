import Items from "./components/Items";
import Layout from "./components/Layout";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // const user = localStorage.getItem("user");
  return (
    <BrowserRouter>
      <Routes>
        {/* {!user ? (
          <Route path="/" element={<Login />} />
        ) : (
          <Route path="/" element={<Layout />}>
            <Route index element={<Items />} />
            <Route path="/items" element={<Items />} />
            <Route path="*" element={<p>No Such Page</p>} />
          </Route>
        )} */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Items />} />
          <Route path="/items" element={<Items />} />
          <Route path="*" element={<p>No Such Page</p>} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
