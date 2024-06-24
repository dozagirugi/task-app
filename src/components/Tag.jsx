import "./Tag.css";
import "./TaskForm";

import React from "react";

export default function Tag(props) {
  return <button className="tag">{props.tagName}</button>;
}
