const CHANGE_THEME = "CHANGE_THEME";

const initState = {
  theme: "light",
};

interface IThemeAction {
  type: string;
}

export const themeReducer = (state = initState, action: IThemeAction) => {
  switch (action.type) {
    case CHANGE_THEME:
      return { theme: state.theme === "light" ? "dark" : "light" };
    default:
      return state;
  }
};
