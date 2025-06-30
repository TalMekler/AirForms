import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { CalendarMonth } from "@mui/icons-material";

type Props = {
  label: string;
  value: Date | null;
  onChange: (value: Date | null) => void;
  minDate?: Date;
  maxDate?: Date;
};

const SingleDatePicker = ({ label, value, onChange, minDate, maxDate }: Props) => (
  <DatePicker
    label={label}
    value={value}
    onChange={onChange}
    minDate={minDate}
    maxDate={maxDate}
    format="dd.MM.yyyy"
    slots={{ openPickerIcon: CalendarMonth }}
    slotProps={{
      openPickerButton: {
        sx: {
          color: "#001C55",
        },
      },
      textField: {
        fullWidth: true,
        InputLabelProps: { shrink: true },
        sx: {
          backgroundColor: "#FFFFFF",
          minWidth: 150,
          direction: "rtl",
          input: {
            textAlign: "center",
            color: "#001C55",
            fontSize: "20px",
            fontFamily: "Rubik",
          },
        },
      },
    }}
  />
);

export default SingleDatePicker;
