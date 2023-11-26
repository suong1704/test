/* eslint-disable @next/next/no-assign-module-variable */
import { createSlice } from "@reduxjs/toolkit";

import {
  getAllModulesPublished,
  getListMyModule,
  getListRecently,
  getModuleById,
  handlePostNewModule,
} from "./action";
export interface Module {
  title: string;
  description: string;
  author: string;
  createdAt: string;
}
export interface PayloadNewModule {
  moduleData: Module;
}

export interface InitialState {
  dataModuleUser: Module[] | any[];
  dataAllModules: Module[] | Array<any>;
  dataRecentlyModules: Module[] | Array<any>;
  detailModule: Module | any
}
const initialState: InitialState = {
  dataModuleUser: [],
  dataAllModules: [],
  dataRecentlyModules: [],
  detailModule: {}
};

const moduleSlice = createSlice({
  name: "module",
  initialState,
  reducers: {
    clearDataDetail: (state: any) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(handlePostNewModule.fulfilled, (state, action) => {});
    builder.addCase(getAllModulesPublished.fulfilled, (state, action) => {
      state.dataAllModules = action.payload;
    })
    builder.addCase(getListRecently.fulfilled, (state, action) => {
      state.dataRecentlyModules = action.payload;
    })
    builder.addCase(getListMyModule.fulfilled, (state, action) => {
      state.dataModuleUser = action.payload;
    })
    builder.addCase(getModuleById.fulfilled, (state, action) => {
      state.detailModule = action.payload;
    });
  },
});

export const { clearDataDetail } = moduleSlice.actions;

export default moduleSlice.reducer;
