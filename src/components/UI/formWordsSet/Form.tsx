import Input from "../Input";
import { useRef, useState } from "react";
import Style from "./Form.module.scss";
import Button from "../Button";
import NewWord from "./NewWord";
import Modal from "../modal/Modal";
const Form = () => {
  const [words, setWords] = useState<string[]>([]);
  const [showModal, setShowModal] = useState(false);
  const categoryRef = useRef<HTMLInputElement>();
  const questionRef = useRef<HTMLInputElement>();
  const wordRef = useRef<HTMLInputElement>();

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
  const saveWordsSetHandler = () => {
    console.log("xd");
  };
  const wordsForDisplay = words.map((wordElement) => (
    <NewWord key={wordElement}>{wordElement}</NewWord>
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
      <div className={Style.inputsContainer}>
        <Input
          label="Question"
          ref={questionRef}
          input={{
            type: "string",
            id: "question",
            required: true,
            placeholder: "question...",
            minLength: 5,
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
            minLength: 5,
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
            minLength: 5,
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
