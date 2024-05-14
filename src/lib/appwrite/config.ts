import { Client, Account, Databases, Storage, Avatars } from "appwrite";
// import { url } from "inspector";

export const appwriteConfig = {
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  url: import.meta.env.VITE_APPWRITE_URL,
};

export const client = new Client();

client.setProject(appwriteConfig.projectId);
client.setProject(appwriteConfig.url);

// export const client = new Client();
export const account = new Account(client);

export const databases = new Databases(client);

export const storagcliente = new Storage(client);

export const avatars = new Avatars(client);
