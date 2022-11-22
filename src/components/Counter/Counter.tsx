import { useState } from "react";
import DataBus from "../../DataBus";

const Counter = () => {
  const [value, setValue] = useState(6);

  const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number.parseInt(evt.target.value));
    DataBus.publish(Number.parseInt(evt.target.value));
  };

  return (
    <div className="counter">
      <label htmlFor="value">Value</label>
      <input id="value" value={value} type="number" onChange={onChange} />
    </div>
  );
};

export default Counter;
