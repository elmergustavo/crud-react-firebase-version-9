import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const AddTask = () => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "tasks"), {
      title,
      createdAt: new Date(),
      completed: false,
    });
    setTitle("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h3>Agregar Tareas</h3>
      <div className="input_container">
        <input
          type="text"
          placeholder="Enter para agregar tarea"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="btn_container">
        <button>Agregar</button>
      </div>
    </form>
  );
};

export default AddTask;
