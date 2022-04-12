import Input from "../Input";
import { useRef, useState } from "react";
import Style from "./Form.module.scss";
import Button from "../Button";
import NewWord from "./NewWord";
import Modal from "../modal/Modal";
import useRequest from "../../../hook/use-http";
const Form = () => {
  const [words, setWords] = useState<string[]>([]);
  const [goodWords, setGoodWords] = useState<string[]>([]);
  const [showModal, setShowModal] = useState(false);
  const categoryRef = useRef<HTMLInputElement>();
  const questionRef = useRef<HTMLInputElement>();
  const wordRef = useRef<HTMLInputElement>();
  const { isLoading, sendRequest, dataResp } = useRequest();

  const addWordHandler = () => {
    const word: string = wordRef.current!.value!.trim();
    if (!word) {
      return;
    }
    if (words.includes(word)) {
      setShowModal(true);
      return;
    }
    setWords((prev) => [...prev, word]);
  };
  const addGoodWordsHandler = (goodWord: any) => {
    if (goodWords.includes(goodWord)) {
      const arrayWithDeletedElement = goodWords.filter((el) => el !== goodWord);
      setGoodWords(arrayWithDeletedElement);
      return;
    }
    setGoodWords((prev) => [...prev, goodWord]);
  };

  const saveWordsSetHandler = () => {
    const question = questionRef!.current!.value;
    const category = categoryRef!.current!.value;
    if (!goodWords.length) {
      console.log("select one word at least");
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
  };

  const wordsForDisplay = words.map((wordElement) => (
    <NewWord onClickFunction={addGoodWordsHandler} key={wordElement}>
      {wordElement}
    </NewWord>
  ));
  return (
    <form className={Style.form}>
      {showModal && (
        <Modal
          onClickHandler={() => {
            setShowModal((prev) => !prev);
          }}
          title="INFO"
          message={"This word is already in set"}
        />
      )}
      {!goodWords.length && showModal && (
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

      <div className={Style.newWordsContainer}>{wordsForDisplay}</div>
      <Button onClickHandler={saveWordsSetHandler}>Save set</Button>
    </form>
  );
};
export default Form;
