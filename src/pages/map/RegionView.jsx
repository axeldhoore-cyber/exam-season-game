import { useParams, Link } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import mapData from "../../data/mapData.json";

export default function RegionView() {
  const { regionId } = useParams();
  const region = mapData.regions.find((r) => r.id === regionId);

  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-6">{region.name}</h1>
      <p className="opacity-70 mb-4">{region.description}</p>

      <div className="grid grid-cols-2 gap-4">
        {region.missions.map((mission) => (
          <Link
            key={mission.id}
            to={`/map/${regionId}/${mission.id}`}
            className="border p-4 rounded hover:bg-gray-100"
          >
            <h2 className="text-lg font-semibold">{mission.title}</h2>
            <p className="text-sm opacity-70">{mission.description}</p>
          </Link>
        ))}
      </div>
    </MainLayout>
  );
}
