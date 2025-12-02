import LevelDisplay from "./LevelDisplay";
import XPBar from "./XPBar";
import StatsRow from "../Stats/StatsRow";

export default function CorePanel() {
  return (
    <div className="w-full p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl flex flex-col gap-6">
      <LevelDisplay />
      <XPBar />
      <StatsRow />
    </div>
  );
}
