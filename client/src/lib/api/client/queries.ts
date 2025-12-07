import { useQuery } from "@tanstack/react-query";

import {
  GetAccessoriesByIdFc,
  GetAllAccessoriesFc,
  GetAllCategoriesFc,
  GetAllMenClothingFc,
  GetAllWomenClothingFc,
  GetCategoriesByIdFc,
  GetMenClothingByIdFc,
  GetProductsByCategoryFc,
  GetWomenClothingByIdFc,
} from "../api";
import type {
  Accessory,
  Category,
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
// export const GetEventById = (id: string) => {
//   return useQuery<Event, Error>({
//     queryKey: ["EventById", id],
//     queryFn: () => GetEventByIdFc(id),
//   });
// };

// export const useGetAllSections = () => {
//   return useQuery<Section[], Error>({
//     queryKey: ["Sections"],
//     queryFn: GetAllSectionsFc,
//   });
// };

// export const useGetSectionsByEventId = (eventId?: string) => {
//   return useQuery<Section[], Error>({
//     queryKey: ["SectionsByEvent", eventId],
//     queryFn: () => GetSectionsByEventIdFc(eventId!),
//     enabled: !!eventId,
//   });
// };

// export const useGetSectionById = (id?: string) => {
//   return useQuery<Section, Error>({
//     queryKey: ["SectionById", id],
//     queryFn: () => GetSectionByIdFc(id!),
//     enabled: !!id,
//   });
// };

// export const useGetCart = () => {
//   return useQuery<{ user: string; items: CartItem[] }, Error>({
//     queryKey: ["Cart"],
//     queryFn: GetCartFc,
//   });
// };
