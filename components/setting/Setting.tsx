import React from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { settingActions } from "../../features/settingSlice";
import Theme from "../theme/Theme";
import Language from "../language/Language";
import { SettingRootState } from "@/libs/setting";

const Settings = () => {
  const dispatch = useDispatch();

  const isSetting = useSelector(
    (state: SettingRootState) => state.setting.isOpen
  );
  function toggleShowSetting() {
    dispatch(settingActions.toggleSetting());
  }

  function onCloseSetting() {
    dispatch(settingActions.closeSetting());
  }

  return (
    <div className="relative z-[150] flex items-center justify-between ">
      <div onClick={toggleShowSetting}>
        <AiOutlineSetting style={{ fontSize: "1.5rem" }} />
      </div>
      {isSetting ? (
        <>
          <div
            className="-z-1 fixed inset-0 w-full h-screen bg-black/20"
            onClick={onCloseSetting}
          ></div>
          <div className="bg-divBgc-light dark:bg-divBgc-dark absolute top-8 rounded-lg px-6 py-3 shadow-md ltr:right-0 rtl:left-0 ">
            <Language />
            <hr className="my-1" />
            <Theme />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Settings;
