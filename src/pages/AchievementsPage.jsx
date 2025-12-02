// File: src/pages/AchievementsPage.jsx
import AchievementsList from "../components/Achievements/AchievementsList";

export default function AchievementsPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Logros</h1>
      <AchievementsList />
    </div>
  );
}
