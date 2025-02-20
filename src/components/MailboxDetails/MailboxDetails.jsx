// src/components/MailboxDetails/MailboxDetails.jsx
import { useParams } from "react-router-dom";

const MailboxDetails = ({ mailboxes, letters }) => {
  const { mailboxId } = useParams();
  const selectedBox = mailboxes.find((box) => box._id === Number(mailboxId));
  const selectedLetters = letters.filter((letter) => letter.mailboxId === Number(mailboxId));

  return (
    <div>
      {selectedBox ? (
        <>
          <h2>Mailbox {selectedBox._id}</h2>
          <p><strong>Boxholder:</strong> {selectedBox.boxOwner}</p>
          <p><strong>Box Size:</strong> {selectedBox.boxSize}</p>
          
          <h3>Letters</h3>
          {selectedLetters.length > 0 ? (
            selectedLetters.map((letter, index) => (
              <div key={index} className="mail-box">
                <p><strong>Dear {letter.recipient},</strong></p>
                <p>{letter.message}</p>
              </div>
            ))
          ) : (
            <p>No letters found.</p>
          )}
        </>
      ) : (
        <h2>Mailbox Not Found!</h2>
      )}
    </div>
  );
};

export default MailboxDetails;