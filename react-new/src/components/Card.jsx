function Card({ name, image, course, age, city, btnText }) {
  return (
    <>
      <div id="card">
        <img
          src={
            image ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyh9ZR7j2Oi5JHGSIe2mt2cgeVlwQb4mXg3kXIaPgEJQ&s=10"
          }
          alt=""
        />

        <h2>{name || "N/A"}</h2>

        <p>
         📖Course:
          {course || "N/A"}
        </p>
        <p>
         📍city:
          {city || "N/A"}
        </p>

        <p>
         📅Age:
          {age || "N/A"}
        </p>
        <button
          style={{
            width: "150px",
            background: "blue",
            color: "white",
            height: "29px",
            marginLeft: "50px",
            borderRadius: "5px",
            border: "none",
          }}
        >
          {btnText || "N/A"}
        </button>
      </div>
    </>
  );
}

export default Card;
