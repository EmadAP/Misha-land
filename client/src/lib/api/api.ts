import axios from "axios";

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
  return res.data.docs;
};

export const GetAllMenClothingFc = async () => {
  const res = await api.get("/api/men-clothing");
  return res.data.docs;
};

export const GetMenClothingByIdFc = async (id: string) => {
  const res = await api.get(`/api/men-clothing/${id}`);
  return res.data.docs;
};

export const GetAllWomenClothingFc = async () => {
  const res = await api.get("/api/women-clothing");
  return res.data.docs;
};

export const GetWomenClothingByIdFc = async (id: string) => {
  const res = await api.get(`/api/women-clothing/${id}`);
  return res.data.docs;
};

export const GetAllCategoriesFc = async () => {
  const res = await api.get("/api/categories");
  return res.data.docs;
};

export const GetCategoriesByIdFc = async (id: string) => {
  const res = await api.get(`/api/categories/${id}`);
  return res.data.docs;
};

export const GetProductsByCategoryFc = async (categoryId: string) => {
  const res = await api.get(
    `/api/products?where[categories][in]=${categoryId}`
  );
  return res.data.docs;
};

// export const CreatePendingTicketsFc = async (
//   items: {
//     eventId: string;
//     sectionId: string;
//     quantity: number;
//   }[]
// ) => {
//   const res = await api.post(
//     "/api/tickets/checkout",
//     { items },
//     { withCredentials: true }
//   );
//   return res.data;
// };

// // Fetch cart
// export const GetCartFc = async () => {
//   const res = await api.get("/api/cart", { withCredentials: true });
//   return res.data;
// };

// // Add item
// export const AddToCartFc = async (payload: {
//   eventId: string;
//   sectionId: string;
//   total: number;
// }) => {
//   const res = await api.post("/api/cart/add", payload, {
//     withCredentials: true,
//   });
//   return res.data;
// };

// // Update item
// export const UpdateCartItemFc = async (payload: {
//   sectionId: string;
//   total: number;
// }) => {
//   const res = await api.put(
//     `/api/cart/update/${payload.sectionId}`,
//     { total: payload.total },
//     { withCredentials: true }
//   );
//   return res.data;
// };

// // Remove item
// export const RemoveFromCartFc = async (sectionId: string) => {
//   const res = await api.delete(`/api/cart/remove/${sectionId}`, {
//     withCredentials: true,
//   });
//   return res.data;
// };

// // Clear cart
// export const ClearCartFc = async () => {
//   const res = await api.delete("/api/cart/clear", { withCredentials: true });
//   return res.data;
// };
