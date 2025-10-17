import { React, useState } from "react";

function TwoWayBinding() {
  const [message, setMessage] = useState("hello");
  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <p>You typed: {message}</p>
    </div>
  );
}

export default TwoWayBinding;
