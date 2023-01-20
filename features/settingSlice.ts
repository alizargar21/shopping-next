import { Setting } from './../libs/setting';
import { createSlice } from "@reduxjs/toolkit"


const initialState: Setting = {
      isOpen: false
}

const settingSlice = createSlice({
      name: "setting",
      initialState,
      reducers: {
            openSetting(state) {
                  state.isOpen = true;
            },
            closeSetting(state) {
                  state.isOpen = false;
            },
            toggleSetting(state) {
                  state.isOpen = !state.isOpen;
            },
      }
})

export default settingSlice.reducer

export const settingActions = settingSlice.actions;
