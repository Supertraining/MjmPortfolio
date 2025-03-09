import { useContext } from "react";
import ThemeContext from "../context/ThemeContext.jsx";
import FincaWeb from "../components/fincaWeb/FincaWeb.jsx";
import EcommerceAPI from "../components/ecommerceAPI/EcommerceAPI.jsx";
import "./Main.css";
import Footer from "../components/footer/Footer.jsx";
import ClubManager from "../components/clubManager/ClubManager.jsx";
import TrelloJsonToCsv from "../components/trelloJsonToCsv/TrelloJsonToCsv.jsx";
import Up from "../components/up/Up.jsx";
export default function Main() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={
        theme === "darkSide"
          ? `${theme} p-4 d-flex row p-3 rounded justify-content-center`
          : "lightSide p-3  d-flex row justify-content-center"
      }
    >
      <TrelloJsonToCsv />
      <ClubManager />
      <EcommerceAPI />
      <FincaWeb />
      <Up />
      <Footer />
    </div>
  );
}
