import { Button } from "@mui/material";
import { useState } from "react";

export default function Input() {
  const [inputValue, setInputValue] = useState("Enter your email here:");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async () => {
    const url = "/api/v1/scan";

    const response = await fetch(url, {
      method: "POST",
      email: inputValue,
    });
    setInputValue("Enter your email here:");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vh",
        backgroundColor: "#E1E1E2",
      }}
    >
      <input
        value={inputValue}
        onChange={(e) => handleChange(e)}
        type="email"
        style={{
          marginRight: "5px",
          height: "38px",
          borderRadius: 5,
          backgroundColor: "#E1E1E2",
          fontSize: "18px",
          lineHeight: "5px",
          fontFamily: "Vesper Libre",
          fontWeight: 400,
          fontStyle: "normal",
        }}
      />
      <Button
        variant="outlined"
        size="large"
        color="black"
        fontFamily
        onClick={() => handleSubmit()}
      >
        Submit
      </Button>
    </div>
  );
}
