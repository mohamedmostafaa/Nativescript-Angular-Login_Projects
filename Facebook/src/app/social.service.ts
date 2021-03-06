import { Injectable } from "@angular/core";


import {
  TnsOAuthClient,
  ITnsOAuthTokenResult
} from "nativescript-oauth2";
@Injectable({
    providedIn: "root"
})


export class SocialService {

    private client: TnsOAuthClient = null;
  
    constructor() { }
  
    public tnsOauthLogin(providerType): Promise<ITnsOAuthTokenResult> {

      console.log("SocialService Login START");

      this.client = new TnsOAuthClient(providerType);
  
      return new Promise<ITnsOAuthTokenResult>((resolve, reject) => {
        this.client.loginWithCompletion(
          (tokenResult: ITnsOAuthTokenResult, error) => {
            if (error) {
              console.error("back to main page with error: ");
              console.error(error);
              reject(error);
            } else {
              //console.log("back to main page with access token: ");
              //console.log(tokenResult);
              resolve(tokenResult);
            }
          }
        );
      });
    }
  
    public tnsOauthLogout() {
      if (this.client) {
        this.client.logout();
      }
    }
  
}
 