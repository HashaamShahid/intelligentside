import { initCursorGlow } from "./ui/cursorGlow.js";
import { initReveal } from "./ui/reveal.js";
import { initModal } from "./ui/modal.js";
import { initTabs } from "./ui/tabs.js";

import { initChartDefaults } from "./charts/chartsConfig.js";
import { initHeroCharts } from "./charts/heroCharts.js";
import { initDashboardCharts } from "./charts/dashboardCharts.js";
import { initCaseStudyCharts } from "./charts/caseStudyCharts.js";
import { initRoiCharts } from "./charts/roiCharts.js";

import { initKpiTicker } from "./ui/kpiTicker.js";
import { initAuditForm } from "./ui/auditForm.js";

document.getElementById("year").textContent = new Date().getFullYear();

initCursorGlow();
initReveal();
initModal();
initTabs();

initChartDefaults();
initHeroCharts();
initDashboardCharts();
initCaseStudyCharts();
initRoiCharts();

initKpiTicker();
initAuditForm();