import colors from '../../styles/colors';

const INITIAL_STATE = {
    darkMode: false,
    theme: {
        backgroundColor: colors.white,
        cardColor: colors.white,
        textColor: colors.black,
        subTextColor: colors.black50,
        inputTextColor: colors.black,
        opaqueColor: colors.black25,
        opaqueText: colors.black25,
        iconColor: colors.dracula,
        barColor: colors.black25,
        statusBarColor: colors.white,
        statusBarStyle: 'dark-content'
    }
}

export default function themeReducer(state = INITIAL_STATE, action) {
    if(action.type == 'darkMode'){
        return {
            darkMode: action.darkMode,
            theme: {
                backgroundColor: action.darkMode ? colors.black : colors.white,
                cardColor: action.darkMode ? colors.dracula : colors.white,
                textColor: action.darkMode ? colors.white : colors.black,
                inputTextColor: action.darkMode ? colors.black : colors.white,
                opaqueColor: action.darkMode ? colors.white25 : colors.black25,
                opaqueText: action.darkMode ? colors.white25 : colors.black25, 
                subTextColor: action.darkMode ? colors.white50 : colors.black50,
                iconColor: action.darkMode ? colors.white50 : colors.dracula,
                barColor: action.darkMode ? colors.white25 : colors.black25,
                statusBarColor: action.darkMode ? colors.black : colors.white,
                statusBarStyle: action.darkMode ? 'light-content' : 'dark-content'
            }
        };
    }

    return state;
}