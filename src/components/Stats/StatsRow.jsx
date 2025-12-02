import { useStatsContext } from "../../context/StatsContext";
import StatsMiniCard from "./StatsMiniCard";

export default function StatsRow() {
  const { stats } = useStatsContext();

  return (
    <div className="grid grid-cols-4 gap-3 w-full">
      <StatsMiniCard label="Focus" value={stats.Focus} />
      <StatsMiniCard label="Flow" value={stats.Flow} />
      <StatsMiniCard label="Stamina" value={stats.Stamina} />
      <StatsMiniCard label="Willpower" value={stats.Willpower} />
    </div>
  );
}
