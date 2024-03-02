"use client";
import ReactMapboxGl, { Layer, Feature, GeoJSONLayer } from "react-mapbox-gl";
import { MAP_DATA } from "./map-data";

export default function LandingMap() {
  const Map = ReactMapboxGl({
    accessToken:
      "pk.eyJ1IjoiYWtzaGF0cHVuaWEiLCJhIjoiY2xrZ3JsOHV6MDMwdzNxbnliaGV0a3ZucSJ9.D8HoqvLbOv4T78Q7PbjGjw",
  });
  const geojsonStyles = {
    lineLayout: {
      "line-join": "round",
      "line-cap": "round",
    },
    linePaint: {
      "line-color": "#ff11ff",
      "line-width": 4,
      "line-opacity": 1,
    },
    symbolLayout: {
      "text-field": "{text}",
      "symbol-placement": "line",
      "text-rotation-alignment": "map",
      "text-size": {
        base: 1,
        stops: [
          [9, 9],
          [14, 12],
        ],
      },
    },
    symbolPaint: {
      "text-color": "rgba(0, 0, 0, 1)",
      "text-halo-color": "rgba(255, 255, 255, 1)",
      "text-halo-width": 2,
    },
  };
  return (
    <Map
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: "50vh",
        width: "50vw",
      }}
    >
      <GeoJSONLayer data={MAP_DATA} {...geojsonStyles} />
    </Map>
  );
}
