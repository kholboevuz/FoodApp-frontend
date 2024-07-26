import Image from "next/image";
import Link from "next/link";

const EmptyStore = () => {
  return (
    <div className="flex justify-center">
      <div className="text-lg text-center">
        <p>
          <Image
            src={"/icons/store.png"}
            alt="Empty"
            height={200}
            width={200}
          />
        </p>
        <p className="text-lg font-bold">Savat bo'sh </p>
        <p className="text-lg font-bold">Mahsulotlarni qo'shing</p>
        <div className="pt-8">
          <Link href={"/"}>
            <button className="pt-2 pb-2 pl-5 pr-5 rounded-lg bg-blue-700">
              Mahsulotlar +
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmptyStore;
