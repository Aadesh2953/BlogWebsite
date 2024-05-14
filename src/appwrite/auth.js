import config from "../conf/config.js";
import { Client, Account, ID } from "appwrite";
export class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(config.appwriteurl)
      .setProject(config.appwriteProjectId);
      this.account=new Account(this.client)
  }
  async createAccount({ email, password, name }) {
    try {
      console.log("i AM createAccount")
      let userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        //    return userAccount
        return this.login(userAccount);
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log(error);
    }
  }
  async login({email, password}) {
    try {
        return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log("i am password")
        throw error;
    }
}
  async getCurrentUser() {
    try {
        return await this.account.get();
    } catch (error) {
        console.log("Appwrite serive :: getCurrentUser :: error", error);
    }

    return null;
}
  async logout()
  {
    try {
        await this.account.deleteSessions()
    } catch (error) {
        console.log("error")
    }
  }

}
const authservice = new AuthService();
export default authservice;
// here we can copy paste the code from the same website but we dont because we need to export everything from the auth.js file so it will be difficult amd messy for