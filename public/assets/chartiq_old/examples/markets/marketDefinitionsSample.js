//
// Sample market definitions file
//
import { CIQ } from "../../js/chartiq.js";
CIQ.Market = CIQ.Market || function () { };
let isMuhurat = false
let valuedate = new Date("11/12/2023");
let today = new Date()
if (valuedate.getFullYear() == today.getFullYear() && valuedate.getMonth() == today.getMonth() && valuedate.getDate() == today.getDate()) {
	isMuhurat = true
}

export { CIQ };
