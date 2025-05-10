import { useState, useEffect } from "react";

function Example() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(toDos));
  }, [toDos]);

  const onChange = (event) => {
    setToDo(event.currentTarget.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") return;
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };

  const handleDelete = (deleteIndex) => {
    setToDos((currentArray) =>
      currentArray.filter((_, index) => index !== deleteIndex)
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>My To Dos ({toDos.length})</h1>
      <form
        onSubmit={onSubmit}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Enter a To-Do Content"
          style={{ width: "80%", height: "2rem" }}
        />
        <button style={{ height: "2rem" }}>Add To Do</button>
      </form>
      <hr style={{ marginTop: "2rem", width: "95%" }} />
      <ul style={{ width: "100%" }}>
        {toDos.map((item, index) => (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "lightgray",
              marginTop: "1rem",
              paddingTop: "1rem",
              paddingBottom: "1rem",
              paddingRight: "1rem",
              borderRadius: "1rem",
              paddingLeft: "1rem",
              width: "95%",
            }}
            key={index}
          >
            <span>{item}</span>
            <button onClick={() => handleDelete(index)}>X</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Example;
