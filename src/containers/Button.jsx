function Button() {
  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <button onClick={handleClick}>
      Нажми
    </button>
  );
}

export default Button;
