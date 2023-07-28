/* eslint-disable react/prop-types */
import React from "react";
import classes from "./Range.module.css";

const Range = ({ minPages, maxPages, onChange, currentValue, label }) => {
  const [rangeValue, setRangeValue] = React.useState(currentValue);

  const onChangeRangeHandler = (event) => {
    setRangeValue(event.target.value);
    if (onChange && typeof onChange === "function") {
      onChange(event);
    }
  };

  return (
    <div className={classes.wrapper}>
      <label htmlFor="rangeInput">{label}</label>
      <div className={classes["range-wrapper"]}>
        <input
          className={classes["input-range"]}
          type="range"
          id="rangeInput"
          name="rangeInput"
          min={minPages}
          max={maxPages}
          value={rangeValue}
          onChange={onChangeRangeHandler}
        />
        <span>{rangeValue}</span>
      </div>
    </div>
  );
};

export default Range;
