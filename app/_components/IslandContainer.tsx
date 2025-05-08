export default function IslandContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const defaultClassName =
    "items-center px-6 py-4 bg-white rounded-full shadow-sm";
  const classNames = className
    ? `${defaultClassName} ${className}`
    : defaultClassName;

  return <div className={classNames}>{children}</div>;
}
