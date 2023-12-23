import { Github } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full px-4 mt-12 sm:px-6 md:px-16 py-6 flex justify-between items-center border-t">
      <div className="logo">
        <h1 className="text-2xl font-bold">Next Ecommerce</h1>
      </div>

      <div>
        <Link href={"https://github.com/Md-Zainulabdin"} target="_blank">
          <Github className="text-gray-500" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
