import globalStyles from "../../utils/styles/style-vars";

const LogInstyles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    margin: 0,
    padding: 0,

    height: "100vh",

    backgroundColor: `${globalStyles.vars.backgroundColor}`,
    color: `${globalStyles.vars.greyColor}`,
  },

  box: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    padding: "40px 32px",
    margin: "auto",

    minWidth: "320px",
    width: "380px",

    border: "1px solid black",
    borderRadius: "8px",

    backgroundColor: `${globalStyles.vars.secondaryBackgroundColor}`,
  },

  subtitle: {
    fontSize: "19px",
    fontWeight: "700",
    letterSpacing: "0.4px",
  },
};

export default LogInstyles;
