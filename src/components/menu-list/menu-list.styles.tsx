import globalStyles from "../../utils/styles/style-vars";

export const menuListStyle = {
  borderLeft: `3px solid ${globalStyles.vars.backgroundColor}`,
  "& .MuiSvgIcon-root": {
    fill: globalStyles.vars.greyColor,
  },
  "&:hover": {
    backgroundColor: globalStyles.vars.lightBlueOpacity,
    borderColor: globalStyles.vars.lightBlue,
    color: globalStyles.vars.lightBlue,
    "& .MuiSvgIcon-root": {
      fill: globalStyles.vars.lightBlue,
    },
  },
};

export const menuListActiveStyle = {
  backgroundColor: globalStyles.vars.lightBlueOpacity,
  borderLeft: `3px solid ${globalStyles.vars.lightBlue}`,
  "& .MuiSvgIcon-root": {
    fill: globalStyles.vars.lightBlue,
  },
};

export const menuItemLink = {
  textDecoration: "none",
  width: "100%",
};
