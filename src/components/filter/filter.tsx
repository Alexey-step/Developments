import React, { useState } from "react";

import "./filter.scss";

interface Props {
  onFilter: (value: string) => void;
}

const Filter: React.FC<Props> = ({ onFilter }) => {
  const [value, setValue] = useState("");

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
    if (evt.target.value.length > 3) {
      onFilter(evt.target.value);
    } else {
      onFilter("");
    }
  };

  return (
    <div className="filter">
      <label className="filter__label" htmlFor="filter">
        Filter
      </label>
      <input
        onChange={handleChange}
        className="filter__field"
        type="text"
        id="filter"
        value={value}
      />
    </div>
  );
};

export default Filter;
