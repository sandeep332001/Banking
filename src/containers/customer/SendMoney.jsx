import React, { useState, useEffect } from "react";
import Popup from "./Popup";
import classes from "./sendMoney.module.scss";

const SendMoney = (props) => {
  const [users, setUsers] = useState([]);

  const [receiver, setReceiver] = useState({
    receiverName: "",
    receiverEmail: "",
  });
  const [amount, setAmount] = useState(0);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    fetch("/api/users", {
      headers: {
        "content-type": "Application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setUsers(res);
      })
      .catch((e) => console.log(e));
  }, []);

  const sender = users.filter((user) => user._id === props.match.params.id);
  const receivers = users.filter((user) => user._id !== props.match.params.id);

  function changeOrg(e) {
    const receiverr = receivers.filter(
      (receiver) => receiver.name === e.target.value
    );
    setReceiver({
      ...receiver,
      receiverName: receiverr[0].name,
      receiverEmail: receiverr[0].email,
    });
  }
  const inputHandler = (event) => {
    setAmount(event.target.value);
  };

  // const togglePop = () => {
  //   setCompleted((completed) => !completed);
  // };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const details = {
      sender: sender[0].name,
      receiver: receiver.receiverName,
      amount: amount,
    };
    return fetch("/api/transfer", {
      method: "POST",
      headers: {
        // "content-type": "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify(details),
    })
      .then((res) => {
        res.json();
      })
      .then((res) => {
        console.log(res);
        // togglePop();
        // setTimeout(function () {
        //   window.location = "/";
        // }, 3000);
      })
      .catch((e) => console.log(e));
  };

  return sender.length > 0 && receivers.length > 0 ? (
    <div className={classes.sendMoney}>
      <form className={classes.receiver} onSubmit={(e) => onSubmitHandler(e)}>
        <label htmlFor="name">Sender Name :</label>
        {/* <span id="name">{sender[0].name}</span> */}
        <input type="text" value={sender[0].name} />
        <label htmlFor="cars">Receiver :</label>
        <select name="receiver" id="name" onChange={changeOrg}>
          <option value="" disabled selected>
            Select your option
          </option>
          {receivers.map((name, index) => (
            <option value={name.name} key={index}>
              {name.name}
            </option>
          ))}
        </select>
        <label htmlFor="email">Email :</label>
        <input type="email" id="email" defaultValue={receiver.receiverEmail} />
        <label htmlFor="amount">Amount</label>
        <input type="Number" onChange={inputHandler} />

        <button type="submit">Send Money</button>

        {/* {completed ? <Popup toggle={togglePop} /> : null} */}
      </form>
    </div>
  ) : null;
};

export default SendMoney;
