import { useState } from "react";
import DataBus from "../../DataBus";

const Adder = () => {
  const [value, setValue] = useState(0);

  DataBus.onData((data) => {
    setValue(value + data);
  });

  return (
    <div>
      <span>Adder: {value}</span>
    </div>
  );
};

export default Adder;
