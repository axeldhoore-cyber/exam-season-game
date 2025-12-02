export default function DashboardCard({ title, children, className = "" }) {
  return (
    <div
      className={`p-6 bg-white dark:bg-neutral-900 rounded-2xl shadow flex flex-col gap-4 ${className}`}
    >
      {title && (
        <h2 className="text-2xl font-bold dark:text-white">{title}</h2>
      )}
      {children}
    </div>
  );
}
