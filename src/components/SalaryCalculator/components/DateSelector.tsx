import React, { useState } from "react";

const DateSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Dátum kiválasztása</button>
      {isOpen && (
        <div>
          <input type="date" />
          <button onClick={() => setIsOpen(false)}>Kiválaszt</button>
        </div>
      )}
    </div>
  );
};
