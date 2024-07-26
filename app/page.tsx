"use client";
import ButtonCashe from "@/components/ButtonCashe/ButtonCashe";
import ProductLoading from "@/components/Loading/CardLoading";
import ProductCard from "@/components/product/productCard";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(false);
  const [money, setMoney] = useState(0);

  const handleMoneyChange = (change: number) => {
    setMoney((prevMoney) => prevMoney + change);
  };

  return (
    <>
      <div className="flex justify-center h-screen">
        <div className="grid grid-cols-2 gap-20 mt-20 mb-24 overflow-y-auto">
          {loading ? (
            <ProductLoading />
          ) : (
            <>
              <ProductCard
                setActive={setActive}
                handleMoneyChange={handleMoneyChange}
              />
              <ProductCard
                setActive={setActive}
                handleMoneyChange={handleMoneyChange}
              />
              <ProductCard
                setActive={setActive}
                handleMoneyChange={handleMoneyChange}
              />
              <ProductCard
                setActive={setActive}
                handleMoneyChange={handleMoneyChange}
              />
              <ProductCard
                setActive={setActive}
                handleMoneyChange={handleMoneyChange}
              />
              <ProductCard
                setActive={setActive}
                handleMoneyChange={handleMoneyChange}
              />
              <ProductCard
                setActive={setActive}
                handleMoneyChange={handleMoneyChange}
              />
              <ProductCard
                setActive={setActive}
                handleMoneyChange={handleMoneyChange}
              />
              <ProductCard
                setActive={setActive}
                handleMoneyChange={handleMoneyChange}
              />
              <ProductCard
                setActive={setActive}
                handleMoneyChange={handleMoneyChange}
              />
              <ProductCard
                setActive={setActive}
                handleMoneyChange={handleMoneyChange}
              />
              <ProductCard
                setActive={setActive}
                handleMoneyChange={handleMoneyChange}
              />
            </>
          )}
        </div>
      </div>
      {active && (
        <div className="fixed w-full bottom-4 left-1/2 transform -translate-x-1/2 mb-10">
          <ButtonCashe money={money} />
        </div>
      )}
    </>
  );
}
