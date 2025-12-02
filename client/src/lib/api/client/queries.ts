import { useQuery } from "@tanstack/react-query";
import type { Product } from "@/lib/types/type";
import { GetAllProductsFc } from "../api";

export const useGetAllProducts = () => {
  return useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: GetAllProductsFc,
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
