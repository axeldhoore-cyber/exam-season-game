// File: src/components/Counter/Counter.jsx
import useCounter from "./useCounter";
import CounterControls from "./CounterControls";

export default function Counter() {
  const { count, togglePause } = useCounter(0);

  return (
    <div className="flex flex-col gap-4 p-4 bg-neutral-900 text-white rounded-xl">
      <div className="text-4xl font-bold text-center">{count}</div>
      <CounterControls onPauseToggle={togglePause} />
    </div>
  );
}
