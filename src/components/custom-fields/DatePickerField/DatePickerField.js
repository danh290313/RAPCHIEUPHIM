import { TextField } from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import React from "react";
import styles from "./DatePickerField.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function convert1(str) {
  var date = new Date(str),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
  return [day, mnth, date.getFullYear()].join("/");
}
function convert2(str) {
  var date = new Date(str),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
  return dayjs([date.getFullYear(), mnth, day].join("-"));
}

function DatePickerField(props) {
  const { field, form, disabled, options, readOnly, label, inputFormat } =
    props;
  const { name, value } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  // console.log(showError);
  const [valueDate, setValue] = React.useState(convert2(value));
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        label={label}
        inputFormat={inputFormat}
        value={valueDate}
        onClose={() => {
          // console.log(form);
        }}
        onChange={(newValue) => {
          setValue(newValue);
          const newDate = convert1(newValue);
          form.setFieldValue(name, newDate);
        }}
        sx={{
          "& .MuiSvgIcon-root": {
            fontSize: "2.1rem !important",
          },
          "& .css-154xyx0-MuiInputBase-root-MuiOutlinedInput-root": {
            fontSize: "1.6rem !important",
          },
          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            border: showError
              ? "1px solid red"
              : "var(--cool-border) !important",
          },
          "& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root": {
            fontSize: "inherit !important",
            color: showError ? "red !important" : "#333",
          },
          "& .css-qzbt6i-MuiButtonBase-root-MuiIconButton-root-MuiAutocomplete-popupIndicator":
            {
              fontSize: "inherit",
            },

          "& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
            color: "var(--primary)",
          },
          "& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-hovered": {
            color: "var(--primary) !important",
          },
          "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: showError
              ? "1px solid red"
              : "2px solid var(--primary) !important",
          },
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            InputLabelProps={{
              shrink: true,
              style: {
                // fontSize: "1.4rem !important",
                // color: showError ? "yellow !important" : null,
              },
            }}
            onBlur={() => {
              form.setTouched({ ...form.touched, [name]: true });
            }}
            sx={{
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                border: showError
                  ? "1px solid red"
                  : "var(--cool-border) !important",
              },
              "& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root": {
                fontSize: "inherit !important",
                color: showError ? "red !important" : "#333",
              },
              "& .css-qzbt6i-MuiButtonBase-root-MuiIconButton-root-MuiAutocomplete-popupIndicator":
                {
                  fontSize: "inherit",
                },

              "& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused":
                {
                  color: "var(--primary)",
                },
              "& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-hovered":
                {
                  color: "var(--primary) !important",
                },
              "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: showError
                  ? "1px solid red"
                  : "2px solid var(--primary) !important",
              },
            }}
          />
        )}
      />
      {showError && <span className={cx("error")}>{errors[name]}</span>}
    </LocalizationProvider>
  );
}

export default DatePickerField;
