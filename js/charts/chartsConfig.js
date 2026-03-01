import { registerPlugins } from "./plugins.js";

export function initChartDefaults(){
  registerPlugins();

  Chart.defaults.color = "rgba(255,255,255,0.72)";
  Chart.defaults.borderColor = "rgba(255,255,255,0.08)";
  Chart.defaults.font.family = "Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif";
  Chart.defaults.plugins.legend.display = false;

  Chart.defaults.plugins.tooltip.backgroundColor = "rgba(6,8,14,0.92)";
  Chart.defaults.plugins.tooltip.borderColor = "rgba(255,255,255,0.12)";
  Chart.defaults.plugins.tooltip.borderWidth = 1;
  Chart.defaults.plugins.tooltip.titleColor = "rgba(255,255,255,0.92)";
  Chart.defaults.plugins.tooltip.bodyColor = "rgba(255,255,255,0.78)";
}