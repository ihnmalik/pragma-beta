import LanguageReducer from "../reducer/LanguageReducer"
import { createStore } from "redux"

export default () => {
    const store = createStore(LanguageReducer)

    return store
}