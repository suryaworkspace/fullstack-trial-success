import React from "react";
import "./index.css";

export default function Print(props) {
  const { info } = props;
  const { id, name, role } = info;
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{role}</td>
    </tr>
  );
}
