import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="bg-blue-600 py-8 px-8 text-xl font-bold text-white w-9/12 mx-auto flex justify-between items-center">
      <Link href={"/"}>Logo</Link>
      <Link href={"/add-product"}>Add Product</Link>
    </div>
  );
};

export default Header;
