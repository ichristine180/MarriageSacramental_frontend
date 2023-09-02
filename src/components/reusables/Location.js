import React, { useState, useEffect } from "react";
import { t } from "i18next";
import location from "../../constant/location.json";
import DropDown from "./DropDown";

const mapDataToSelects = (
  levels,
  leveltype,
  setDistricts,
  setSectors,
  setVilages,
  setCells
) => {
  switch (leveltype) {
    case "districts":
      setDistricts(levels);
      break;
    case "sectors":
      setSectors(levels);
      break;
    case "cells":
      setCells(levels);
      break;
    case "villages":
      setVilages(levels);
      break;
  }
};
const handlerLocationState = () => {
  const [districts, setDistricts] = useState();
  const [provinces, setProvinces] = useState([]);
  const [sectors, setSectors] = useState([]);
  const [cells, setCells] = useState([]);
  const [vilages, setVilages] = useState([]);
  return {
    provinces: provinces,
    districts: districts,
    sectors: sectors,
    cells: cells,
    vilages: vilages,
    setDistricts: setDistricts,
    setSectors: setSectors,
    setVilages: setVilages,
    setCells: setCells,
    setProvinces: setProvinces,
  };
};
const handleAddress = (e, setAddress) => {
  const { name, value } = e.target;
  setAddress((prevAddress) => ({
    ...prevAddress,
    [name]: value,
  }));
};
const Location = ({setAddress}) => {
  const stateObj = handlerLocationState();
  const changeHandler = (e, dataList, leveType) => {
    handleAddress(e, setAddress);
    dataList.forEach((level) => {
      if (e.target.value === level.name) {
        mapDataToSelects(
          level[`${leveType}`],
          leveType,
          stateObj.setDistricts,
          stateObj.setSectors,
          stateObj.setVilages,
          stateObj.setCells
        );
      }
    });
  };
  return (
    <LocationUI
      changeHandler={changeHandler}
      stateObj={stateObj}
      setAddress={setAddress}
    />
  );
};
const rows = (changeHandler, stateObj) => [
  [
    {
      name: t("Province"),
      options: stateObj.provinces,
      onChange: (e) => changeHandler(e, stateObj.provinces, "districts"),
    },
    {
      name: t("District"),
      options: stateObj.districts,
      onChange: (e) => changeHandler(e, stateObj.districts, "sectors"),
    },
  ],
  [
    {
      name: t("Sector"),
      options: stateObj.sectors,
      onChange: (e) => changeHandler(e, stateObj.sectors, "cells"),
    },
    {
      name: t("Cell"),
      options: stateObj.cells,
      onChange: (e) => changeHandler(e, stateObj.cells, "villages"),
    },
  ],
];
const LocationUI = (props) => {
  useEffect(() => {
    props.stateObj.setProvinces(location);
  }, [props.stateObj]);
  const ar = rows(props.changeHandler, props.stateObj);
  ar.push([
    {
      name: t("Village"),
      options: props.stateObj.vilages,
      onChange: (e) => handleAddress(e, props.setAddress),
    },
  ]);
  return (
    <>
      {ar.map((item, i) => (
        <Rows item={item} {...props} key={i} />
      ))}
    </>
  );
};

const Rows = (props) => {
  return props.item.map((element, key) => {
    return (
      <div className="form-group" key={key}>
        <DropDown
          label={element.name}
          options={element.options || []}
          handleChange={element.onChange}
          name={element.name}
        />
      </div>
    );
  });
};
export default Location;
