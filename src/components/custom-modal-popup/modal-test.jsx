import { useState } from "react";
import Modal from "./modal";
import "./modal.css";

export default function Modaltest() {
  const [showModalPopup, setShowModalTopup] = useState(false);

  function handleToggleModaPopup() {
    setShowModalTopup(!showModalPopup);
  }

  function onClose() {
    setShowModalTopup(false);
  }

  return (
    <div>
      <button onClick={handleToggleModaPopup}>Open Modal Popup</button>
      {showModalPopup && (
        <Modal
          header={<h1>Customized Header</h1>}
          footer={<h1>Customized footer</h1>}
          id={"custom-id"}
          onClose={onClose}
          body={<div> Customized body </div>}
        />
      )}
    </div>
  );
}
