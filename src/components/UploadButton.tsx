interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
}

const UploadButton = ({ onClick, disabled }: Props) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={disabled ? "disabled" : "rainbownButton"}
    >
      Upload Screenshot
    </button>
  );
};

export default UploadButton;
