import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./App.css";

function Enquiry() {
  const rName = useRef();
  const rPhone = useRef();
  const rCollege = useRef();
  const rQuery = useRef();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [college, setCollege] = useState("");
  const [query, setQuery] = useState("");
  const [msg, setMsg] = useState("");

  const hName = (event) => {
    setName(event.target.value);
  };

  const hPhone = (event) => {
    setPhone(event.target.value);
  };

  const hCollege = (event) => {
    setCollege(event.target.value);
  };

  const hQuery = (event) => {
    setQuery(event.target.value);
  };

  const sm = (event) => {
    event.preventDefault();

    if (name === "") {
      alert("Please enter your name");
      rName.current.focus();
      return;
    }

    if (phone === "") {
      alert("Please enter your phone number");
      rPhone.current.focus();
      return;
    }

    if (college === "") {
      alert("Please enter your college name");
      rCollege.current.focus();
      return;
    }

    if (query === "") {
      alert("Please enter your query");
      rQuery.current.focus();
      return;
    }

    let data = { name, college, phone, query };
    emailjs
      .send("service_hx0voiv", "template_qf123iv", data, "hNtAss1MeUKC0tntL")
      .then((res) => {
        setMsg("Thanks for the query. We will get back to you.");
        setName("");
        setCollege("");
        setPhone("");
        setQuery("");
        rName.current.focus();
      })
      .catch((err) => {
        setMsg("There was an issue: " + err);
      });
  };

  return (
    <div className="enquiry-container">
      <h1 className="enquiry-title">Fill the Form</h1>
      <form onSubmit={sm} className="enquiry-form">
        <div className="form-group">
          <input
            type="text"
            ref={rName}
            onChange={hName}
            placeholder="Enter your name"
            value={name}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            ref={rPhone}
            onChange={hPhone}
            placeholder="Enter your phone number"
            value={phone}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            ref={rCollege}
            onChange={hCollege}
            placeholder="Enter your college name"
            value={college}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Enter your query"
            ref={rQuery}
            onChange={hQuery}
            value={query}
            className="form-textarea"
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
      {msg && <div className="message">{msg}</div>}
    </div>
  );
}

export default Enquiry;
