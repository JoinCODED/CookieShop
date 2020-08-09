import { decorate } from "mobx";
import axios from "axios";

class AuthStore {
  signup = async (userData) => {
    try {
      const res = await axios.post("http://localhost:8000/signup", userData);
      console.log("AuthStore -> signup -> res", res.data);
    } catch (error) {
      console.log("AuthStore -> signup -> error", error);
    }
  };
}

decorate(AuthStore, {});

const authStore = new AuthStore();

export default authStore;
