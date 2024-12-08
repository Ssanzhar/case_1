import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Scan() {
  const navigate = useNavigate();

  const handleClick = async () => {
    const url = "http://127.0.0.1:5000/api/v1/scan";

    // try {
    //   const response = await fetch(url, {
    //     method: "POST",
    //   });

    //   if (response.ok) {
    //     console.log("Success!");
    //     const data = await response.json();
    //     console.log(data);
    //     navigate("/email");
    //   } else {
    //     console.error(
    //       `Request failed. Status: ${response.status}: ${response.statusText}`
    //     );
    //   }
    // } catch (error) {
    //   console.error("An error occured", error);
    // }
    navigate("/email");
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E1E1E2",
      }}
    >
      <Button
        variant="outlined"
        size="large"
        color="black"
        onClick={() => handleClick()}
      >
        Start scan
      </Button>
    </div>
  );
}
