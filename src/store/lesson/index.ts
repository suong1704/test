import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getLessonById, getListLessonByModuleId } from "./action";

interface Lesson {
  title: string;
  description: string;
}
export interface PayloadLesson {
  LessonData: Lesson;
}

export interface InitialState {
  listLessonByModuleId: any;
  detailLessonById: Lesson | any;
}
const initialState: InitialState = {
  listLessonByModuleId: [],
  detailLessonById: {},
};

const Lesson = createSlice({
  name: "Lesson",
  initialState,
  reducers: {
    clearDataDetail: (state: any) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(getListLessonByModuleId.fulfilled, (state, action) => {
      state.listLessonByModuleId = action.payload;
    })
    builder.addCase(getLessonById.fulfilled, (state, action) => {
      state.detailLessonById = action.payload;
    })
    ;
  },
});

export const { clearDataDetail } = Lesson.actions;

export default Lesson.reducer;
