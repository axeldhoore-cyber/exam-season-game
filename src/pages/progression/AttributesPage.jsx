import MainLayout from "../../layouts/MainLayout";
import useAttributes from "../../hooks/useAttributes";

export default function AttributesPage() {
  const { stats, increase } = useAttributes();

  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-6">Atributos</h1>

      <div className="grid gap-4 max-w-md">
        {Object.keys(stats).map((s) => (
          <div key={s} className="border p-4 rounded flex justify-between">
            <span className="capitalize font-semibold">{s}</span>
            <div className="flex items-center gap-4">
              <span>{stats[s]}</span>
              <button
                className="px-3 py-1 bg-green-600 text-white rounded"
                onClick={() => increase(s)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}
