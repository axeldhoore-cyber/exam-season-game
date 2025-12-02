import AchievementItem from "./AchievementItem";

export default function AchievementList({ achievements }) {
  return (
    <div className="grid gap-4">
      {achievements.map((a) => (
        <AchievementItem key={a.id} a={a} />
      ))}
    </div>
  );
}
