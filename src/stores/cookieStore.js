import { decorate, observable } from "mobx";
import instance from "./instance";

class CookieStore {
  cookies = [];
  loading = true;

  fetchCookies = async () => {
    try {
      const res = await instance.get("/cookies");
      this.cookies = res.data;
      this.loading = false;
    } catch (error) {
      console.error("CookieStore -> fetchCookies -> error", error);
    }
  };

  getCookieById = (cookieId) =>
    this.cookies.find((cookie) => cookie.id === cookieId);

  createCookie = async (newCookie, bakery) => {
    try {
      const formData = new FormData();
      for (const key in newCookie) formData.append(key, newCookie[key]);
      const res = await instance.post(
        `/bakeries/${bakery.id}/cookies`,
        formData
      );
      const cookie = res.data;
      this.cookies.push(cookie);
      bakery.cookies.push(cookie);
    } catch (error) {
      console.log("CookieStore -> createCookie -> error", error);
    }
  };

  updateCookie = async (updatedCookie) => {
    try {
      // update in the backend
      const formData = new FormData();
      for (const key in updatedCookie) formData.append(key, updatedCookie[key]);
      await instance.put(`/cookies/${updatedCookie.id}`, formData);
      // update in the frontend
      const cookie = this.cookies.find(
        (cookie) => cookie.id === updatedCookie.id
      );
      for (const key in updatedCookie) cookie[key] = updatedCookie[key];
      cookie.image = URL.createObjectURL(updatedCookie.image);
    } catch (error) {
      console.log("CookieStore -> updateCookie -> error", error);
    }
  };

  deleteCookie = async (cookieId) => {
    try {
      // delete in the backend
      await instance.delete(`/cookies/${cookieId}`);
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
