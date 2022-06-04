import { type } from "os";
import React from "react";

export type ChangePageFunction = {
  ChangePage: () => void;
};

export interface Geojson {
  latitude: number | null;
  longitude: number | null;
  status: boolean | null;
}

export type GeoJsonDispatch = React.Dispatch<React.SetStateAction<Geojson>>;
export type GeoLoadingDispatch = React.Dispatch<React.SetStateAction<boolean>>;

export type DataFileType = {
  from: number;
  to: number;
  AQI: string;
  Air_pollution_level: string;
  Health_Implications: string;
  PM25: string;
  colorbg: string;
  dark_color: string;
  mid_color: string;
};

export type JsonDataType = {
  city: string;
  aqi: string;
  location: string | null;
  acctime: string;
  Airlevel: string;
  alert: string;
  alert_tip: string;
  color_bg: string;
  dark_color: string;
  mid_color: string;
  pm25average: PM25Type[];
};

export type PM25Type = {
  avg: number;
  day: string;
  max: number;
  min: number;
};
export type OptionsType = {
  [key: string]: string;
};
