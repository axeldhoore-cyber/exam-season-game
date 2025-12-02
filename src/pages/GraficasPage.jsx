import { XPLineChart, LevelBarChart, StatsRadar } from "../components/Graficas";

export default function GraficasPage() {
  const xpData = [
    { label: "Lun", value: 120 },
    { label: "Mar", value: 200 },
    { label: "Mié", value: 350 },
    { label: "Jue", value: 470 },
    { label: "Vie", value: 600 },
  ];

  const levelData = [
    { label: "Semana 1", value: 1 },
    { label: "Semana 2", value: 2 },
    { label: "Semana 3", value: 3 },
  ];

  const stats = {
    focus: 70,
    stamina: 55,
    flow: 80,
    discipline: 65,
    willpower: 90,
  };

  return (
    <div className="p-6 flex flex-col gap-10">
      <XPLineChart dataPoints={xpData} />
      <LevelBarChart levels={levelData} />
      <StatsRadar stats={stats} />
    </div>
  );
}
