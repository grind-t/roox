import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilePage from "./components/profile/profile-page";
import UsersPage from "./components/users/users-page";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/roox">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<UsersPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
