import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getLessonById, getListLessonByModuleId } from "./action";
import { LessonDetail } from "@/service/lesson";


export interface PayloadLesson {
  LessonData: LessonDetail;
}

export interface InitialState {
  listLessonByModuleId: any;
  detailLessonById: LessonDetail | any;
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
      console.log("action", action)
      state.detailLessonById = action.payload;
    })
    ;
  },
});

export const { clearDataDetail } = Lesson.actions;

export default Lesson.reducer;
