export default async function GlobalButton({
  title,
  onClick,
  className,
}: {
  title: string;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`
        bg-[#E31E25]
        text-white
        px-8
        py-3
        rounded-[10px]
        text-[18px]
        hover:bg-red-700
        transition
        ${className ? className : ""}
      `}
    >
      {title}
    </button>
  );
}
