import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const weeklySlice = createSlice({
  name: "weekly",
  initialState,
  reducers: {
    addWeeklyTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    toggleWeeklyTask: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) task.completed = !task.completed;
    },
    removeWeeklyTask: (state, action) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload);
    },
  },
});

export const { addWeeklyTask, toggleWeeklyTask, removeWeeklyTask } =
  weeklySlice.actions;
export default weeklySlice.reducer;