const languageReducerState = {
    language: "English"
}

export default (state = languageReducerState , action ) => {
    switch(action.type) {
        case "CHANGE_LANGUAGE":
            return {
                language: action.language
            }
        default:
            return state
    }
}