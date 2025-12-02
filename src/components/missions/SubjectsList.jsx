import subjects from "../../data/subjects.json";

export default function SubjectsList() {
  return (
    <div className="grid gap-4">
      {subjects.map((subject) => (
        <div key={subject.id} className="border p-4 rounded">
          <h2 className="text-xl font-semibold">{subject.name}</h2>
          <p className="opacity-70 text-sm">{subject.description}</p>
        </div>
      ))}
    </div>
  );
}
