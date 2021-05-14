import React from 'react';

export default function InputButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
    >
      추가
    </button>
  );
}
