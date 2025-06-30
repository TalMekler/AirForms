import React, { useState } from "react";
import DateRangeFilter from "./DateRangeFilter";
import CreatorFilter from "./CreatorFilter";
import { Stack, Button } from "@mui/material";
import { mockUsers } from "../../mockData/users";

const AdvancedFilterBar: React.FC = () => {
  const [fromDate, setFromDate] = useState<Date | null>(new Date());
  const [toDate, setToDate] = useState<Date | null>(new Date());
  const [creator, setCreator] = useState<string>("");

  const creators = mockUsers;

  const handleFilter = () => {
    console.log("Filtering with:", { fromDate, toDate, creator });
  };

  return (
    <Stack spacing={2} alignItems="center" mt={2}>
      <Stack direction="row" spacing={2} width="100%" justifyContent="space-between">
        <CreatorFilter selectedCreator={creator} creators={creators} onCreatorChange={setCreator} />
        <DateRangeFilter fromDate={fromDate} toDate={toDate} onFromDateChange={setFromDate} onToDateChange={setToDate} />
      </Stack>
      <Button
        variant="contained"
        onClick={handleFilter}
        sx={{
          backgroundColor: "#0E6BA8",
          fontSize: "24px",
          width: "111px",
          padding: "10px 40px 10px 40px",
          "&:hover": {
            backgroundColor: "#085C91",
          },
        }}
      >
        סנן
      </Button>
    </Stack>
  );
};

export default AdvancedFilterBar;
