import { Account, Client, Databases } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66adfe48000d7ff7178a");

// Initialize App write services
export const account = new Account(client);
export const databases = new Databases(client);

export default client;
