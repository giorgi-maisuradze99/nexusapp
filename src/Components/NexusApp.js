import React from "react";
import { Chat } from "./Chat";
import "../Styles/NexusApp.css";
import { useState } from "react";
import { auth } from "../firebase-config";
import { signOut } from "firebase/auth";
import Cookies from "universal-cookie";
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
    <div className="nexus-container">
      <header>
        <button>Nexus</button>
      </header>
      <Chat />
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
    </div>
  );
};

export default NexusApp;
