const Button = ({ colour, onClickHandler }) => {
  return (
    <>
      <button style={{ backgroundColor: colour }} onClick={onClickHandler}>
        toggle
      </button>
    </>
  );
};

export default Button;
