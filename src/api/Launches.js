import { API_URL } from "../utils/constants";
import { HIST_API_URL } from "../utils/constants";
import React from "react";

export async function getLaunchesApi() {
  try {
    const url = `${API_URL}/launches?limit=20offset=0`;
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

export async function getHistoryApi() {
  try {
    const url = `${API_URL}/history`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("error get HistoryApi" + error);
  }
}
