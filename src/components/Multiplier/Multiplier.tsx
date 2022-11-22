import { useState } from "react";
import DataBus from "../../DataBus";

const Multiplier = () => {
  const [value, setValue] = useState(-5);

  DataBus.onData((data) => {
    setValue(value * data);
  });

  return (
    <div>
      <span>Multiplier: {value}</span>
    </div>
  );
};

export default Multiplier;
