"use client";
import Image from "next/image";
import { useState } from "react";
import EmptyStore from "../EmptyPage/EmptyStore";

const StorePageComponent = () => {
  const [count, setCount] = useState(1);
  const [store, setStore] = useState(true);
  const upProduct = () => {
    let _count = count + 1;
    setCount(_count);
  };

  const slowCount = () => {
    let _count = count - 1;
    console.log(_count);
    if (_count <= 0) {
      setCount(0);
    } else {
      setCount(_count);
    }
  };

  return (
    <>
      {store ? (
        <div className="pt-20 pb-20 ">
          <div className="m-3 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 ">
            <div className="flex justify-between items-center">
              <p className="text-2xl">Sizning buyurtma</p>
              <p onClick={() => setStore(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="30"
                  height="30"
                  color="white"
                  fill="none"
                >
                  <path
                    d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M9.5 16.5L9.5 10.5"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M14.5 16.5L14.5 10.5"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </p>
            </div>
            <div className="flex items-center gap-3 mt-7">
              <p>
                {" "}
                <Image
                  src={"/icons/burger.webp"}
                  alt="IconBurger"
                  width={80}
                  height={80}
                />
              </p>
              <p className="text-2xl">Burger</p>
            </div>

            <div className="mt-7 flex justify-between">
              <div className="flex gap-4 items-center ">
                {" "}
                <button
                  style={{ backgroundColor: "red" }}
                  className="font-bold rounded-lg pl-3 pr-3 pt-1 pb-1"
                  onClick={slowCount}
                >
                  -
                </button>
                <p>{count}</p>
                <button
                  style={{ backgroundColor: "green" }}
                  className="font-bold rounded-lg pl-3 pr-3 pt-1 pb-1"
                  onClick={upProduct}
                >
                  +
                </button>
              </div>
              <div className="text-2xl">
                <p>{30000 * count} So'm</p>
              </div>
            </div>

            <div className="mt-7">
              <>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Buyurtma uchun izoh
                </label>
                <textarea
                  id=" Buyurtma uchun izoh"
                  rows={4}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=" Buyurtma uchun izoh yozing...."
                  defaultValue={""}
                />
              </>
            </div>

            <div className="mt-7">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Tolov turini tanlang
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Naqd</option>
                <option value="US">Click</option>
                <option value="CA">Payme</option>
                <option value="FR">Paynet</option>
                <option value="DE">Terminal</option>
              </select>
            </div>

            <div
              className="mt-7 flex justify-center w-full rounded-lg"
              style={{ backgroundColor: "#3291FF" }}
            >
              <button className="pt-4 pb-4 text-lg ">Buyurtma berish</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="pt-24">
          <EmptyStore />
        </div>
      )}
    </>
  );
};

export default StorePageComponent;
