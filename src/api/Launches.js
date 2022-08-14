import { API_URL } from "../utils/constants";
import React from "react";

export async function getLaunchesApi() {
  try {
    const url = `${API_URL}/launches?limit=8offset=0`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("error getLaunchesApi" + error);
  }
}

export async function getLaunchApiByFlightNumberApi(flightNumber) {
  try {
    const url = `${API_URL}/launches/${flightNumber}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("error getLaunchesApiByFlight" + error);
  }
}
