import PropTypes from "prop-types";
import styles from "./main.module.css";
import Card from "../components/card/Card.jsx";
import { CARD_CONSTANTS, SKILLS_CONSTANTS } from "../constants/index.js";

export default function Main({ theme, language, es, en }) {
  return (
    <div
      className={`p-3 d-flex flex-nowrap flex-md-wrap col-12 justify-content-start justify-content-sm-evenly gap-4 ${styles.container}`}
    >
      <Card
        className={styles.card}
        title="Clean Architecture RESTfull API"
        titleClassName={styles.card_title}
        // mainImageAnimation={styles.card_flip}
        mainImage={CARD_CONSTANTS.CLEAN_ARQUITECTURE_API.mainImage}
        description={
          language === "es"
            ? es.description.cleanArchitectureApi
            : en.description.cleanArchitectureApi
        }
        appUrl={CARD_CONSTANTS.CLEAN_ARQUITECTURE_API.appUrl}
        repoUrl={CARD_CONSTANTS.CLEAN_ARQUITECTURE_API.repoUrl}
        appText={language === "es" ? es.links.app : en.links.app}
        technologies={[
          SKILLS_CONSTANTS.typescript,
          SKILLS_CONSTANTS.node,
          SKILLS_CONSTANTS.express,
          SKILLS_CONSTANTS.jwt,
          SKILLS_CONSTANTS.mongo,
          SKILLS_CONSTANTS.docker,
          SKILLS_CONSTANTS.swagger,
        ]}
        theme={theme}
      />
      <Card
        className={styles.card}
        title="Trello Board Json to Csv"
        titleClassName={styles.card_title}
        // mainImageAnimation={styles.card_flip}
        mainImage={CARD_CONSTANTS.TRELLO_TO_JSON.mainImage}
        description={
          language === "es" ? es.description.trelloJsonToCsv : en.description.trelloJsonToCsv
        }
        appUrl={CARD_CONSTANTS.TRELLO_TO_JSON.appUrl}
        repoUrl={CARD_CONSTANTS.TRELLO_TO_JSON.repoUrl}
        appText={language === "es" ? es.links.app : en.links.app}
        technologies={[
          SKILLS_CONSTANTS.typescript,
          SKILLS_CONSTANTS.node,
          SKILLS_CONSTANTS.express,
          SKILLS_CONSTANTS.ejs,
        ]}
        theme={theme}
      />
      <Card
        className={styles.card}
        title="Club Manager"
        titleClassName={styles.card_title}
        // mainImageAnimation={styles.card_flip}
        mainImage={CARD_CONSTANTS.CLUB_MANAGER.mainImage}
        description={
          language === "es"
            ? es.description.clubManager.description
            : en.description.clubManager.description
        }
        appUrl={CARD_CONSTANTS.CLUB_MANAGER.appUrl}
        repoUrl={CARD_CONSTANTS.CLUB_MANAGER.repoUrl}
        appText={language === "es" ? es.links.app : en.links.app}
        technologies={[
          SKILLS_CONSTANTS.node,
          SKILLS_CONSTANTS.express,
          SKILLS_CONSTANTS.jwt,
          SKILLS_CONSTANTS.react,
          SKILLS_CONSTANTS.mongo,
        ]}
        theme={theme}
      />
      <Card
        className={styles.card}
        title="Ecommerce API"
        titleClassName={styles.card_title}
        // mainImageAnimation={styles.card_flip}
        mainImage={CARD_CONSTANTS.ECOMMERCE_API.mainImage}
        description={
          language === "es" ? es.description.ecommerceBack : en.description.ecommerceBack
        }
        appUrl={CARD_CONSTANTS.ECOMMERCE_API.appUrl}
        repoUrl={CARD_CONSTANTS.ECOMMERCE_API.repoUrl}
        appText={language === "es" ? es.links.app : en.links.app}
        technologies={[
          SKILLS_CONSTANTS.node,
          SKILLS_CONSTANTS.express,
          SKILLS_CONSTANTS.mongo,
          SKILLS_CONSTANTS.swagger,
        ]}
        theme={theme}
      />

      <Card
        className={styles.card}
        title="Finca El Boleado"
        titleClassName={styles.card_title}
        // mainImageAnimation={styles.card_flip}
        mainImage={CARD_CONSTANTS.FINCA_WEB.mainImage}
        description={language === "es" ? es.description.fincaWeb : en.description.fincaWeb}
        appUrl={CARD_CONSTANTS.FINCA_WEB.appUrl}
        repoUrl={CARD_CONSTANTS.FINCA_WEB.repoUrl}
        appText={language === "es" ? es.links.web : en.links.web}
        technologies={[
          SKILLS_CONSTANTS.html,
          SKILLS_CONSTANTS.css,
          SKILLS_CONSTANTS.js,
          SKILLS_CONSTANTS.bootstrap,
          SKILLS_CONSTANTS.scss,
        ]}
        theme={theme}
      />

      {/* <FincaWeb />
      <Up />   */}
    </div>
  );
}

Main.propTypes = {
  theme: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  es: PropTypes.object.isRequired,
  en: PropTypes.object.isRequired,
};
