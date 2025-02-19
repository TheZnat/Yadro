import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "../Pages/HomePage/HomePage";
import Profile from "../Pages/Profile/Profile";
import Edit from "../Pages/Edit/Edit";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/edit" element={<Edit />} />
      {/* <Route path="/profile:id" element={<Provile/>} />
      <Route path="/profile:id/edit" element={<Edit/>} /> */}
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
