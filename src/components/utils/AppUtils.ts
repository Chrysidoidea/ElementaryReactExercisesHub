import { Location } from "react-router-dom";

export const getBackground = (location: Location) => {

    switch (location.pathname) {
      case '/greetings':
        return -90;
      case '/counter':
        return -55;
      case '/todo':
        return -25;
      case '/color-picker':
        return 5;
      case '/toggle':
        return 40;
      case '/registration':
        return 160;
      case '/temp-converter':
        return 195;
      case '/count-down':
        return 230;
      case '/quotes':
        return 265;
      case '/limited-input':
        return 300;
      default:
        return 0;

    }
  };