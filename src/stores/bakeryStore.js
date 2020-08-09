import { decorate, observable } from "mobx";
import axios from "axios";

class BakeryStore {
  bakeries = [];
  loading = true;

  fetchBakeries = async () => {
    try {
      const res = await axios.get("http://localhost:8000/bakeries");
      this.bakeries = res.data;
      this.loading = false;
    } catch (error) {
      console.error("BakeryStore -> fetchBakeries -> error", error);
    }
  };

  createBakery = async (newBakery) => {
    try {
      const formData = new FormData();
      for (const key in newBakery) formData.append(key, newBakery[key]);
      const res = await axios.post(`http://localhost:8000/bakeries`, formData);
      this.bakeries.push(res.data);
    } catch (error) {
      console.log("BakeryStore -> createBakery -> error", error);
    }
  };

  updateBakery = async (updatedBakery) => {
    try {
      // update in the backend
      const formData = new FormData();
      for (const key in updatedBakery) formData.append(key, updatedBakery[key]);
      await axios.put(
        `http://localhost:8000/bakeries/${updatedBakery.id}`,
        formData
      );
      // update in the frontend
      const bakery = this.bakeries.find(
        (bakery) => bakery.id === updatedBakery.id
      );
      for (const key in updatedBakery) bakery[key] = updatedBakery[key];
      bakery.image = URL.createObjectURL(updatedBakery.image);
    } catch (error) {
      console.log("BakeryStore -> updateBakery -> error", error);
    }
  };

  deleteBakery = async (bakeryId) => {
    try {
      // delete in the backend
      await axios.delete(`http://localhost:8000/bakeries/${bakeryId}`);
      // delete in the frontend
      this.bakeries = this.bakeries.filter((bakery) => bakery.id !== bakeryId);
    } catch (error) {
      console.log("bakeryStore -> deleteBakery -> error", error);
    }
  };
}

decorate(BakeryStore, {
  bakeries: observable,
  loading: observable,
});

const bakeryStore = new BakeryStore();
bakeryStore.fetchBakeries();

export default bakeryStore;
