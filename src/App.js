import React from "react";
import TextField from "@material-ui/core/TextField";
import { DateRangePicker, LocalizationProvider } from "@material-ui/pickers";
import DateFnsUtils from "@material-ui/pickers/adapter/date-fns"; // choose your lib
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  delimiter: {
    marginLeft: 20,
    marginRight: 20
  }
});

const CustomDatePicker = () => {
  const [selectedDate, setSelectedDate] = React.useState([null, null]);
  console.log(selectedDate);
  const classes = useStyles();
  return (
    <LocalizationProvider dateAdapter={DateFnsUtils}>
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
