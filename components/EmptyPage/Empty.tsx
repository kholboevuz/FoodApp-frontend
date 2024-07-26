import Image from "next/image";

const EmptyMessage = () => {
  return (
    <div className="flex justify-center">
      <div className="text-lg text-center">
        <p>
          <Image src={"/icons/like.png"} alt="Empty" height={220} width={220} />
        </p>
        <p className="text-lg font-bold">Mahsulotlar mavjud emas</p>
      </div>
    </div>
  );
};

export default EmptyMessage;
