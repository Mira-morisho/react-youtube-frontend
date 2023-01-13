import socketIO from "socket.io-client";
import "./App.css";
import "./Styles/Videos_tyle.css";
import "./Styles/login.css";
import { useEffect } from "react";
import Login from "./ Components/Login";
import { gapi } from "gapi-script";
import Sidebar from "./ Components/Sidebar";
import NavBar from "./ Components/NavBar";
import Videos from "./ Components/Videos";
import Logout from "./ Components/Logout";
import { Route, Routes } from "react-router-dom";
import LireVideo from "./ Components/LireVideo";
import Abonnement from "./ Components/Abonnement";
import VideoChaine from "./ Components/VideoChaine";
import SearchPage from "./ Components/SearchPage";
// import Profile from "./Components/Profile";
// import ProfileUpdate from "./Components/ProfileUpdate";

const socket = socketIO.connect("http://localhost:3001");
const App = () => {
  const clientId =
    "788629390659-rbb4ksm8te2v3tijobl53bbh1f4boqsg.apps.googleusercontent.com";
  const DisplayHome = () => {
    return (
      <>
        <div className="navigation">
          <NavBar />
        </div>
        <div className="interface">
          <Sidebar />
          <Videos />
        </div>
      </>
    );
  };
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "https://www.googleapis.com/auth/youtube",
      });
    }
    gapi.load("client: auth2", start);
  });

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<DisplayHome />} />
        <Route path="/video/:id" element={<LireVideo />}></Route>
        <Route path="/Abonnement" element={<Abonnement />}></Route>
        <Route path="/VideoChaine/:channelId" element={<VideoChaine />}></Route>
        <Route path="/SearchPage/:searchWord" element={<SearchPage />}></Route>
        {/* <Route path="/userprofile/:userId" element={<Profile />} />
        <Route path="/userprofiledit" element={<ProfileUpdate />} /> */}
      </Routes>
    </>
  );
};

export default App;
