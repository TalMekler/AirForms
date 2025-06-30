import { Autocomplete, TextField } from "@mui/material";

type CreatorFilterProps = {
  selectedCreator: string;
  creators: string[];
  onCreatorChange: (value: string) => void;
};

const CreatorFilter = ({ selectedCreator, creators, onCreatorChange }: CreatorFilterProps) => {
  return (
    <Autocomplete
      options={creators}
      value={selectedCreator}
      onChange={(___, newValue) => {
        onCreatorChange(newValue || "");
      }}
      renderInput={(params) => <TextField {...params} dir="rtl" label="שם היוצר" variant="outlined" />}
      sx={{
        width: "514px",
        direction: "rtl",
        "& input": {
          textAlign: "rtl",
        },
      }}
    />
  );
};

export default CreatorFilter;
