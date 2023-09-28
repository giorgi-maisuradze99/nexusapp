import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  Routes,
  Link,
} from "react-router-dom";
import { auth } from "../firebase-config";
import { signOut } from "firebase/auth";
import Cookies from "universal-cookie";
import { useState } from "react";
import "../Styles/NexusApp.css";
import { Chat } from "./Chat";
import React from "react";
import Posts from "./Posts.js";

const cookie = new Cookies();

const NexusApp = (props) => {
  const { setIsAutenthicated } = props;
  const [settingsOpen, setSettingsOpen] = useState(false);

  const userSignOut = async () => {
    await signOut(auth)
      .then(() => {
        cookie.remove("auth-token");
        setIsAutenthicated(false);
      })
      .catch((err) => [console.error(err)]);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="nexus-container">
              <header>
                <h1>Nexus</h1>
                <Link to="/posts">Posts</Link>
              </header>
              <Chat />
            </div>
          }
        />
        <Route
          path="/posts"
          element={
            <div className="nexus-container">
              <header>
                <h1>Nexus</h1>
                <Link to="/">Chat</Link>
              </header>
              <Posts />
            </div>
          }
        />
      </Routes>
      <div className="settings-container">
        <button
          className="settings-button"
          onClick={() => setSettingsOpen(!settingsOpen)}
        >
          ⚙️
        </button>
        <div className={settingsOpen ? "settings-panel" : "hidden"}>
          <button id="logout-button" onClick={() => userSignOut()}>
            Log out
          </button>
        </div>
      </div>
    </Router>
  );
};

export default NexusApp;
