import React, { useState } from "react";
import { Stack, Button, Collapse, IconButton } from "@mui/material";
import FilterCategories from "../FilterCategories/FilterCategories";
import AdvancedFilterBar from "./AdvancedFilterBar";
import { filterCategories } from "../FilterCategories/utils/filterCategories";
import CloseIcon from "@mui/icons-material/Close";

const FilterPanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Stack spacing={2} mt={4} width="100%">
      {!isOpen && (
        <Button variant="outlined" onClick={handleToggle} sx={{ width: "110px", fontSize: "15px", fontWeight: 400 }}>
          הצג סינון
        </Button>
      )}

      <Collapse in={isOpen} timeout={75} unmountOnExit>
        <IconButton onClick={handleClose} sx={{ color: "#001C55" }}>
          <CloseIcon sx={{ width: "110px", fontSize: "15px", fontWeight: 400 }} />
        </IconButton>
        <FilterCategories filterCategories={filterCategories} />
        <AdvancedFilterBar />
      </Collapse>
    </Stack>
  );
};

export default FilterPanel;
