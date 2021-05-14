import React from "react";
import classes from "./list.module.scss";
const List = (props) => {
  return (
    <React.Fragment>
      <table className={classes.tablelist}>
        <thead>
          <tr>ID</tr>
          <tr>Name</tr>
          <tr>Email</tr>
          <tr>Amount</tr>
          <tr>Send Money</tr>
        </thead>
        <tbody>
          <tr>1</tr>
          <tr>S</tr>
          <tr>s</tr>
          <tr>sg</tr>
          <tr>sg</tr>
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default List;
