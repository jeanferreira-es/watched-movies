import colors from '../../styles/colors';

const INITIAL_STATE = {
    darkMode: false,
    theme: {
        backgroundColor: colors.white,
        cardColor: colors.white,
        textColor: colors.black,
        subTextColor: colors.black50,
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