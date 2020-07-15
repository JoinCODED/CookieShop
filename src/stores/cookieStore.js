import { decorate, observable } from "mobx";
import slugify from "react-slugify";

// Data
import cookies from "../cookies";

class CookieStore {
  cookies = cookies;

  createCookie = (newCookie) => {
    newCookie.id = this.cookies[this.cookies.length - 1].id + 1;
    newCookie.slug = slugify(newCookie.name);
    this.cookies.push(newCookie);
  };

  updateCookie = (updatedCookie) => {
    const cookie = this.cookies.find(
      (cookie) => cookie.id === updatedCookie.id
    );
    for (const key in updatedCookie) cookie[key] = updatedCookie[key];
  };

  deleteCookie = (cookieId) => {
    this.cookies = this.cookies.filter((cookie) => cookie.id !== cookieId);
    console.log("CookieStore -> deleteCookie -> this.cookies", this.cookies);
  };
}

decorate(CookieStore, {
  cookies: observable,
});

const cookieStore = new CookieStore();
export default cookieStore;
