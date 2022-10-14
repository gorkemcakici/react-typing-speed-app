import { useDispatch } from "react-redux";
import {
  setWordInput,
  setWords,
  setIsTimeOver,
  setIsStarted,
  setSpaceCount,
  setWordsBySpaceCount,
  addCorrect,
  addInCorrect,
  setKeyCount,
} from "store";
import RestartIcon from "assets/icons/restart.png";
const Restart = () => {
  const dispatch = useDispatch();

  const restart = () => {
    dispatch(setWordInput(""));
    dispatch(setWords());
    dispatch(setIsTimeOver(false));
    dispatch(setIsStarted(false));
    dispatch(setSpaceCount());
    dispatch(setWordsBySpaceCount("active"));
    dispatch(addCorrect());
    dispatch(addInCorrect());
    dispatch(setKeyCount());
  };
  return (
    <div
      className="bg-secondary p-2 rounded-md w-12 h-12 flex items-center justify-center cursor-pointer"
      onClick={restart}
    >
      <span className="text-white">
        <img src={RestartIcon} alt="" />
      </span>
    </div>
  );
};

export default Restart;
