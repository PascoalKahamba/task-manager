import { useState } from "react";
import Radio from "@mui/material/Radio";

interface RadioCardsProps {
  title: string;
}

export default function RadioCards({ title }: RadioCardsProps) {
  const [selectedValue, setSelectedValue] = useState("a");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <Radio
        checked={selectedValue === "a"}
        onChange={handleChange}
        value="a"
        id="radioElem"
        name="radio-buttons"
        inputProps={{ "aria-label": "A" }}
      />
      <label>{title}</label>
    </div>
  );
}
