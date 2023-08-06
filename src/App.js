import { useState } from "react";
import "./App.css";
import Auth from "./Components/Auth";

import Cookies from "universal-cookie";
import NexusApp from "./Components/NexusApp";
const cookies = new Cookies();

function App() {
  const [isAutenthicated, setIsAutenthicated] = useState(
    cookies.get("auth-token")
  );

  if (!isAutenthicated) {
    return (
      <div className="App">
        <section className="sign-in-section">
          <Auth setIsAutenthicated={setIsAutenthicated} />
        </section>
      </div>
    );
  }
  return <NexusApp setIsAutenthicated={setIsAutenthicated} />;
}

export default App;
