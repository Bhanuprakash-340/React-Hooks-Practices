import React from "react";
import "./App.css";
import AppStore from "./components/AppStore";
import { Boxes } from "./components/Boxes";
import BrowserHistory from "./components/BrowserHistory";
import CapitalsApp from "./components/CapitalsApp";
import CashWithdrawls from "./components/CashWithdrawals";
import ClickCounter from "./components/ClickCounter";
import CongratsCards from "./components/CongratsCards";
import DestinationSearch from "./components/DestinationSearch";
import EvenOrOdd from "./components/EvenOrOdd";
import FruitsCounter from "./components/FruitsCounter";
import GalleryApp from "./components/GalleryApp";
import GoogleSuggestions from "./components/GoogleSuggestions";
import HeadsTails from "./components/HeadsTails";
import HideAndShow from "./components/HideAndShow";
import LettersCalculator from "./components/LettersCalculator";
import LoginLogout from "./components/LoginLogout";
import { Notifications } from "./components/Notifications";
import RandomNumGenerator from "./components/RandomNumGenerator";
import { ReusableBanners } from "./components/ReusableBanners";
import Reviews from "./components/Reviews";
import SimpleTodos from "./components/SimpleTodos";
import { SocialButtons } from "./components/SocialButtons";
import SpeedoMeter from "./components/SpeedoMeter";
import SuperOverLeague from "./components/SuperOverLeague";
import { TechnologyCards } from "./components/TechnologyCards";
import ThemeChanges from "./components/ThemeChanges";
import WelcomeApp from "./components/WelcomeApp";
import CommentsApp from "./components/CommentsApp";
import AppointmentsApp from "./components/AppointmentApp";
import MoneyManager from "./components/MoneyManager";

const App = () => {
  return (
    <div className="main-container">
      <SuperOverLeague />
      <CongratsCards />
      <SocialButtons />
      <Notifications />
      <Boxes />
      <ReusableBanners />
      <TechnologyCards />
      <ClickCounter />
      <SpeedoMeter />
      <FruitsCounter />
      <WelcomeApp />
      <ThemeChanges />
      <HideAndShow />
      <EvenOrOdd />
      <LoginLogout />
      <RandomNumGenerator />
      <DestinationSearch />
      <SimpleTodos />
      <CashWithdrawls />
      <LettersCalculator />
      <BrowserHistory />
      <GoogleSuggestions />
      <GalleryApp />
      <CapitalsApp />
      <AppStore />
      <HeadsTails />
      <Reviews />
      <CommentsApp />
      <AppointmentsApp />
      <MoneyManager />
    </div>
  );
};

export default App;
