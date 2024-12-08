import { useEffect, useState } from "react";
import Item from "../components/Item";

export default function List() {
  const [vulnerabilities, setVulnerabilities] = useState([]);

  const getData = async () => {
    const response = await fetch(
      "http://127.0.0.1:5000/api/v1/vulnerabilities"
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    setVulnerabilities(data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {vulnerabilities?.map((el) => (
        <Item
          key={el.id}
          date={el.date}
          link={el.link}
          title={el.title}
          description={el.description}
          id={el.id}
        />
      ))}
    </div>
  );
}
