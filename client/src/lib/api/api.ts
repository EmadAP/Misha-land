import axios from "axios";
import type { CollectionType } from "../types/type";

const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const GetAllAccessoriesFc = async () => {
  const res = await api.get("/api/accessories");
  return res.data.docs;
};

export const GetAccessoriesByIdFc = async (id: string) => {
  const res = await api.get(`/api/accessories/${id}`);
  return res.data.doc;
};

export const GetAllMenClothingFc = async () => {
  const res = await api.get("/api/men-clothing");
  return res.data.docs;
};

export const GetMenClothingByIdFc = async (id: string) => {
  const res = await api.get(`/api/men-clothing/${id}`);
  return res.data.doc;
};

export const GetAllWomenClothingFc = async () => {
  const res = await api.get("/api/women-clothing");
  return res.data.docs;
};

export const GetWomenClothingByIdFc = async (id: string) => {
  const res = await api.get(`/api/women-clothing/${id}`);
  return res.data.doc;
};

export const GetAllCategoriesFc = async () => {
  const res = await api.get("/api/categories");
  return res.data.docs;
};

export const GetCategoriesByIdFc = async (id: string) => {
  const res = await api.get(`/api/categories/${id}`);
  return res.data.doc;
};

export const GetProductsByCategoryFc = async (categoryId: string) => {
  const res = await api.get(
    `/api/products?where[categories][in]=${categoryId}`
  );
  return res.data.docs;
};

export const GetProductByCollectionAndIdFc = async (
  collection: CollectionType,
  id: string
) => {
  const res = await api.get(`/api/${collection}/${id}`);
  return res.data;
};
