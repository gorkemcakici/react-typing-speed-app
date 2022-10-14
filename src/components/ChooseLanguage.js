import { useEffect, useState, useRef } from "react";
import { Switch } from "@headlessui/react";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "store";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ChooseLanguage = () => {
  const isInitial = useRef(true);
  const language = useSelector((state) => state.language);

  const dispatch = useDispatch();
  useEffect(() => {
    if (isInitial.current) {
      isInitial.current = false;
    } else {
      localStorage.setItem('language',language)
    }
  }, [language, dispatch]);
  return (
    <div className="flex justify-center items-center mb-5 gap-x-2">
      <img
        src="https://cdn-icons-png.flaticon.com/512/5111/5111548.png"
        alt=""
        width={40}
      />

      <Switch
        checked={language === "turkish" ? false : true}
        onChange={() =>
          dispatch(setLanguage(language === "turkish" ? "english" : "turkish"))
        }
        className={classNames(
          language === "english" ? "bg-secondary" : "bg-gray-200",
          "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none"
        )}
      >
        <span
          aria-hidden="true"
          className={classNames(
            language === "english" ? "translate-x-5" : "translate-x-0",
            "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
          )}
        />
      </Switch>
      <img
        src="https://cdn-icons-png.flaticon.com/512/323/323310.png"
        alt=""
        width={40}
      />
    </div>
  );
};

export default ChooseLanguage;
