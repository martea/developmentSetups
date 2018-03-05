import consoleWriteService from "./services/consoleWriteService";
import airportService from "./services/airportService";
const arr = [1, 2, 3];
const iAmJavascriptES6 = () => console.log(...arr);
window.iAmJavascriptES6 = iAmJavascriptES6;

consoleWriteService.write("test");

airportService.list();