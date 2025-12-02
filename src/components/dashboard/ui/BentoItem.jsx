export default function BentoItem({ size = "normal", children }) {
  const sizes = {
    normal: "col-span-1",
    wide: "md:col-span-2",
    tall: "row-span-2",
    big: "md:col-span-2 md:row-span-2",
  };

  return (
    <div
      className={`p-6 bg-white dark:bg-neutral-900 rounded-2xl shadow ${sizes[size]}`}
    >
      {children}
    </div>
  );
}
