function Button({ text, onClick, type = "button" }) {
  return (
    <button type={type} onClick={onClick} className="custom-btn">
      {text}
    </button>
  );
}

export default Button;