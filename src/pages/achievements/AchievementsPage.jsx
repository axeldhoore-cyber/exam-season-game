import MainLayout from "../../layouts/MainLayout";
import { useAchievementsContext } from "../../context/AchievementsContext";
import AchievementList from "../../components/achievements/AchievementList";

export default function AchievementsPage() {
  const { achievements } = useAchievementsContext();

  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-6">Logros</h1>

      <AchievementList achievements={achievements} />
    </MainLayout>
  );
}
