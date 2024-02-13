type Props = {
  title: string;
  onClick: () => void;
};

function Button({ title, onClick }: Props) {
  return (
    <button onClick={onClick} className="button">
      {title}
    </button>
  );
}

export default Button;
