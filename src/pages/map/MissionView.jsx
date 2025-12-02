import { useParams } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import mapData from "../../data/mapData.json";

export default function MissionView() {
  const { regionId, missionId } = useParams();
  const region = mapData.regions.find((r) => r.id === regionId);
  const mission = region.missions.find((m) => m.id === missionId);

  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-3">{mission.title}</h1>
      <p className="opacity-80 mb-6">{mission.description}</p>

      <div className="p-4 border rounded">
        <p className="mb-2">Dificultad: {mission.difficulty}</p>
        <p className="mb-2">XP: {mission.xp}</p>
        <p>Objetivo: {mission.goal}</p>
      </div>
    </MainLayout>
  );
}
