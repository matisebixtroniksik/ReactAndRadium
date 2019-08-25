import Radium from "radium";
import config from "./config-styles";

const pulse = Radium.keyframes(
  {
    "0%": { transform: "scale3d(1,1,1)" },
    "15%": { transform: "scale3d(1.05,1.05,1.05)" },
    "100%": { transform: "scale3d(1,1,1)" }
  },
  "Nav"
);

const btn = {
  flex: 1,
  height: config.imageHeight,
  padding: 20,
  fontSize: 50,
  background: "transparent",
  color: "#fff",
  textShadow: "1px 1px 3px rgba(0,0,0,0.6)",
  border: "none",
  outline: 0,
  curosr: "pointer",
  userSelect: "none",
  ":hover": {
    transition: "all 1s",
    color: "#8c9ea3",
    animation: "placeholder 1s infinite",
    animationName: pulse
  }
};
const hidden = {
  visibility: "hidden"
};
const prev = {
  ...btn,
  textAlign: "left"
};

const next = {
  ...btn,
  textAlign: "right"
};

export default {
  root: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    display: "flex"
  },
  prev,
  prevHidden: {
    ...prev,
    ...hidden
  },
  next,
  nextHidden: {
    ...next,
    ...hidden
  }
};
