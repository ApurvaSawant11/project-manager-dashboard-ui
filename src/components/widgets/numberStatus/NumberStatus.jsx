const NumberStatus = ({ item }) => {
  const { icon, num, title } = item;
  return (
    <div
      className={`card number-widget p-1 ${
        title === "Delayed" ? "bg-light-red text-white" : ""
      }`}
    >
      <span
        className={`number-status-icon ${
          title === "Delayed" ? "text-red" : "text-teal"
        }`}
      >
        {icon}
      </span>
      <div className="flex-column-center">
        <span className="fw-800 text-super-lg number-font mt-1p5">{num}</span>
        <p className="mt-0p5">{title}</p>
      </div>
    </div>
  );
};

export { NumberStatus };
