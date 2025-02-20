// src/components/MailboxForm/MailboxForm.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MailboxForm = ({ addBox }) => {
  const [boxOwner, setBoxOwner] = useState("");
  const [boxSize, setBoxSize] = useState("Small");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (boxOwner.trim() === "") return;
    addBox(boxOwner, boxSize);
    navigate("/mailboxes");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Owner:</label>
      <input
        type="text"
        value={boxOwner}
        onChange={(e) => setBoxOwner(e.target.value)}
        required
      />
      <label>Size:</label>
      <select value={boxSize} onChange={(e) => setBoxSize(e.target.value)}>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>
      <button type="submit">Add Mailbox</button>
    </form>
  );
};

export default MailboxForm;