import { configureStore } from "@reduxjs/toolkit"
import { persistStore } from "redux-persist"
import { persistedReducer } from "./rootReducer"

const middleware: any = []

if (process.env.NODE_ENV === "development") {
	// middleware.push()
}

export const store = configureStore({
	reducer: persistedReducer,
	middleware: [...middleware],
})
export const persistedStore = persistStore(store)
