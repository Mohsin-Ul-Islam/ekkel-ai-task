import { useState } from "react";
import DataBus from "../../DataBus";

const Divider = () => {
  const [value, setValue] = useState(6);

  DataBus.onData((data) => {
    setValue(Math.round(value / data));
  });

  return (
    <div>
      <span>Divider: {value}</span>
    </div>
  );
};

export default Divider;
