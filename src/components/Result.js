import { useSelector } from "react-redux";
const Result = () => {
  const correct = useSelector((state) => state.correct);
  const incorrect = useSelector((state) => state.incorrect);
  const keyCount = useSelector((state) => state.keyCount);
  const language = useSelector((state) => state.language);

  return (
    <div className="bg-gray-100 p-3 rounded-lg flex flex-col justify-center gap-y-2 w-full xl:w-1/2">
      <h6 className="text-center text-3xl">
        {language === "turkish" ? "Sonuç" : "Result"}
      </h6>
      <span className="text-2xl font-semibold">
        {language === "turkish" ? "Tuş Vuruşu: " : "Key Count: "} {keyCount}
      </span>
      <span className="text-2xl text-green-600 font-semibold">
        {language === "turkish" ? "Doğru: " : "Correct: "} {correct}
      </span>
      <span className="text-2xl text-red-600 font-semibold">
        {language === "turkish" ? "Yanlış: " : "Incorrect: "} {incorrect}
      </span>
      <span className="text-2xl font-semibold">
        {language === "turkish" ? "Doğruluk: " : "Accuracy: "}
        {((correct / (correct + incorrect) || 0) * 100).toFixed(2)}%
      </span>
    </div>
  );
};

export default Result;
