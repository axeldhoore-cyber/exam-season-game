import { useModal } from "../../context/ModalContext";

export default function ModalRenderer() {
  const { modalContent } = useModal();

  if (!modalContent) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xl bg-black/40">
      {modalContent}
    </div>
  );
}
