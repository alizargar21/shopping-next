import { configureStore } from "@reduxjs/toolkit"
import settingReducer from "./settingSlice"
const store = configureStore({
      reducer : {
            setting : settingReducer
      },
      middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
})

export default store