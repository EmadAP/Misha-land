import { useQuery } from "@tanstack/react-query";

import {
  GetAccessoriesByIdFc,
  GetAllAccessoriesFc,
  GetAllCategoriesFc,
  GetAllMenClothingFc,
  GetAllWomenClothingFc,
  GetCategoriesByIdFc,
  GetMenClothingByIdFc,
  GetProductByCollectionAndIdFc,
  GetProductsByCategoryFc,
  GetWomenClothingByIdFc,
} from "../api";
import type {
  Accessory,
  Category,
  CollectionType,
  MenClothing,
  Product,
  WomenClothing,
} from "@/lib/types/type";

export const useGetAllProducts = () => {
  return useQuery<Product[], Error>({
    queryKey: ["AllProducts"],
    queryFn: async () => {
      const [acc, men, women] = await Promise.all([
        GetAllAccessoriesFc(),
        GetAllMenClothingFc(),
        GetAllWomenClothingFc(),
      ]);

      return [...acc, ...men, ...women];
    },
  });
};

export const useGetAllAccessories = () => {
  return useQuery<Accessory[], Error>({
    queryKey: ["Accessories"],
    queryFn: GetAllAccessoriesFc,
  });
};

export const useGetAccessoriesById = (id: string) => {
  return useQuery<Accessory, Error>({
    queryKey: ["AccessoriesById", id],
    queryFn: () => GetAccessoriesByIdFc(id),
  });
};

export const useGetAllMenClothing = () => {
  return useQuery<MenClothing[], Error>({
    queryKey: ["MenClothing"],
    queryFn: GetAllMenClothingFc,
  });
};

export const useGetMenClothingById = (id: string) => {
  return useQuery<MenClothing, Error>({
    queryKey: ["MenClothingById", id],
    queryFn: () => GetMenClothingByIdFc(id),
  });
};

export const useGetAllWomenClothing = () => {
  return useQuery<WomenClothing[], Error>({
    queryKey: ["WomenClothing"],
    queryFn: GetAllWomenClothingFc,
  });
};

export const useGetWomenClothingById = (id: string) => {
  return useQuery<WomenClothing, Error>({
    queryKey: ["WomenClothingById", id],
    queryFn: () => GetWomenClothingByIdFc(id),
  });
};

export const useGetAllCategories = () => {
  return useQuery<Category[], Error>({
    queryKey: ["Category"],
    queryFn: GetAllCategoriesFc,
  });
};

export const useGetCategoriesById = (id: string) => {
  return useQuery<Category, Error>({
    queryKey: ["CategoryById", id],
    queryFn: () => GetCategoriesByIdFc(id),
  });
};

export const useGetProductsByCategory = (categoryId?: string) => {
  return useQuery<Product[], Error>({
    queryKey: ["ProductByCategory", categoryId],
    queryFn: () => GetProductsByCategoryFc(categoryId!),
    enabled: !!categoryId,
  });
};

export const useGetProductByCollectionAndId = (
  collection?: CollectionType,
  id?: string
) => {
  return useQuery<Product, Error>({
    queryKey: ["ProductDetails", collection, id],
    queryFn: () => GetProductByCollectionAndIdFc(collection!, id!),
    enabled: !!collection && !!id,
  });
};
