import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
    cities: 5,
    citiesInfo: [
        {
            id: 0,
            name: "Dehradun",
            lat: 30.316496,
            lon: 78.032188,
            like: true
        },
        {
            id: 1,
            name: "Noida",
            lat: 28.5355,
            lon: 77.3910,
            like: true
        },
        {
            id: 2,
            name: "Mumbai",
            lat: 19.0760,
            lon: 72.8777,
            like: false
        },
        {
            id: 3,
            name: "Bangalore",
            lat: 12.9716,
            lon: 77.5946,
            like: false
        },
        {
            id: 4,
            name: "Hydrabad",
            lat: 17.3850,
            lon: 78.4867,
            like: false
        }
    ],
}

const counterData = createSlice({
    name: "data",
    initialState,
    reducers: {
        incrementCities: (state) => {
            state.cities += 1;
        },
        decrementCities: (state) => {
            state.cities -= 1;
        },
        toggleLikeCities: (state, action) => {
            console.log(`The value we get is ${action.payload}`)
            state.citiesInfo[action.payload].like = !state.citiesInfo[action.payload].like
        }
    }
})

export default counterData;