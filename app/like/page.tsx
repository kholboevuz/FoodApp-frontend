"use client";
import EmptyMessage from "@/components/EmptyPage/Empty";
import ProductLoading from "@/components/Loading/CardLoading";

import ProductCard from "@/components/product/productCard";
import { useState } from "react";

const LikePage = () => {
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(false);
  const [money, setMoney] = useState(0);
  return (
    <>
      <div className="pt-24">
        <EmptyMessage />
      </div>

      <div className="flex justify-center ">
        <div className="grid grid-cols-2 gap-20 mt-20 mb-28">
          {loading ? (
            <ProductLoading />
          ) : (
            <div>
              {/* <ProductCard setActive={setActive} setMoney={setMoney} /> */}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default LikePage;
