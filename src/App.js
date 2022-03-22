import React from "react";
import TextField from "@material-ui/core/TextField";
import { DateRangePicker, LocalizationProvider } from "@material-ui/pickers";
import DateFnsUtils from "@material-ui/pickers/adapter/date-fns"; // choose your lib
import { makeStyles } from "@material-ui/core";
import moment from "moment";

const useStyles = makeStyles({
  delimiter: {
    marginLeft: 20,
    marginRight: 20
  }
});

const formats = {
  normalDate: "dd/MM/yyy",
  keyboardDate: "dd/MM/yyy"
};

const firstDayOfPreviousMonth = moment().subtract(1, "months").startOf("month");
const lastDayOfNextMonth = moment().add(1, "months").endOf("month");

const CustomDatePicker = () => {
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = React.useState([
    firstDayOfPreviousMonth.toDate(),
    lastDayOfNextMonth.toDate()
  ]);

  console.log(selectedDate);
  return (
    <LocalizationProvider dateAdapter={DateFnsUtils} dateFormats={formats}>
      <DateRangePicker
        startText=""
        endText=""
        value={selectedDate}
        onChange={(newValue) => setSelectedDate(newValue)}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField ref={startProps.inputRef} {...startProps} />
            <div className={classes.delimiter}>-</div>
            <TextField ref={endProps.inputRef} {...endProps} />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  );
};

export default CustomDatePicker;
