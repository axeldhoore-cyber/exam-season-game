import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler } from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler);

export default function StatsRadar({ stats }) {
  const data = {
    labels: ["Focus", "Stamina", "Flow", "Discipline", "Willpower"],
    datasets: [
      {
        label: "Atributos",
        data: [
          stats.focus,
          stats.stamina,
          stats.flow,
          stats.discipline,
          stats.willpower,
        ],
        backgroundColor: "rgba(255,99,132,0.3)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="w-full h-64">
      <Radar data={data} options={options} />
    </div>
  );
}
