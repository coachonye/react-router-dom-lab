// src/components/LetterForm/LetterForm.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LetterForm = ({ mailboxes, addLetter }) => {
  const [mailboxId, setMailboxId] = useState(mailboxes.length > 0 ? mailboxes[0]._id : "");
  const [recipient, setRecipient] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!recipient || !message) return;

    addLetter(mailboxId, recipient, message);
    navigate(`/mailboxes/${mailboxId}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>New Letter</h2>
      <label>Select a Mailbox:</label>
      <select value={mailboxId} onChange={(e) => setMailboxId(Number(e.target.value))}>
        {mailboxes.map((box) => (
          <option key={box._id} value={box._id}>
            Mailbox {box._id}
          </option>
        ))}
      </select>
      <label>Recipient:</label>
      <input
        type="text"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        required
      />
      <label>Message:</label>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <button type="submit">Send Letter</button>
    </form>
  );
};

export default LetterForm;