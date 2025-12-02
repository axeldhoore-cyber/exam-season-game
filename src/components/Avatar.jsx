// File: src/components/Avatar.jsx
import { useState } from "react";

export default function Avatar() {
  const [avatarUrl, setAvatarUrl] = useState("");

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setAvatarUrl(url);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="w-28 h-28 rounded-full overflow-hidden bg-gray-300">
        {avatarUrl ? (
          <img src={avatarUrl} alt="avatar" className="w-full h-full object-cover" />
        ) : null}
      </div>

      <label className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded">
        Subir Avatar
        <input type="file" accept="image/*" className="hidden" onChange={handleUpload} />
      </label>
    </div>
  );
}
