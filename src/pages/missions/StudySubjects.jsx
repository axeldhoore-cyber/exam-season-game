import MainLayout from "../../layouts/MainLayout";
import SubjectsList from "../../components/missions/SubjectsList";

export default function StudySubjects() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-6">Asignaturas</h1>
      <SubjectsList />
    </MainLayout>
  );
}
