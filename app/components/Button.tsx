import { twMerge } from "tailwind-merge";

export default function Button({
  text,
  className,
  onClick,
}: {
  text: string;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      className={twMerge(
        "py-4 text-white  cursor-pointer hover:scale-95 transition duration-500 w-full rounded-full text-center bg-[#013941]",
        className
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
