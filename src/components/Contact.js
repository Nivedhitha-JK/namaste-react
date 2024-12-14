import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    console.log("useEffect called");
    const timer = setInterval(() => {
      console.log("Namaste React");
    }, 2000);

    return () => {
      console.log("useEffect return");
      clearInterval(timer);
    };
  }, []);
  console.log("Render called");

  return (
    <div>
      <h1>Contact page</h1>
    </div>
  );
};

export default Contact;
