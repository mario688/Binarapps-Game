import Input from "../Input";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import Style from "./Form.module.scss";
import Button from "../Button";
import NewWord from "./NewWord";
import Modal from "../modal/Modal";
import useRequest from "../../../hook/use-http";
import Spinner from "../spinner/Spinner";
const Form = () => {
  const [words, setWords] = useState<string[]>([]);
  const [goodWords, setGoodWords] = useState<string[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [wordIsAdded, setWordIsAdded] = useState(false);
  const [trySave, setTrySave] = useState(false);
  const [isInputHasContent, setIsInputHasContent] = useState(false);
  const categoryRef = useRef<HTMLInputElement>();
  const questionRef = useRef<HTMLInputElement>();
  const wordRef = useRef<HTMLInputElement>();
  const { isLoading, error, sendRequest } = useRequest();
  const navigation = useNavigate();
  const addWordHandler = () => {
    setTrySave(false);
    inputsValidation();
    const word: string = wordRef.current!.value!.trim();
    if (!word) {
      return;
    }
    if (words.includes(word)) {
      setWordIsAdded(true);
      setShowModal(true);
      return;
    } else {
      setWordIsAdded(false);
    }
    setWords((prev) => [...prev, word]);
  };

  const addGoodWordsHandler = (goodWord: any) => {
    setTrySave(false);
    if (goodWords.includes(goodWord)) {
      const arrayWithDeletedElement = goodWords.filter((el) => el !== goodWord);
      setGoodWords(arrayWithDeletedElement);
      return;
    }
    setGoodWords((prev) => [...prev, goodWord]);
  };

  const inputsValidation = () => {
    setTrySave(false);
    const question = questionRef!.current!.value.trim();
    const category = categoryRef!.current!.value.trim();
    const word = wordRef!.current!.value.trim();
    if (question.length > 0 && category.length > 0 && word.length > 0) {
      setIsInputHasContent(true);
    } else {
      setShowModal(true);
      setIsInputHasContent(false);
      return;
    }
    return {
      question,
      category,
    };
  };
  const saveWordsSetHandler = (e: Event) => {
    inputsValidation();
    const question = questionRef!.current!.value.trim();
    const category = categoryRef!.current!.value.trim();
    setTrySave(true);

    e.preventDefault();

    if (error) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }

    if (!goodWords.length) {
      setShowModal(true);
      return;
    }

    sendRequest(
      "https://sturdy-dragon-299320-default-rtdb.firebaseio.com/wordslist.json",
      "POST",
      {
        question,
        all_words: words,
        category,
        good_words: goodWords,
      }
    );
    if (!error) {
      setShowModal(true);
    }
  };

  const wordsForDisplay = words.map((wordElement) => (
    <NewWord onClickFunction={addGoodWordsHandler} key={wordElement}>
      {wordElement}
    </NewWord>
  ));

  const goHomeHandler = () => {
    navigation("/");
  };
  return (
    <form className={Style.form}>
      {!error &&
        !isLoading &&
        trySave &&
        isInputHasContent &&
        !wordIsAdded &&
        showModal &&
        goodWords.length > 0 && (
          <Modal
            onClickHandler={() => {
              setShowModal((prev) => !prev);
              goHomeHandler();
            }}
            title="INFO"
            message={"the collection has been added :) !"}
          />
        )}
      {error && showModal && (
        <Modal
          onClickHandler={() => {
            setShowModal((prev) => !prev);
          }}
          title="ERROR"
          message={"Someting went wrong! :("}
        />
      )}
      {showModal && wordIsAdded && (
        <Modal
          onClickHandler={() => {
            setShowModal((prev) => !prev);
          }}
          title="INFO"
          message={"This word is already in set"}
        />
      )}
      {!isInputHasContent && showModal && (
        <Modal
          onClickHandler={() => {
            setShowModal((prev) => !prev);
          }}
          title="INFO"
          message={"Please insert question, category and word"}
        />
      )}
      {!goodWords.length && showModal && isInputHasContent && !wordIsAdded && (
        <Modal
          onClickHandler={() => {
            setShowModal((prev) => !prev);
          }}
          title="INFO"
          message={"Question has to at least one correct word"}
        />
      )}
      <div className={Style.inputsContainer}>
        <Input
          label="Question"
          ref={questionRef}
          input={{
            type: "string",
            id: "question",
            required: true,
            placeholder: "question...",
            minLength: 2,
          }}
        />
        <Input
          label="Category"
          ref={categoryRef}
          input={{
            type: "string",
            id: "category",
            required: true,
            placeholder: "category...",
            minLength: 2,
          }}
        />

        <Input
          label="word"
          ref={wordRef}
          input={{
            type: "string",
            id: "word",
            required: true,
            placeholder: "new word...",
            minLength: 3,
          }}
        />
        <div onClick={addWordHandler} className={Style.addButton}></div>
      </div>
      <div className={Style.info}>
        Click on added word to select/unselect correct question
      </div>
      <div className={Style.newWordsContainer}>
        {isLoading && !error && <Spinner />}
        {wordsForDisplay}
      </div>
      <Button onClickHandler={saveWordsSetHandler}>Save set</Button>
    </form>
  );
};
export default Form;
