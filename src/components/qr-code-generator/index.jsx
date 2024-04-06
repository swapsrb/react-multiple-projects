import { useState } from "react";
import QRCode from "react-qr-code";

export default function QrcodeGnerator() {
  const [input, setInput] = useState("");
  const [qrCode, setQrCode] = useState("");

  function handleOnClick() {
    setQrCode(input);
    setInput("");
  }

  return (
    <div>
      <h1>QR code generator</h1>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="EnterNameHere"
          name="qr-code"
          value={input}
        />
        <button
          disabled={input && input.trim !== "" ? false : true}
          onClick={handleOnClick}
        >
          Generate
        </button>
      </div>
      <div>
        <QRCode id="qr-code-vlaue" value={qrCode} size={400} bgColor="#fef"/>
      </div>
    </div>
  );
}
