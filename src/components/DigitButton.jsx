import React from "react";

export default function DigitButton({ addDigit, digit }) {
  return <button onClick={() => addDigit(digit)}>{digit}</button>;
}
