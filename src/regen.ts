import { displayToChat } from "./chat"
export function registerRegen() {
  let regenToggle: boolean = false;
  // @ts-ignore
  PluginAPI.require("network");
  function regenTick() {
    // @ts-ignore
    if (!PluginAPI.player.capabilities.isCreativeMode && PluginAPI.player.getHealth() < 20 && PluginAPI.player.getHealth() !== 0 && PluginAPI.player.onGround) {
      for (let i = 0; i < 500; i++) {
        // @ts-ignore
        PluginAPI.network.sendPacketPlayer({isOnGround: PluginAPI.player.onGround});
      }
    }
  }
  // @ts-ignore
  PluginAPI.addEventListener("sendchatmessage", (ev) => {
    // @ts-ignore
    if (ev.message.toLowerCase().trim() === ".regen" && !regenToggle) {
      // @ts-ignore
      ev.preventDefault = true;
      // @ts-ignore
      PluginAPI.addEventListener("update", regenTick);
      displayToChat("§6§l[REBORNHACKEDCLIENT] §r§eEnabled regen.")
      regenToggle = !regenToggle
    }
    // @ts-ignore
    if (ev.message.toLowerCase().trim() === ".regen" && !regenToggle) {
      // @ts-ignore
      ev.preventDefault = true;
      // @ts-ignore
      PluginAPI.removeEventListener("update", regenTick);
      // @ts-ignore
      displayToChat("§6§l[REBORNHACKEDCLIENT] §r§eDisabled regen.")
      regenToggle = !regenToggle
    }
    
  }
}
