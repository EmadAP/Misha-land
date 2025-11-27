import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

function OrdersPage() {
  const orders = [
    {
      id: "ORD-1001",
      date: "1403/08/12",
      status: "پرداخت شده",
      total: "۲۵۰٬۰۰۰ تومان",
    },
    {
      id: "ORD-1002",
      date: "1403/08/09",
      status: "در انتظار پرداخت",
      total: "۱۵۰٬۰۰۰ تومان",
    },
    {
      id: "ORD-1003",
      date: "1403/08/05",
      status: "لغو شده",
      total: "۳۵۰٬۰۰۰ تومان",
    },
    {
      id: "ORD-1004",
      date: "1403/07/30",
      status: "پرداخت شده",
      total: "۴۵۰٬۰۰۰ تومان",
    },
    {
      id: "ORD-1005",
      date: "1403/07/25",
      status: "ارسال شده",
      total: "۵۵۰٬۰۰۰ تومان",
    },
  ];

  return (
    <Table dir="rtl">
      <TableCaption className="overflow-y-hidden">
        لیست سفارشات شما
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>سفارش</TableHead>
          <TableHead>تاریخ</TableHead>
          <TableHead>وضعیت</TableHead>
          <TableHead>مجموع</TableHead>
          <TableHead className="text-center">عملیات ها</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell className="font-medium">{order.id}</TableCell>
            <TableCell>{order.date}</TableCell>
            <TableCell>{order.status}</TableCell>
            <TableCell>{order.total}</TableCell>
            <TableCell className="text-center">
              <Button variant={"ghost"} className="hover:text-primary-30">
                مشاهده
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>مجموع سفارش ها</TableCell>
          <TableCell>۵,۰۰۰,۰۰۰ تومان</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}

export default OrdersPage;
