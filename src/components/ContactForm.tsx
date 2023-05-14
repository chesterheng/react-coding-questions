import { SUBMIT_URL } from "../data/constants";

const ContactForm = () => {
  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // cast the event.target to HTMLFormElement
    const form = event.target as HTMLFormElement;

    try {
      if (form.action !== SUBMIT_URL) {
        console.log("Incorrect form action value");
        return;
      }

      if (form.method?.toLowerCase() !== "post") {
        console.log("Incorrect form method value");
        return;
      }

      const formData = new FormData(form);
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      };
      const response = await fetch(SUBMIT_URL, options);
      const data = await response.text();
      console.log(data);
    } catch (error) {
      console.log("Error submitting form!");
    }
  };
  return (
    <form onSubmit={submitForm} action={SUBMIT_URL} method="post">
      <div>
        <label htmlFor="name-input">Name:</label>
        <input id="name-input" name="name" type="text" />
      </div>
      <div>
        <label htmlFor="email-input">Email:</label>
        <input id="email-input" name="email" type="text" />
      </div>
      <div>
        <label htmlFor="message-input">Message:</label>
        <textarea name="message" id="message-input"></textarea>
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

export default ContactForm;
