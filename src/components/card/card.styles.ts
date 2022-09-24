import globalStyles from "../../utils/styles/style-vars";

const cardStyle = {
  cell: {
    height: "92px",
  },
  user: {
    display: "flex",
    alignItems: "center",
    gap: "24px",
  },
  avatar: {
    height: "44px",
    width: "44px",

    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(52,54,161,1) 100%)",
  },
  text: {
    fontWeight: "600",
    letterSpacing: "0.2px",
  },
  priority: {
    display: "flex",
    alignItems: "center",

    height: "24px",
    width: "min-content",

    margin: "auto",
    padding: "5px 12px",

    borderRadius: "100px",

    color: globalStyles.vars.whiteColor,
    textTransform: "uppercase",
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "0.5px",
  },
  priorityhigh: {
    backgroundColor: globalStyles.vars.red,
  },
  prioritylow: {
    backgroundColor: globalStyles.vars.yellow,
  },
  prioritynormal: {
    backgroundColor: globalStyles.vars.green,
  },
};

export default cardStyle;
