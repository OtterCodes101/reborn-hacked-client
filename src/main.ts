import { displayToChat } from "./chat"
import { registerSpider } from "./spider"
import { registerStep } from "./step"
import { registerRegen } from "./regen"
console.log("[REBORNHACKEDCLIENT] Loading client...")
registerSpider()
registerStep()
registerRegen()
console.log("[REBORNHACKEDCLIENT] Finished!")
