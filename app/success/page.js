"use client"; 

import { useRouter } from "next/navigation";

const PaymentSuccess = () => {
  const router = useRouter();

  const handleDoneClick = () => {
    router.push("/"); // Redirect to the home page
  };

  return (
    <div style={styles.container}>
      <h1>Payment Successful!</h1>
      <p>Thank you for your payment. Your transaction was successful.</p>
      <button style={styles.button} onClick={handleDoneClick}>
        Done
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    margin: "50px auto",
    padding: "20px",
    maxWidth: "400px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default PaymentSuccess;
