import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function XPLineChart({ dataPoints }) {
  const data = {
    labels: dataPoints.map((d) => d.label),
    datasets: [
      {
        label: "XP",
        data: dataPoints.map((d) => d.value),
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2,
        pointRadius: 4,
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="w-full h-64">
      <Line data={data} options={options} />
    </div>
  );
}
