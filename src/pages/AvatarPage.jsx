// File: src/pages/AvatarPage.jsx
import Avatar from "../components/Avatar";

export default function AvatarPage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-4xl font-bold mb-10">Avatar</h1>
      <Avatar />
    </div>
  );
}
