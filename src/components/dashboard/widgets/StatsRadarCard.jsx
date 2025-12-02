import { StatsRadar } from "../../Graficas";

export default function StatsRadarCard({ stats }) {
  return (
    <div className="p-6 bg-white dark:bg-neutral-900 rounded-2xl shadow">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">
        Distribución de Atributos
      </h2>

      <StatsRadar stats={stats} />
    </div>
  );
}
