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

export interface DataFileType {
  from: number;
  to: number;
  AQI: string;
  Air_pollution_level: string;
  Health_Implications: string;
  PM25: string;
  colorbg: string;
  dark_color: string;
  mid_color: string;
}

export interface JsonDataType {
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
}

export interface PM25Type {
  avg: number;
  day: string;
  max: number;
  min: number;
}
export interface OptionsType {
  [key: string]: string;
}
