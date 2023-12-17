import React, { useState } from "react";

export default function App({ order, onDrag, children, onDragStart, onDragOver, onDragEnd }) {
  return (
    <div
      id={order}
      style={{
        borderRadius: 8,
        display: "flex",
        // padding: 16,
        // backgroundColor: onDrag == order ? "rgba(196, 43, 28,.5)" : "teal",
        minHeight: "32%",
        width: "100%",
      }}
      draggable="true"
      onDragStart={onDragStart}
      onDragEnter={onDragOver}
      onDragEnd={() => onDragEnd(null)}
    >
      {order}- {children}
    </div>
  );
}
