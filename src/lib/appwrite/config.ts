import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  url: "https://cloud.appwrite.io/v1",
  projectId: "65faf8e689373ddb251e",
  databaseId: "65faff1eb8e086fb27bb",
  storageId: "65fafec0463d8f01ecdc",
  userCollectionId: "65fb00b05c42840c13c9",
  postCollectionId: "65fb00f64f78d3cda4bf",
  savesCollectionId: "65fb0131b3c782dfaa7a",
};

export const client = new Client();

client.setEndpoint(appwriteConfig.url);
client.setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
