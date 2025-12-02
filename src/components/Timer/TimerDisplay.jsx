// File: src/components/timer/TimerDisplay.jsx
import useTimer from "../../hooks/useTimer";

export default function TimerDisplay() {
  const { seconds, isRunning, start, stop, reset } = useTimer(0);

  const format = (s) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return `${h.toString().padStart(2, "0")}:${m
      .toString()
      .padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <div className="p-4 bg-neutral-900 text-white rounded-xl w-full flex flex-col items-center gap-4">
      <div className="text-4xl font-bold">{format(seconds)}</div>

      <div className="flex gap-3">
        {!isRunning && (
          <button
            onClick={start}
            className="px-4 py-2 bg-green-600 rounded-lg font-semibold"
          >
            Start
          </button>
        )}

        {isRunning && (
          <button
            onClick={stop}
            className="px-4 py-2 bg-yellow-500 rounded-lg font-semibold"
          >
            Stop
          </button>
        )}

        <button
          onClick={reset}
          className="px-4 py-2 bg-red-600 rounded-lg font-semibold"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
