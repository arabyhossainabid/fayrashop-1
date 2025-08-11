"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface CartItem {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  image: string;
  color: string;
  size: string;
  stock: number;
}

export default function page() {
  const router = useRouter();

  const [items, setItems] = useState<CartItem[]>([]);
  const [couponCode, setCouponCode] = useState("");
  const [isCouponApplied, setIsCouponApplied] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const storedCart = JSON.parse(localStorage.getItem("cartItems") || "[]");
      if (storedCart.length > 0) {
        setItems(storedCart);
      } else {
        // You can initialize with default items if needed
        setItems([
          {
            id: "1",
            name: "Classic Chronograph Watch",
            price: 299.99,
            originalPrice: 399.99,
            quantity: 1,
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
            color: "Black",
            size: "Standard",
            stock: 5,
          },
          {
            id: "2",
            name: "Sport Diver Watch",
            price: 199.99,
            quantity: 2,
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
            color: "Blue",
            size: "Standard",
            stock: 3,
          },
        ]);
      }
    } catch {
      setItems([]);
    }
  }, []);

  // Save cart changes to localStorage and trigger event
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(items));
    window.dispatchEvent(new Event("cartChanged"));
  }, [items]);

  // Calculations
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const discount = isCouponApplied ? subtotal * 0.2 : 0;
  const subtotalAfterDiscount = subtotal - discount;
  const shipping = 0; // you can add shipping logic here if you want
  const total = subtotalAfterDiscount + shipping;

  // Remove item
  const handleRemove = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  // Change quantity via input
  const handleQuantityChange = (id: string, newQuantityStr: string) => {
    let newQuantity = parseInt(newQuantityStr);
    if (isNaN(newQuantity) || newQuantity < 1) newQuantity = 1;

    setItems(
      items.map((item) =>
        item.id === id
          ? {
            ...item,
            quantity: Math.min(newQuantity, item.stock),
          }
          : item,
      ),
    );
  };

  // Apply coupon (hardcoded "fayrashop")
  const handleApplyCoupon = () => {
    setIsCouponApplied(couponCode.trim().toLowerCase() === "fayrashop");
  };

  // Proceed to checkout
  const handleProceedToCheckout = () => {
    if (items.length === 0) return;

    localStorage.setItem(
      "checkoutData",
      JSON.stringify({
        subtotalBeforeDiscount: subtotal,
        discount: discount,
        subtotalAfterDiscount: subtotalAfterDiscount,
        items: items,
      }),
    );

    setItems([]);
    localStorage.removeItem("cartItems");
    window.dispatchEvent(new Event("cartChanged"));
    router.push("/checkout");
  };

  return (
    <section className="md:p-6 my-20 space-y-8 max-w-7xl mx-auto">
      {/* Cart Table */}
      <div>
        {/* Table Header (desktop only) */}
        <div className="hidden md:grid mb-6 p-4 rounded bg-muted grid-cols-5 gap-4 text-base font-medium">
          <span>Product</span>
          <span>Color & Size</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Subtotal</span>
        </div>

        {/* Cart Items */}
        <div className="space-y-4">
          {items.map((item) => (
            <Card key={item.id} className="hover:bg-muted/30 transition">
              <CardContent className="p-4">
                <div className="md:grid md:grid-cols-5 md:gap-4 items-center">
                  {/* Product Image + Name + Remove */}
                  <div className="flex items-center gap-3 md:col-span-1">
                    <div className="relative w-16 h-16">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded border object-contain"
                      />
                      <Button
                        size="icon"
                        variant="destructive"
                        className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 rounded-full"
                        onClick={() => handleRemove(item.id)}
                      >
                        <X size={14} />
                      </Button>
                    </div>
                    <span className="font-medium text-sm md:text-base">
                      {item.name}
                    </span>
                  </div>

                  {/* Color & Size (desktop only) */}
                  <div className="hidden md:flex flex-col text-sm text-muted-foreground">
                    <span>Color: {item.color}</span>
                    <span>Size: {item.size}</span>
                  </div>

                  {/* Price */}
                  <div className="hidden md:flex items-center">
                    <span>${item.price.toFixed(2)}</span>
                  </div>

                  {/* Quantity input */}
                  <div className="hidden md:block">
                    <Input
                      type="number"
                      min={1}
                      max={item.stock}
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item.id, e.target.value)
                      }
                      className="w-16"
                    />
                  </div>

                  {/* Subtotal */}
                  <div className="hidden md:flex items-center font-medium">
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>

                {/* Mobile view: show quantity + price under product */}
                <div className="flex justify-between mt-3 md:hidden text-sm text-muted-foreground">
                  <div>
                    Color: {item.color} • Size: {item.size}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">${item.price.toFixed(2)}</span>
                    <Input
                      type="number"
                      min={1}
                      max={item.stock}
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item.id, e.target.value)
                      }
                      className="w-16"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-between flex-wrap gap-4">
        <Button variant="outline" onClick={() => (window.location.href = "/")}>
          Return To Shop
        </Button>
        <Button
          variant="outline"
          onClick={() => localStorage.setItem("cartItems", JSON.stringify(items))}
        >
          Update Cart
        </Button>
      </div>

      {/* Coupon + Total */}
      <div className="flex flex-col md:flex-row gap-6 justify-between">
        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
          <Input
            placeholder="Coupon Code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            className="w-full md:w-[300px] h-[56px]"
          />
          <Button
            className="w-full md:w-[211px] h-[56px] bg-red-500 hover:bg-red-600"
            onClick={handleApplyCoupon}
          >
            Apply Coupon
          </Button>
        </div>

        <Card className="w-full md:w-1/3">
          <CardHeader>
            <CardTitle>Cart Total</CardTitle>
            <CardDescription>
              {items.length} {items.length === 1 ? "item" : "items"} in cart
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <Separator />
            {isCouponApplied && (
              <>
                <div className="flex justify-between text-green-600 font-semibold">
                  <span>Discount (20%):</span>
                  <span>- ${discount.toFixed(2)}</span>
                </div>
                <Separator />
              </>
            )}
            <div className="flex justify-between">
              <span>Shipping:</span>
              <span>{shipping === 0 ? "Free" : `$${Number(shipping).toFixed(2)}`}</span>

            </div>
            <Separator />
            <div className="flex justify-between font-semibold text-lg">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <Button
              className="w-full h-[56px] bg-red-500 hover:bg-red-600"
              onClick={handleProceedToCheckout}
            >
              Proceed to Checkout
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
