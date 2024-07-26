"use client";
import Image from "next/image";
import { useState } from "react";

interface ProductCardType {
  setActive: (active: boolean) => void;
  handleMoneyChange: (change: number) => void;
}

const ProductCard = ({ setActive, handleMoneyChange }: ProductCardType) => {
  const [like, setLike] = useState(false);
  const [add, setAdd] = useState(true);
  const [count, setCount] = useState(0);

  const price = 20000;

  const handleClickLike = () => {
    setLike((prevLike) => !prevLike);
  };

  const handleClickAdd = () => {
    setAdd(false);
    setActive(true);
    setCount(1);
    handleMoneyChange(price);
  };

  const upProduct = () => {
    let _count = count + 1;
    setCount(_count);
    handleMoneyChange(price);
  };

  const slowCount = () => {
    let _count = count - 1;
    if (_count >= 0) {
      setCount(_count);
      handleMoneyChange(-price);
    }
  };

  return (
    <div className="text-center">
      <div className="flex justify-center">
        <Image
          src={"/icons/burger.webp"}
          alt="IconBurger"
          width={100}
          height={100}
        />
      </div>
      <div className="mt-1">
        <p>
          Burger · <span className="font-bold">{price.toLocaleString()}</span>
        </p>
      </div>
      <div className="mt-2 flex justify-center">
        <div>
          {add ? (
            <div className="flex gap-3 items-center">
              <button
                style={{ backgroundColor: "#F9A918" }}
                className="font-bold rounded-lg pl-4 pr-4 pt-1 pb-1"
                onClick={handleClickAdd}
              >
                Add +
              </button>
              <button onClick={handleClickLike}>
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    color="white"
                    fill={like ? "white" : "none"}
                  >
                    <path
                      d="M2 12.5C2 11.3954 2.89543 10.5 4 10.5C5.65685 10.5 7 11.8431 7 13.5V17.5C7 19.1569 5.65685 20.5 4 20.5C2.89543 20.5 2 19.6046 2 18.5V12.5Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.4787 7.80626L15.2124 8.66634C14.9942 9.37111 14.8851 9.72349 14.969 10.0018C15.0369 10.2269 15.1859 10.421 15.389 10.5487C15.64 10.7065 16.0197 10.7065 16.7791 10.7065H17.1831C19.7532 10.7065 21.0382 10.7065 21.6452 11.4673C21.7145 11.5542 21.7762 11.6467 21.8296 11.7437C22.2965 12.5921 21.7657 13.7351 20.704 16.0211C19.7297 18.1189 19.2425 19.1678 18.338 19.7852C18.2505 19.8449 18.1605 19.9013 18.0683 19.9541C17.116 20.5 15.9362 20.5 13.5764 20.5H13.0646C10.2057 20.5 8.77628 20.5 7.88814 19.6395C7 18.7789 7 17.3939 7 14.6239V13.6503C7 12.1946 7 11.4668 7.25834 10.8006C7.51668 10.1344 8.01135 9.58664 9.00069 8.49112L13.0921 3.96056C13.1947 3.84694 13.246 3.79012 13.2913 3.75075C13.7135 3.38328 14.3652 3.42464 14.7344 3.84235C14.774 3.8871 14.8172 3.94991 14.9036 4.07554C15.0388 4.27205 15.1064 4.37031 15.1654 4.46765C15.6928 5.33913 15.8524 6.37436 15.6108 7.35715C15.5838 7.46692 15.5488 7.5801 15.4787 7.80626Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </p>
              </button>
            </div>
          ) : (
            <div className="flex gap-4 items-center justify-center">
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
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
