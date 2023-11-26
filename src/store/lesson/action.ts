import { createAsyncThunk } from "@reduxjs/toolkit";

import { isNull } from "lodash";

export const getListLessonByModuleId = createAsyncThunk(
  "lesson/getListLessonByModuleId",
  async (moduleId: number, { rejectWithValue }) => {
    try {
      // const response = await getModulesPublished(payload); api here
      return [1,2,2,2,2,2,22,]
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
export const getLessonById = createAsyncThunk(
  "lesson/getLessonById",
  async (moduleId: number, { rejectWithValue }) => {
    try {
      // const response = await getModulesPublished(payload); api here
      return {}
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
