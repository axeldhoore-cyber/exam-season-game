import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale);

export default function LevelBarChart({ levels }) {
  const data = {
    labels: levels.map((l) => l.label),
    datasets: [
      {
        label: "Nivel",
        data: levels.map((l) => l.value),
        backgroundColor: "rgba(153,102,255,0.6)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="w-full h-64">
      <Bar data={data} options={options} />
    </div>
  );
}
