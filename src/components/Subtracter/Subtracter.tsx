import { useState } from "react";
import DataBus from "../../DataBus";

const Subtracter = () => {
  const [value, setValue] = useState(4);

  DataBus.onData((data) => {
    setValue(value - data);
  });

  return (
    <div>
      <span>Subtracter: {value}</span>
    </div>
  );
};

export default Subtracter;
