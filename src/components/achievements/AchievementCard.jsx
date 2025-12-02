// File: src/components/Achievements/AchievementCard.jsx
import { Check } from "lucide-react";

export default function AchievementCard({ achievement, unlocked }) {
  return (
    <div className={`p-4 rounded-xl border flex items-center gap-3 ${unlocked ? "border-green-500 bg-green-50" : "border-gray-300 bg-white"}`}>
      <div className={`w-10 h-10 flex items-center justify-center rounded-full ${unlocked ? "bg-green-500 text-white" : "bg-gray-200 text-gray-500"}`}>
        {unlocked ? <Check size={20} /> : achievement.icon}
      </div>
      <div>
        <p className="font-semibold">{achievement.title}</p>
        <p className="text-sm text-gray-500">{achievement.description}</p>
      </div>
    </div>
  );
}
