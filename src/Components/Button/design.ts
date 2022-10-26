export const designButton = (design: string, disable?: boolean) => {
  switch (design) {
    case "grey1":
      return {
        backgroundColor: "#0B0D0D",
        borderColor: "#0B0D0D",
        textColor: "#FFFFFF",
        hoverBackgroundColor: "#212529",
      };
    case "negative":
      return {
        backgroundColor: "#DEE2E6",
        borderColor: "#DEE2E6",
        textColor: "#495057",
        hoverBackgroundColor: "#CED4DA",
      };
    case "disable":
      return {
        backgroundColor: "#CED4DA",
        borderColor: "#CED4DA",
        textColor: "#FFFFFF",
      };
    case "brand1":
      return {
        backgroundColor: disable ? "#B0A6F0" : "#4529E6",
        borderColor: disable ? "#B0A6F0" : "#4529E6",
        textColor: "#FFFFFF",
        hoverBackgroundColor: "#5126EA",
      };
    case "brandOpacity":
      return {
        backgroundColor: "#EDEAFD",
        borderColor: "#EDEAFD",
        textColor: "#4529E6",
      };
    case "light":
      return {
        backgroundColor: "#2125290",
        borderColor: "#2125290",
        textColor: "#212529",
      };
    case "outineLight":
      return {
        backgroundColor: "",
        borderColor: "#2125290",
        textColor: "#FFFFFF",
        hoverBackgroundColor: "#FFFFFF",
        hoverColor: "#212529",
      };
    case "outine1":
      return {
        backgroundColor: "#FFFFFF",
        borderColor: "#0B0D0D",
        textColor: "#0B0D0D",
      };
    case "big45":
      return {
        backgroundColor: "#212529",
        borderColor: "#212529",
        textColor: "#FFFFFF",
      };
    case "outline2":
      return {
        backgroundColor: "#FFFFFF",
        borderColor: "#ADB5BD",
        textColor: "#0B0D0D",
        hoverBackgroundColor: "#212529",
        hoverColor: "#FFFFFF",
      };
    case "outlineBrand1":
      return {
        backgroundColor: "#FFFFFF",
        borderColor: "#4529E6",
        textColor: "#4529E6",
        hoverBackgroundColor: "#EDEAFD",
      };
    case "link":
      return {
        backgroundColor: "#FFFFFF",
        borderColor: "#FFFFFF",
        textColor: "#0B0D0D",
        hoverBackgroundColor: "#F1F3F5",
      };
    case "alert":
      return {
        backgroundColor: "#FFE5E5",
        borderColor: "#FFE5E5",
        textColor: "#CD2B31",
        hoverBackgroundColor: "#FDD8D8",
      };
    case "sucess":
      return {
        backgroundColor: "#DDF3E4",
        borderColor: "#DDF3E4",
        textColor: "#18794E",
        hoverBackgroundColor: "#CCEBD7",
      };
    default:
      return {
        backgroundColor: "#0B0D0D",
        borderColor: "#0B0D0D",
        textColor: "#FFFFFF",
      };
  }
};
