export function registerPlugins(){
  const centerText = {
    id: "centerText",
    afterDraw(chart, args, opts) {
      if(!opts || !opts.title) return;
      const { ctx, chartArea } = chart;
      if(!chartArea) return;

      const x = (chartArea.left + chartArea.right) / 2;
      const y = (chartArea.top + chartArea.bottom) / 2;

      ctx.save();
      ctx.textAlign = "center";
      ctx.fillStyle = "rgba(255,255,255,0.88)";
      ctx.font = "700 18px Inter";
      ctx.fillText(opts.title, x, y - 4);

      ctx.fillStyle = "rgba(255,255,255,0.58)";
      ctx.font = "600 12px Inter";
      ctx.fillText(opts.value || "", x, y + 16);
      ctx.restore();
    }
  };

  Chart.register(centerText);
}