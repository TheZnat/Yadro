import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "../Pages/HomePage/HomePage";
import Profile from "../Pages/Profile/Profile";
import Edit from "../Pages/Edit/Edit";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile/:id" element={<Profile />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route
        path="*"
        element={
          <div>
            <h2>404 — Страница не найдена</h2>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
