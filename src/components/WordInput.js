import { useSelector, useDispatch } from "react-redux";
import {
  setWordInput,
  setSpaceCount,
  removeWordsBySpaceCount,
  setKeyCount,
  addCorrect,
  addInCorrect,
} from "store";
const WordInput = () => {
  const words = useSelector((state) => state.words);
  const wordInput = useSelector((state) => state.wordInput);
  const isTimeOver = useSelector((state) => state.isTimeOver);
  const spaceCount = useSelector((state) => state.spaceCount);
  const language = useSelector((state) => state.language);
  const dispatch = useDispatch();

  const handleSpace = (e) => {
    dispatch(setKeyCount(1));
    if (e.keyCode === 32) {
      dispatch(setSpaceCount(1));
      dispatch(setWordInput(""));
      
      if (
        (language === "turkish"
          ? words[spaceCount].turkish
          : words[spaceCount].english) === wordInput.toLowerCase().trim()
      ) {
        dispatch(removeWordsBySpaceCount("true"));
        dispatch(addCorrect(1));
      } else {
        dispatch(removeWordsBySpaceCount("false"));
        dispatch(addInCorrect(1));
      }
    }
  };
  return (
    <div className="w-full">
      <input
        type="text"
        id="first_name"
        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none disabled:bg-gray-200"
        disabled={isTimeOver}
        value={wordInput}
        onChange={(e) => dispatch(setWordInput(e.target.value))}
        onKeyDown={handleSpace}
        autoComplete="off"
      />
    </div>
  );
};

export default WordInput;
