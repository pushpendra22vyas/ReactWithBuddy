import { useState, useEffect } from "react";
import { Header, Home, About, Contact, Footer } from "./components";
import { CrudProvider } from "./contexts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Crud from "./components/Pages/Crud/Crud";
import Todo from "./components/Pages/Todo/Todo";
import Registration from "./components/Pages/Crud/Registration";
import Table from "./components/Pages/Crud/Table";

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (userDetails) => {
    setUsers((prev) => [{ id: Date.now(), ...userDetails }, ...prev]);
  };

  // Update functionlity
  const updateUser = (id,updateData) => {
    // setUsers((prevData) => prevData.map((prev) => (prev.id === id ? (updateData) : prevData )))
    console.log("Udpade functionality Should be Here")
  };

  // Delete functionlity
  const deleteUser = (id) => {
    // console.log("Delete functionlity");
    setUsers((prev) => prev.filter((user) => user.id !== id))
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users"));
    if (users && users.length > 0) {
      setUsers(users);
    }
  }, []);

  return (
    <BrowserRouter>
      <CrudProvider value={{ users, addUser, updateUser, deleteUser }}>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/crud" element={<Crud />}>
            <Route path="create" element={<Registration />} />
            <Route path="table" element={<Table />} />
          </Route>
          <Route path="/todo" element={<Todo />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </CrudProvider>
    </BrowserRouter>
  );
}

export default App;
