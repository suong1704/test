import { lessonDetail_Dummy } from "@/app/(DashboardLayout)/utilities/dummy-data/lesson";
import { LessonDetail } from "@/service/lesson";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getListLessonByModuleId = createAsyncThunk(
  "lesson/getListLessonByModuleId",
  async (moduleId: number, { rejectWithValue }) => {
    try {
      // const response = await getModulesPublished(payload); api here
      return [1, 2, 2, 2, 2, 2, 22];
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
export const getLessonById = createAsyncThunk(
  "lesson/getLessonById",
  async (lessonId: number, { rejectWithValue }) => {
    try {
      // const response = await getLessonById(lessonId); api here
      return lessonDetail_Dummy;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
export const postNewLesson = createAsyncThunk(
  "lesson/postNewLesson",
  async (payload: LessonDetail, { rejectWithValue }) => {
    try {
      // const response = await creatNewLesson(payload); api here
      return lessonDetail_Dummy;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
