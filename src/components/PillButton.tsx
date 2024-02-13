import { twMerge } from "tailwind-merge";

type Props = {
  title?: string;
  onClick: () => void;
  disabled?: boolean;
  Icon?: React.ReactNode;
  cutomClassName?: string;
};

function PillButton({ title, onClick, disabled, Icon, cutomClassName }: Props) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={twMerge(
        "uppercase tracking-widest disabled:bg-gray-300 bg-green-600 text-white mr-auto px-4 py-2 rounded-md shadow-md",
        cutomClassName
      )}
    >
      {title && <h4>{title}</h4>}
      {Icon}
    </button>
  );
}

export default PillButton;
