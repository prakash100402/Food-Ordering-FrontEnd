import Contactcards from "./Contactcards";
const Contact = () => {
  const hello = "sonu";
  return (
    <div className="Contact">
      <h1 className="h1">Contact Us</h1>
      <Contactcards msg={hello}/>
    </div>
  );
};

export default Contact;
