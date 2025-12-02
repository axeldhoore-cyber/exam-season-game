import MainLayout from "../../layouts/MainLayout";
import { useNavigate } from "react-router-dom";

export default function Challenges() {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-6">Retos</h1>

      <div className="grid gap-6 max-w-md">
        <button
          onClick={() => navigate("/challenges/pvp")}
          className="border p-6 rounded hover:bg-gray-100"
        >
          PvP
        </button>

        <button
          onClick={() => navigate("/challenges/bossfights")}
          className="border p-6 rounded hover:bg-gray-100"
        >
          Boss Fights
        </button>
      </div>
    </MainLayout>
  );
}
