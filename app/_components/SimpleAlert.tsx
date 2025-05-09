export default function SimpleAlert({
  message,
  className,
}: {
  message: string;
  className?: string;
}) {
  const classNames = `${className} text-zinc-600 text-sm`;

  return <span className={classNames}>{message}</span>;
}
