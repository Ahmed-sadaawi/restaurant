/* بسم الله الرحمن الرحيم */

import React from "react";
import Explore from "../Explore/Explore";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Pride from "../Pride/Pride";
import Questions from "../Questions/Questions";
import Slider from "../Slider/Slider";
import State from "../State/State";
import Stomach from "../Stomach/Stomach";

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Header />
      <State />
      <Pride />
      <Stomach />
      <Explore />
      <Slider />
      <Questions />
      <Footer />
    </React.Fragment>
  );
}

export default App;
