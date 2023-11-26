import { createAsyncThunk } from "@reduxjs/toolkit";

import { isNull } from "lodash";

import {
  Module,
  getAllModule,
  getModuleByUserId,
  getModuleRecenty,
} from "@/service/module";

export const handlePostNewModule = createAsyncThunk(
  "module/handlePostNewModule",
  async (payload: Module, { rejectWithValue }) => {
    try {
      // const response = await creatNewModule(payload);
      return [1, 2, 2, 2, 2, 2, 22];
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const getAllModulesPublished = createAsyncThunk(
  "module/getAllModulesPublished",
  async (payload: any, { rejectWithValue }) => {
    try {
      // const response = await getAllModule();
      return [1, 2, 2, 2, 2, 2, 22];
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
export const getListRecently = createAsyncThunk(
  "module/getListRecently",
  async (payload: any, { rejectWithValue }) => {
    try {
      // const response = await getModuleRecenty();
      return [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
export const getListMyModule = createAsyncThunk(
  "module/getListMyModule",
  async (userId: string, { rejectWithValue }) => {
    try {
      // const response = await getModuleByUserId(userId);
      return [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const getModuleById = createAsyncThunk(
  "module/getModuleById",
  async (moduleId: number, { rejectWithValue }) => {
    try {
      // const response = await getModuleById(moduleId);
      return {
        title: "Vmax",
        description: "desc ",
        author: "Vmax Martis",
        createdAt: "01-09-2000",
      };
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
