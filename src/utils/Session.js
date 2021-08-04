import jwt from "jsonwebtoken";
import sha1 from "js-sha1";

import ApplicationConfig from "@globalConfig/App";

const sha1Env = sha1(ApplicationConfig.env);
const COOKIE_NAME = `${ApplicationConfig.cookieName}-${sha1Env}`;

export default class Session {
  static set(authParams = {}, context = "main") {
    if (!document) document = {};
    const currentSession = Session.get(context);
    authParams.createdAt = Date.now();

    const date = new Date();
    const duration = context == "auth" ? 28800 : 7200;
    date.setSeconds(date.getSeconds() + duration);

    const expires = "expires=" + date.toUTCString();
    const value = jwt.sign({ ...currentSession, ...authParams }, sha1Env);

    document.cookie = `${COOKIE_NAME}-${context}=${value};${expires};domain=${window.location.hostname};path=/;`;
  }

  static get(context = "main") {
    var name = `${COOKIE_NAME}-${context}=`;
    var decodedCookie = document ? decodeURIComponent(document.cookie) : "";
    var ca = decodedCookie.split(";");
    var token = null;

    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        token = c.substring(name.length, c.length);
      }
    }

    return token ? jwt.verify(token, sha1Env) : {};
  }

  static destroy(context = "main") {
    document.cookie = `${COOKIE_NAME}-${context}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=${window.location.hostname}; path=/;`;
  }
}
