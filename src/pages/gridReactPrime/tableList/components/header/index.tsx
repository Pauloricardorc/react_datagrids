import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useContext } from "react";
import { GridContext } from "../../../contexts/gridContext";

export function Header() {
  const { newMarker } = useContext(GridContext);

  const handleChange = (event: SelectChangeEvent) => {
    newMarker(event.target.value);
  };

  return (
    <div className="flex justify-content-between">
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        label="Category"
        onChange={handleChange}
      >
        <MenuItem value={"electronics"}>electronics</MenuItem>
        <MenuItem value={"jewelery"}>jewelery</MenuItem>
      </Select>
    </div>
  );
}
