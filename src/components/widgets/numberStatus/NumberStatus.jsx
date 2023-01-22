const NumberStatus = ({ item }) => {
  const { icon, num, title } = item;
  return (
    <div
      className={`card number-widget p-1 ${
        title === "Delayed" ? "bg-light-red text-white" : ""
      }`}
    >
      <div className={`${title === "Delayed" ? "text-red" : "text-teal"}`}>
        {icon}
      </div>
      <div className="flex-column-center">
        <span className="fw-800 text-super-lg number-font">{num}</span>
        <p className="my-0p5">{title}</p>
      </div>
    </div>
  );
};

export { NumberStatus };
