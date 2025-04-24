import { createSlice } from "@reduxjs/toolkit";
import { users } from "./data";

const userSlice = createSlice({
  name: "user",
  initialState: users,
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    dlt: (state, action) => {
      return state.filter((user) => user.id !== action.payload.id);
    },
    edit: (state, action) => {
      let userobj = state.find((user) => {
        return user.id == action.payload.id;
      });

      if (userobj) {
        userobj.email = action.payload.email;
        userobj.password = action.payload.password;
      }
    },
  },
});

export default userSlice.reducer;
export const { add, dlt, edit } = userSlice.actions;
