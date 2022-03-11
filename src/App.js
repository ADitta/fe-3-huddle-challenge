import "./styles/app.scss";

import mockup from "./images/illustration-mockups.svg";
import logo from "./images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
function App() {
  return (
    <div className="landing-page">
      <nav>
        <div id="title">
          <img src={logo} alt="" />
        </div>
      </nav>

      <div className="hero">
        <div className="image">
          <img src={mockup} alt="" />
        </div>
        <div className="info">
          <h1>Build The Community Your Fans Will Love</h1>
          <p>
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <div>
            <button>Register</button>
          </div>
        </div>
      </div>

      <footer>
        <div className="facebook-container">
          <FontAwesomeIcon
            icon={faFacebook}
            className="icon-facebook"
            size="lg"
          ></FontAwesomeIcon>
        </div>
        <FontAwesomeIcon icon={faTwitter} className="icon"></FontAwesomeIcon>
        <FontAwesomeIcon icon={faInstagram} className="icon"></FontAwesomeIcon>
      </footer>
    </div>
  );
}

export default App;
