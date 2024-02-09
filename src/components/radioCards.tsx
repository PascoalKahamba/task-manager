import { useState } from "react";
import Radio from "@mui/material/Radio";
import useFetch, { AnnotationsProps } from "../hooks/useFetch";

interface RadioCardsProps {
  title: string;
}

export default function RadioCards({ title }: RadioCardsProps) {
  const [selectedValue, setSelectedValue] = useState("a");
  const [notes] = useFetch<AnnotationsProps>(
    "annotations/65b90cd58b42eba19a5a984e",
    "delete"
  );

  console.log(notes);

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
      <label className="text-sm">{title}</label>
    </div>
  );
}
