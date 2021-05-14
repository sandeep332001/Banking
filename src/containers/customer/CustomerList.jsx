import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import classes from "./customerList.module.scss";
const CustomerList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users", {
      headers: {
        "content-type": "Application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setUsers(res);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className={classes.CustomerList}>
      <table className={classes.tablelist}>
        <tr>
          <td className={classes.id}>ID</td>
          <td>Name</td>
          <td>Email</td>
          <td>Amount</td>
          <td>Operation</td>
        </tr>

        {users.map((user, id) => (
          <tr key={id}>
            <td>{id + 1}</td>
            <td className={classes.name}>{user.name}</td>
            <td className={classes.email}>{user.email}</td>
            <td className={classes.amount}>{user.currentBalence}</td>
            <td className={classes.money}>
              <button>
                <Link to={`/customer/${user._id}`} className={classes.send}>
                  Select
                </Link>
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default CustomerList;
