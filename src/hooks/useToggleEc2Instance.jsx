import React from "react";

export default function useToggleEc2Instance() {
  const [status, setStatus] = React.useState("");

  const toggleEC2 = async () => {
    setStatus("Enviando solicitud...");
    try {
      const res = await fetch("https://7ejgzgd7hj.execute-api.us-east-2.amazonaws.com/toggle-ec2", {
        method: "POST",
      });

      const data = await res.json();
      if (res.ok) {
        setStatus(data.message || "Operación completada.");
        console.log(data.result);
      } else {
        setStatus("Error: " + (data.error || "Algo salió mal"));
      }
    } catch (err) {
      console.error(err);
      setStatus("Error de conexión.");
    }
  };

  return {
    status,
    toggleEC2,
  };
}
