export function registerSpider() {
  let spiderToggle: boolean = false;
  // @ts-ignore
  PluginAPI.require("player");
  // @ts-ignore
  PluginAPI.addEventListener("update", () => {
    // @ts-ignore
    if (PluginAPI.player.isCollidedHorizontally && spiderToggle == true) {
      // @ts-ignore
      PluginAPI.player.motionY = 0.2;
      // @ts-ignore
      PluginAPI.player.reload();
    }
  });
}
