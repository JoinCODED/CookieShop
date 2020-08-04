import { decorate, observable } from "mobx";
import axios from "axios";

class CookieStore {
  cookies = [];
  loading = true;

  fetchCookies = async () => {
    try {
      const res = await axios.get("http://localhost:8000/cookies");
      this.cookies = res.data;
      this.loading = false;
    } catch (error) {
      console.error("CookieStore -> fetchCookies -> error", error);
    }
  };

  createCookie = async (newCookie) => {
    console.log("CookieStore -> createCookie -> newCookie", newCookie);
    try {
      const formData = new FormData();
      for (const key in newCookie) formData.append(key, newCookie[key]);
      const res = await axios.post(
        `http://localhost:8000/bakeries/${newCookie.bakeryId}/cookies`,
        formData
      );
      this.cookies.push(res.data);
    } catch (error) {
      console.log("CookieStore -> createCookie -> error", error);
    }
  };

  updateCookie = async (updatedCookie) => {
    try {
      // update in the backend
      const formData = new FormData();
      for (const key in updatedCookie) formData.append(key, updatedCookie[key]);
      await axios.put(
        `http://localhost:8000/cookies/${updatedCookie.id}`,
        formData
      );
      // update in the frontend
      const cookie = this.cookies.find(
        (cookie) => cookie.id === updatedCookie.id
      );
      for (const key in formData) cookie[key] = formData[key];
    } catch (error) {
      console.log("CookieStore -> updateCookie -> error", error);
    }
  };

  deleteCookie = async (cookieId) => {
    try {
      // delete in the backend
      await axios.delete(`http://localhost:8000/cookies/${cookieId}`);
      // delete in the frontend
      this.cookies = this.cookies.filter((cookie) => cookie.id !== cookieId);
    } catch (error) {
      console.log("CookieStore -> deleteCookie -> error", error);
    }
  };
}

decorate(CookieStore, {
  cookies: observable,
  loading: observable,
});

const cookieStore = new CookieStore();
cookieStore.fetchCookies();

export default cookieStore;
