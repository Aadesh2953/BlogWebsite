import { combineSlices } from "@reduxjs/toolkit";
import config from "../conf/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";
export class Service {
  client = new Client();
  databases;
  bucket;
  constructor() {
    this.client
      .setEndpoint(config.appwriteurl)
      .setProject(config.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        { title, content, featuredImage, status, userId }
      );
    } catch (error) {
      console.log(error);
    }
  }
  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      await this.databases.updateDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log(error);
    }
  }
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  async getPost(slug) {
    try {
      await this.databases.getDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log(error);
    }
  }
  async getPosts(queries=[Query.equal("status","active")]) {
    try {
    await this.databases.listDocuments(
      config.appwriteDatabaseId,
        config.appwriteCollectionId,
        queries,

    )
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  async uploadFile(file)
  {
     try {
       await this.bucket.createFile(config.appwriteBucketId,ID.unique(),file)
     } catch (error) {
       console.log(error)
       return false;
     }
  }
  async deleteFile(fileId)
  {
    try {
      await this.bucket.deleteFile(config.appwriteBucketId,fileId)
      return true
    } catch (error) {
      console.log(error);
    }
  }
   getFilePreview(fileId)
   {
    try {
      this.bucket.getFilePreview(config.appwriteBucketId,fileId);
    } catch (error) {
      
    }
   }
}
const service = new Service();
export default service;
