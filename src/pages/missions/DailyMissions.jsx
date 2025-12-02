import MainLayout from "../../layouts/MainLayout";
import DailyMissionsList from "../../components/missions/DailyMissionsList";

export default function DailyMissions() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-6">Misiones Diarias</h1>
      <DailyMissionsList />
    </MainLayout>
  );
}
