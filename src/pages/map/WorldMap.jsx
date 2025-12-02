import MainLayout from "../../layouts/MainLayout";
import mapData from "../../data/mapData.json";
import { Link } from "react-router-dom";

export default function WorldMap() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-6">Mapa</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {mapData.regions.map((region) => (
          <Link
            key={region.id}
            to={`/map/${region.id}`}
            className="border p-6 rounded hover:bg-gray-100"
          >
            <h2 className="text-xl font-semibold">{region.name}</h2>
            <p className="opacity-70 text-sm">{region.description}</p>
          </Link>
        ))}
      </div>
    </MainLayout>
  );
}
