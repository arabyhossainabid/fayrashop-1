"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

let inputPasswordStyle: string =
  "rounded-lg w-full md:w-full h-12 resize-none";

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  color?: string | null;
  size?: string | null;
};

function CheckoutPage() {
  const router = useRouter();

  const [paymentMethod, setPaymentMethod] = useState("");
  const [coupon, setCoupon] = useState("");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [saveInfo, setSaveInfo] = useState(false);

  const [cartDiscount, setCartDiscount] = useState(0);
  const [checkoutDiscount, setCheckoutDiscount] = useState(0);

  const [billingDetails, setBillingDetails] = useState({
    name: "",
    company: "",
    address: "",
    apartment: "",
    city: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    const checkoutData = JSON.parse(localStorage.getItem("checkoutData") || "{}");
    if (!checkoutData.items || checkoutData.items.length === 0) {
      router.push("/");
      return;
    }
    setCartItems(checkoutData.items);
    setCartDiscount(checkoutData.discount || 0);

    localStorage.removeItem("cartItems");
  }, [router]);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalDiscount = cartDiscount + checkoutDiscount;
  const total = subtotal - totalDiscount;

  const applyCoupon = () => {
    if (coupon.trim().toUpperCase() === "FAYRASHOP") {
      setCheckoutDiscount(100);
    } else {
      setCheckoutDiscount(0);
    }
  };

  const placeOrder = async () => {
    if (cartItems.length === 0) return;
    const { name, address, city, phone, email } = billingDetails;
    if (!name || !address || !city || !phone || !email) return;
    if (!paymentMethod) return;
    if (!saveInfo) return;

    localStorage.removeItem("cartItems");
    localStorage.removeItem("checkoutData");
    localStorage.removeItem("isCheckedOut");

    setCartItems([]);
    setCartDiscount(0);
    setCheckoutDiscount(0);
    setCoupon("");
    setPaymentMethod("");
    setBillingDetails({
      name: "",
      company: "",
      address: "",
      apartment: "",
      city: "",
      phone: "",
      email: "",
    });
    setSaveInfo(false);

    await new Promise((resolve) => setTimeout(resolve, 500));
    router.push("/");
  };

  return (
    <section className="max-w-7xl mx-auto mt-10 items-center p-4 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* LEFT SIDE: Billing Details */}
      <div>
        <h3 className="text-4xl font-medium mb-12">Billing Details</h3>
        {[
          { label: "First Name", key: "name", required: true },
          { label: "Company Name", key: "company" },
          { label: "Street Address", key: "address", required: true },
          { label: "Apartment, floor, etc. (optional)", key: "apartment" },
          { label: "Town/City", key: "city", required: true },
          { label: "Phone Number", key: "phone", required: true },
          { label: "Email Address", key: "email", required: true },
        ].map(({ label, key, required }) => (
          <div className="mb-8" key={key}>
            <h3 className="font-normal text-base pb-2">
              {label} {required && <span className="text-red-500">*</span>}
            </h3>
            <Input
              required={required}
              name={label}
              className={inputPasswordStyle}
              type={key === "email" ? "email" : key === "phone" ? "tel" : "text"}
              value={billingDetails[key as keyof typeof billingDetails] || ""}
              onChange={(e) =>
                setBillingDetails({ ...billingDetails, [key]: e.target.value })
              }
            />
          </div>
        ))}

        <div className="flex gap-3 items-center">
          <Input
            className="w-6 h-6"
            type="checkbox"
            checked={saveInfo}
            onChange={(e) => setSaveInfo(e.target.checked)}
          />
          <p className="font-normal text-base">
            Save this information for faster check-out next time
          </p>
        </div>
      </div>

      {/* RIGHT SIDE: Order Summary */}
      <div>
        {/* Cart Items */}
        <div className="space-y-4 max-h-80 overflow-y-auto mb-8">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center gap-3"
            >
              <div className="w-16 h-16 overflow-hidden rounded">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="flex-grow font-normal text-base ps-6">
                {item.name} (×{item.quantity})
              </span>
              <span className="font-normal text-base">
                ৳{(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="pt-4 space-y-2 mb-8">
          <div className="flex justify-between pb-4">
            <span>Subtotal:</span>
            <span>৳{subtotal.toFixed(2)}</span>
          </div>
          <p className="border-b"></p>

          {totalDiscount > 0 && (
            <>
              <div className="flex justify-between my-4 text-green-600 font-semibold">
                <span>Discount:</span>
                <span>-৳{totalDiscount.toFixed(2)}</span>
              </div>
              <p className="border-b"></p>
            </>
          )}

          <div className="flex justify-between my-4">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <p className="border-b"></p>
          <div className="flex justify-between mt-4 font-semibold text-lg">
            <span>Total:</span>
            <span>৳{total.toFixed(2)}</span>
          </div>
        </div>

        {/* Payment Options */}
        <div className="space-y-4 mb-8">
          {[
            { value: "bank", label: "Bank" },
            { value: "cod", label: "Cash on Delivery" },
          ].map(({ value, label }) => (
            <div key={value}>
              <div
                className={`flex flex-col gap-4 ${value === "bank"
                  ? "md:flex-row md:items-center md:justify-between"
                  : ""
                  }`}
              >
                <div className="flex items-center gap-4">
                  <Input
                    type="radio"
                    name="payment"
                    value={value}
                    checked={paymentMethod === value}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-5 h-5 accent-red-500 "
                  />
                  <span className="font-medium text-base md:text-lg">
                    {label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coupon */}
        <div className="flex flex-col md:flex-row gap-2 mb-8">
          <Input
            type="text"
            placeholder="Enter coupon code"
            className="h-14"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
          />
          <Button
            onClick={applyCoupon}
            className="color-danger w-full md:w-52 h-14 text-white"
          >
            Apply
          </Button>
        </div>

        {/* Place Order Button */}
        <Button
          onClick={placeOrder}
          className="w-full md:w-auto h-14 color-danger text-white"
        >
          Place Order
        </Button>
      </div>
    </section>
  );
}

export default CheckoutPage;
