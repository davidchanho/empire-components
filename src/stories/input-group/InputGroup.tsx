import React from "react";
import { InputGroupProps } from "../../types/types";

export const InputGroup = ({ id, type, label, input }: InputGroupProps) => (
  <div>
    <label
      htmlFor={id}
      className="block text-sm font-medium text-gray-700 capitalize"
    >
      {label}
    </label>

    <div className="mt-1">
      <input
        type="text"
        name={type}
        id={id}
        {...input}
        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        placeholder="you@example.com"
      />
    </div>
  </div>
);
