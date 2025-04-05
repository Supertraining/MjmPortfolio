import propTypes from "prop-types";
import styles from "./contactMe.module.css";
import useContactMe from "./hooks/useContactMe.jsx";
import useAI from "../../../../hooks/useAI.jsx";
import { useEffect } from "react";
import LinkedIn from "../../../socials/linkedIn/LinkedIn.jsx";
import WhatsApp from "../../../socials/whatsApp/WhatsApp.jsx";
import Gmail from "../../../socials/gmail/Gmail.jsx";
import Input from "../../../inputs/Input.jsx";
import Textarea from "../../../textarea/Textarea.jsx";
import PrimaryButton from "../../../buttons/primaryButton/PrimaryButton.jsx";
import AiSuggestion from "./components/aiSuggestion/AiSuggestion.jsx";
import Form from "../../../form/Form.jsx";
import AiStreamSuggestion from "./components/aiStreamSuggestion/AiStreamSuggestion.jsx";
import InputLabel from "../../../inputs/InputLabel.jsx";

export default function ContactMe({ setRenderForm }) {
  const { name, setName, msg, setMsg, setGreet, greet, getData, language, es, en } = useContactMe();

  const {
    aiSuggestion,
    setAiSuggestion,
    aiStreamSuggestion,
    setAiStreamSuggestion,
    getAiStreamSuggestion,
    getAiFormSuggestion,
  } = useAI();

  const onSubmit = (e) => {
    e.preventDefault();
    getData();
    setTimeout(() => {
      setRenderForm(false);
    }, 3000);
    getAiStreamSuggestion(`${language === "es" ? es.prompt.msgSent : en.prompt.msgSent}`);
    setName("");
    setMsg("");
  };

  const onClose = () => {
    setAiSuggestion("");
    setAiStreamSuggestion("");
    setMsg("");
    setName("");
    setRenderForm(false);
  };

  const handleUseAiSuggestion = () => {
    setMsg(aiSuggestion),
      setAiSuggestion(""),
      getAiStreamSuggestion(
        language === "es"
          ? es.prompt.congratulateUsingSuggestion(name)
          : en.prompt.congratulateUsingSuggestion(name)
      );
  };

  useEffect(() => {
    if (name && !aiStreamSuggestion && !msg) {
      getAiStreamSuggestion(`${language === "es" ? es.prompt.greet(name) : en.prompt.greet(name)}`);
      setGreet(true);
      setTimeout(() => {
        setGreet(false);
      }, 5000);
    }
    if (name && aiStreamSuggestion && msg && !aiSuggestion) {
      setAiStreamSuggestion("");
      getAiStreamSuggestion(
        `${
          language === "es"
            ? es.prompt.congratulateUsingSuggestion(name)
            : en.prompt.congratulateUsingSuggestion(name)
        }`
      );
      setGreet(true);
      setTimeout(() => {
        setGreet(false);
        setAiStreamSuggestion("");
      }, 5000);
    }
  }, [name, language, aiSuggestion, es.prompt, en.prompt]);

  return (
    <>
      <Form
        onSubmit={onSubmit}
        classname={`${styles.form_ContactMe}`}
      >
        <div className="d-flex flex-column col-12 flex-sm-row justify-content-between gap-1 align-items-center">
          <div className="d-flex col-12 col-sm-5 flex-column my-1">
            <LinkedIn />
            <Gmail mail={"marangamatias@gmail.com"} />
            <WhatsApp celNumber={"(+54)1150111375"} />
          </div>

          <AiStreamSuggestion
            aiStreamSuggestion={aiStreamSuggestion}
            greet={greet}
            aiSuggestion={aiSuggestion}
          />
        </div>
        <div className="d-flex flex-column gap-2">
          <InputLabel
            className={`visibility-hidden`}
            id="name"
            label={language === "en" ? en.inputPlaceholder : es.inputPlaceholder}
          />
          <Input
            className="rounded col-10"
            type="text"
            id="nombre"
            name="nombre"
            placeholder={language === "en" ? en.inputPlaceholder : es.inputPlaceholder}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {aiSuggestion ? (
            <AiSuggestion
              aiSuggestion={aiSuggestion}
              setAiSuggestion={setAiSuggestion}
              aiStreamSuggestion={aiStreamSuggestion}
              setAiStreamSuggestion={setAiStreamSuggestion}
              handleUseAiSuggestion={handleUseAiSuggestion}
              language={language}
              es={es}
              en={en}
            />
          ) : (
            <Textarea
              className="rounded"
              name="mensaje"
              id="mensaje"
              cols={30}
              rows={5}
              placeholder={language === "en" ? en.contactTextArea : es.contactTextArea}
              value={msg}
              onChange={(e) => {
                setMsg(e.target.value);
                const enableAi = e.target.value.length > 3 && e.target.value.length < 5;
                if (enableAi && name) {
                  getAiFormSuggestion(language === "es" ? es.prompt.textArea : en.prompt.textArea);
                }
              }}
              disabled={name ? false : true}
            />
          )}
        </div>

        {!aiSuggestion && (
          <div className="d-flex justify-content-evenly mt-1">
            <PrimaryButton
              classname={"btn-dark"}
              type="submit"
              disabled={!msg || !name}
            >
              {language === "en" ? en.formSubmit : es.formSubmit}
            </PrimaryButton>
            <PrimaryButton
              classname={"btn-dark"}
              onClick={onClose}
            >
              {language === "en" ? en.formClose : es.formClose}
            </PrimaryButton>
          </div>
        )}
      </Form>
    </>
  );
}

ContactMe.propTypes = {
  setRenderForm: propTypes.func,
};
