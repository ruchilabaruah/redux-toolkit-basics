import { createSlice, configureStore } from "@reduxjs/toolkit";
// import { createStore } from "redux";

const initialCounterState = { counter: 0 };
const initialAuthState = { isAuthenticated: false };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrement(state, action) {
      state.counter = state.counter - action.payload;
    },
  },
});

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

// const useReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return { counter: state.counter + 1 };
//   } else if (action.type === "decrement") {
//     return { counter: state.counter - 1 };
//   }
//   return state;
// };

// const store = createStore(useReducer);

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export default store;
