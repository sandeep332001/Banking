import { Fragment, useState } from "react";
import classes from "./contact.module.scss";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const contactDetails = [
      {
        name: name,
        email:email,
        message: message,
      },
    ];
    setTimeout(function () {
      window.location.href = "/";
    }, 3000);

    console.log(contactDetails);
  };

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <Fragment>
      <div className={classes.contact}>
        <h1>Contact Us</h1>
        <h4>We will contact you soon Please fill following form</h4>

        <form id="contact-form" onSubmit={(e) => handleSubmit(e)} method="POST">
          <div className={`${classes["form-group"]}`}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className={classes.input}
              id="name"
              // value={this.state.name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={`${classes["form-group"]}`}>
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className={classes.input}
              id="email"
              aria-describedby="emailHelp"
              // value={this.state.email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={`${classes["form-group"]}`}>
            <label htmlFor="message">Message</label>
            <textarea
              className={classes.textarea}
              rows="5"
              id="message"
              // value={this.state.message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type="submit" className={`${classes["submit-btn"]}`}>
            Submit
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default Contact;
