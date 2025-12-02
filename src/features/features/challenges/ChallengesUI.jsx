import { useChallenges } from "./useChallenges";

export default function ChallengesUI({ userId }) {
  const { challenges, userChallenges, completeChallenge } = useChallenges(userId);

  const isCompleted = (id) =>
    userChallenges?.some((c) => c.challenge_id === id && c.completed);

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      {challenges.map((c) => (
        <div
          key={c.id}
          className="p-4 border rounded-xl bg-neutral-900 text-white flex flex-col gap-2"
        >
          <h2 className="text-xl font-bold">{c.title}</h2>
          <p className="opacity-80">{c.description}</p>
          <p className="text-sm opacity-60">XP: {c.rewardXP}</p>

          <button
            onClick={() => completeChallenge(c.id)}
            disabled={isCompleted(c.id)}
            className={`mt-2 px-4 py-2 rounded ${
              isCompleted(c.id)
                ? "bg-green-700 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isCompleted(c.id) ? "Completado" : "Completar reto"}
          </button>
        </div>
      ))}
    </div>
  );
}
