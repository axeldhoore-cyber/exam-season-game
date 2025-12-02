import MainLayout from "../../layouts/MainLayout";

export default function StatsGraphs() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-6">Gráficas de Progreso</h1>

      <div className="grid gap-6">
        <div className="border rounded p-6">Gráfica XP</div>
        <div className="border rounded p-6">Gráfica Tiempo Estudio</div>
        <div className="border rounded p-6">Gráfica Focus</div>
      </div>
    </MainLayout>
  );
}
