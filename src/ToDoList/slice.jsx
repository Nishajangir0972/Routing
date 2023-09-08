import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "list",
  initialState: {
    input: "",
    tasks: [],
    check :[],
    isEditing: false,
  },
  reducers: {
    setInput: function (state, action) {
      state.input = action.payload;
    },
    addTask: function (state, action) {
      if (state.isEditing === false)
        state.tasks = [...state.tasks, state.input];
      else {
        state.tasks[state.isEditing] = state.input;
        state.isEditing = false
      }

      state.input = "";
    },
    setcheck :function(state, action){
const index =action.payload;
state.check = [...state.check ,index]
    },

    deleteTask: function (state, action) {
      state.tasks = state.tasks.filter((task, index) => {
        return index !== action.payload;
      });
    },

    editTask: function (state, action) {
      state.input = state.tasks[action.payload];
      state.isEditing = action.payload;
    },

  },
});
export const { setInput, addTask, deleteTask, editTask,setcheck } = todoSlice.actions;
const todoReducer = todoSlice.reducer;

export default todoReducer;