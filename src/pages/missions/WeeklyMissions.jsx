import MainLayout from "../../layouts/MainLayout";
import WeeklyMissionsList from "../../components/missions/WeeklyMissionsList";

export default function WeeklyMissions() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-6">Misiones Semanales</h1>
      <WeeklyMissionsList />
    </MainLayout>
  );
}
