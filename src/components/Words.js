import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setWords, setWordsBySpaceCount, setSpaceCount } from "store";
import classNames from "classnames";

const Words = () => {
  const words = useSelector((state) => state.words);
  const wordCount = useSelector((state) => state.wordCount);
  const language = useSelector((state) => state.language);
  const spaceCount = useSelector((state) => state.spaceCount);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setWords());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setWordsBySpaceCount("active"));
    if (spaceCount === wordCount) {
      dispatch(setSpaceCount());
      dispatch(setWords());
    }
  }, [spaceCount, dispatch, wordCount]);

  return (
    <div className="w-full xl:w-1/2 bg-secondary p-5 rounded-lg flex gap-x-2 gap-y-1 md:gap-x-3 lg:gap-x-4 lg:gap-y-3 flex-wrap items-center justify-center">
      {words.map((word) => (
        <span
          key={word.id}
          className={classNames({
            "text-white text-base md:text-lg lg:text-xl p-1 rounded-lg": true,
            "bg-primary": word.status === "active",
            "bg-green-500": word.status === "true",
            "bg-red-500": word.status === "false",
          })}
        >
          {language === "turkish"
            ? word.turkish.toLowerCase()
            : word.english.toLowerCase()}
        </span>
      ))}
    </div>
  );
};

export default Words;
