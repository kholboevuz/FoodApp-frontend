"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function SideBar() {
  const [active, setActive] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    setActive(pathName === "/");
  }, [pathName]);
  console.log(active);
  return (
    <div className="fixed bottom-0 left-0 flex  h-48 w-full items-end justify-center from-white via-white dark:from-black dark:via-black mb- lg:static lg:size-auto lg:bg-none">
      <div className="w-full">
        <div className="w-full rounded-lg bg-gray-900">
          <div className="flex p-5 justify-center gap-20 items-center">
            <div>
              <Link href={"/"}>
                <p
                  className={pathName === "/" ? "text-blue-400 " : "text-white"}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={pathName === "/" ? "30" : "24"}
                    height={pathName === "/" ? "30" : "24"}
                    fill="none"
                  >
                    <path
                      d="M3.16405 11.3497L4 11.5587L4.45686 16.1005C4.715 18.6668 4.84407 19.9499 5.701 20.7249C6.55793 21.5 7.84753 21.5 10.4267 21.5H13.5733C16.1525 21.5 17.4421 21.5 18.299 20.7249C19.1559 19.9499 19.285 18.6668 19.5431 16.1005L20 11.5587L20.836 11.3497C21.5201 11.1787 22 10.564 22 9.85882C22 9.35735 21.7553 8.88742 21.3445 8.59985L13.1469 2.86154C12.4583 2.37949 11.5417 2.37949 10.8531 2.86154L2.65549 8.59985C2.24467 8.88742 2 9.35735 2 9.85882C2 10.564 2.47993 11.1787 3.16405 11.3497Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 16C14.2005 16.6224 13.1502 17 12 17C10.8498 17 9.79952 16.6224 9 16"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>{" "}
                </p>
              </Link>
            </div>

            <div>
              <Link href={"/like"}>
                <p
                  className={
                    pathName === "/like" ? "text-blue-400 " : "text-white"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={pathName === "/like" ? "30" : "24"}
                    height={pathName === "/like" ? "30" : "24"}
                    fill="none"
                  >
                    <path
                      d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>{" "}
                </p>
              </Link>
            </div>

            <div>
              <Link href={"/store"}>
                <p
                  className={
                    pathName === "/store" ? "text-blue-400 " : "text-white"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={pathName === "/store" ? "30" : "24"}
                    height={pathName === "/store" ? "30" : "24"}
                    fill="none"
                  >
                    <path
                      d="M3.87289 17.0194L2.66933 9.83981C2.48735 8.75428 2.39637 8.21152 2.68773 7.85576C2.9791 7.5 3.51461 7.5 4.58564 7.5H19.4144C20.4854 7.5 21.0209 7.5 21.3123 7.85576C21.6036 8.21152 21.5126 8.75428 21.3307 9.83981L20.1271 17.0194C19.7282 19.3991 19.5287 20.5889 18.7143 21.2945C17.9 22 16.726 22 14.3782 22H9.62182C7.27396 22 6.10003 22 5.28565 21.2945C4.47127 20.5889 4.27181 19.3991 3.87289 17.0194Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M17.5 7.5C17.5 4.46243 15.0376 2 12 2C8.96243 2 6.5 4.46243 6.5 7.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>{" "}
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
