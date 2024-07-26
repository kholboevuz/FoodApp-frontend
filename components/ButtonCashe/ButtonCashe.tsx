"use client";

interface ButtonType {
  money: number;
}
const ButtonCashe = ({ money }: ButtonType) => {
  return (
    <div className="justify-center flex pb-10">
      <div className="">
        <button
          className="pt-4 rounded-lg  pb-4 pl-14 pr-14"
          style={{ backgroundColor: "#3291FF" }}
        >
          Savatga qo'shish {money} So'm
        </button>
      </div>
    </div>
  );
};

export default ButtonCashe;
