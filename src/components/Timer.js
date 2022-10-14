import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsTimeOver, setIsStarted, setWordInput } from "store";
const Timer = () => {
  const isInitialIsStarted = useRef(true);
  const dispatch = useDispatch();

  const wordInput = useSelector((state) => state.wordInput);
  const isStarted = useSelector((state) => state.isStarted);

  const [duration, setDuration] = useState(60);

  useEffect(() => {
    let timerId;
    if (isStarted) {
      if (duration > 0) {
        timerId = setInterval(() => {
          setDuration((prev) => prev - 1);
        }, 1000);
      }
    } else {
      setDuration(60);
    }

    return function cleanup() {
      clearInterval(timerId);
    };
  }, [duration, isStarted]);

  useEffect(() => {
    if (duration === 0) {
      dispatch(setIsTimeOver(true));
      dispatch(setWordInput(""));
    }
  }, [duration, dispatch]);

  useEffect(() => {
    if (isInitialIsStarted.current) {
      isInitialIsStarted.current = false;
    } else {
      wordInput.length > 0 && !isStarted && dispatch(setIsStarted(true));
    }
  }, [wordInput, dispatch, isStarted]);
  return (
    <div className="bg-primary p-2 rounded-md w-12 h-12 flex items-center justify-center">
      <span className="text-white">{duration}</span>
    </div>
  );
};

export default Timer;
