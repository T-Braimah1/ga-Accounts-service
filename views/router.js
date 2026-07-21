import express from "express";
import accountsController from "../controllers/accountsController.js";

const Router = express.Router();

Router.route("/accounts") // this creates an endpoint for /accounts
  .get(accountsController.getAllAccounts) // if the user sends a GET request to /accounts, use this function
  .post(accountsController.createAccount); // if the user sends a POST request to /accounts, use this function

Router.route("/accounts/:id") // the :id here represents a dynamic parameter, so endpoint could be /accoun
  .get(accountsController.getAccountById) // if the user sends a Get request to /accounts:id, use this function
  .put(accountsController.updateAccountById) // if the user sends a POST request to /accounts:id, use this function
  .delete(accountsController.deleteAccountById); // if the user sends a DELETE request to /accounts:id, use this function

export default Router;