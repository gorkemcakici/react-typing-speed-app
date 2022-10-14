import AppTitle from "components/AppTitle";
import Words from "components/Words";
import WordInput from "components/WordInput";
import Timer from "components/Timer";
import Restart from "components/Restart";
import Result from "components/Result";
import Footer from "components/Footer";
import ChooseLanguage from "components/ChooseLanguage";
import { useSelector } from "react-redux";
function App() {

    const isTimeOver = useSelector((state) => state.isTimeOver);
  return (
    <div className="flex flex-col gap-y-5 justify-start items-center h-[calc(100vh-50px)]">
      <AppTitle />
      <ChooseLanguage />
      <Words />
      <div className="flex justify-center items-center gap-x-2 bg-gray-300 w-full xl:w-1/2 rounded-md p-2">
        <WordInput />
        <Timer />
        <Restart />
      </div>
      {isTimeOver && <Result />}

      <Footer />
    </div>
  );
}

export default App;
