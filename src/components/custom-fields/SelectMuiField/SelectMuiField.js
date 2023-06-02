import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { FormGroup, Label } from "reactstrap";
import styles from "./SelectMuiField.module.scss";
import classNames from "classnames/bind";
import { Autocomplete, styled, TextField } from "@mui/material";
const cx = classNames.bind(styles);
SelectMuiField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
};

SelectMuiField.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
  disabled: false,
};
function SelectMuiField(props) {
  const {
    field,
    form,
    label,
    disabled,
    options,
    readOnly,
    id,
    value,
    nooptionstext,
  } = props;
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name]; // có message lỗi và touched=true thì trả ra true
  const handleChangeAutoComplete = (e, newvalue) => {
    form.setFieldValue(name, newvalue ? newvalue[id] : "");
  };
  const handleBlurTextField = (e) => {
    form.setTouched({ ...form.touched, [name]: true });
    const findingOption = options.find(
      (option) => option[value] === e.target.value
    );
    const idOption = findingOption
      ? findingOption[id]
      : field.value === ""
      ? ""
      : field.value;
    form.setFieldValue(name, idOption);
  };
  return (
    <>
      <Autocomplete
        disablePortal
        disabled={disabled}
        getOptionLabel={(option) => option[value]}
        isOptionEqualToValue={(option, value) => option[id] === value[id]}
        id="combo-box-demo"
        options={options}
        fullWidth
        readOnly={readOnly}
        noOptionsText={nooptionstext}
        onChange={handleChangeAutoComplete}
        ListboxProps={{
          sx: {
            // fontSize: "1.6rem",
          },
        }}
        sx={{
          "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
            // height: "58px",
            border: showError
              ? "1px solid red !important"
              : "var(--cool-border) !important",
          },
          "& .css-qzbt6i-MuiButtonBase-root-MuiIconButton-root-MuiAutocomplete-popupIndicator":
            {
              // fontSize: "inherit",
            },
          "& .css-154xyx0-MuiInputBase-root-MuiOutlinedInput-root": {
            // fontSize: "inherit",
          },
          "& .css-i4bv87-MuiSvgIcon-root": {
            //icon close
            // fontSize: "2.4rem",
          },
          "& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root": {
            // fontSize: "inherit",
          },
          "& .css-ptiqhd-MuiSvgIcon-root ": {
            //icon clear
            // fontSize: "2.0rem",
          },
          "& .css-1glvl0p-MuiButtonBase-root-MuiIconButton-root-MuiAutocomplete-clearIndicator":
            {
              marginRight: "1rem",
            },
          "& .MuiOutlinedInput-root:hover fieldset": {
            borderColor: !showError && "#333 !important",
          },
        }}
        renderInput={(params) => (
          <TextField
            {...field} //this is need to be put before onblur and onchange props
            {...params}
            onBlur={handleBlurTextField}
            onChange={() => {}} //ghi đè onchange của field
            label={label}
            sx={{
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                border: showError ? "1px solid red" : "1px solid #333",
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
            InputLabelProps={{
              shrink: true,
              style: {
                // fontSize: "1.4rem",
                color: showError && "red",
              },
            }}
          />
        )}
      />
      {showError && <span className={cx("error")}>{errors[name]}</span>}
      {/* <ErrorMessage
        name={name}
        render={(msg) => <span className={cx("error")}>{msg}</span>}
      /> */}
    </>
  );
}

export default SelectMuiField;
