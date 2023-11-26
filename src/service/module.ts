import axios from "axios";

const MODULE = `/api/v1/module`;
const CREATE_Module = `/api/v1/module/create`;

export interface Module {
  name: string;
  desc: string;
  author: string;
}

const getModuleById = (id: number) => axios.get(`${MODULE}/${id}`);
const getAllModule = () => axios.get(`${MODULE}`);
const getModuleRecenty = () => axios.get(`${MODULE}/recently`);
const getModuleByUserId = (userId: string) => axios.get(`${MODULE}/${userId}`);

const creatNewModule = async (payload: Module) =>
  await axios.post(`${CREATE_Module}`, payload, {
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    timeout: 3000,
  });

export {
  getModuleById,
  creatNewModule,
  getModuleByUserId,
  getAllModule,
  getModuleRecenty,
};
