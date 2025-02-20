import axios from "axios";
import { Employees } from "../../../../Shared/types/data";

const API_URL = "http://localhost:3001/employees";

export const employeeApi = {
  fetchAll: async () => {
    const { data } = await axios.get<Employees[]>(API_URL);
    return data;
  },

  delete: async (id: string) => {
    await axios.delete(`${API_URL}/${id}`);
    return id;
  },

  update: async (id: string, updatedEmployee: Partial<Employees>) => {
    const { data } = await axios.patch<Employees>(
      `${API_URL}/${id}`,
      updatedEmployee
    );
    return data;
  },
};
