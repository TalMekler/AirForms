import { Stack } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { he } from "date-fns/locale/he";
import SingleDatePicker from "./SingleDatePicker/SingleDatePicker";

type Props = {
  fromDate: Date | null;
  toDate: Date | null;
  onFromDateChange: (value: Date | null) => void;
  onToDateChange: (value: Date | null) => void;
};

const DateRangeFilter = ({ fromDate, toDate, onFromDateChange, onToDateChange }: Props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={he}>
      <Stack direction="row" spacing={2} dir="rtl">
        <SingleDatePicker label="מתאריך" value={fromDate} onChange={onFromDateChange} maxDate={new Date()} />
        <SingleDatePicker label="עד" value={toDate} onChange={onToDateChange} minDate={fromDate ?? undefined} />
      </Stack>
    </LocalizationProvider>
  );
};

export default DateRangeFilter;
