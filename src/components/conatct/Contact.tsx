import FormContact from "./FormContact";
import TextContact from "./TextContact";

const Contact = () => {
  return (
    <div>
      <div className="container mx-auto d-flex gap-4 margin flex-column flex-lg-row">
        <TextContact />
        <FormContact />
      </div>
    </div>
  );
}

export default Contact