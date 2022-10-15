import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
    name: 'themeState',
    initialState: {
        value: {
            backgroundColor: "#fff",
            color: "#1e1e1e",
            fontFamily: "Arial",
            fontSize: "1rem",
            lineHeight:"30px",
            padding: "1rem 2rem",
            minHeight: "48rem",
            transition:"All 1s ease"
        }
    },
    reducers: {
        // setBackground: (state,action) => {
        //     state.value = action.payload;
        // },
         darkTheme: (state) => {
            state.value = {
            backgroundColor: "black",
            color: "#ffffff",
            fontFamily: "Arial",
            fontSize: "1rem",
            lineHeight:"30px",
            padding: "1rem 2rem",
            minHeight: "48rem",
            transition:"All 1s ease"
        }
        },
         lightTheme: (state) => {
            state.value = {
             backgroundColor: "#fff",
            color: "#1e1e1e",
            fontFamily: "Arial",
            fontSize: "1rem",
            lineHeight:"30px",
            padding: "1rem 2rem",
            minHeight: "48rem",
            transition:"All 1s ease"
        }
        },
    },
});
export const { darkTheme, lightTheme} = themeSlice.actions;
export default themeSlice.reducer;