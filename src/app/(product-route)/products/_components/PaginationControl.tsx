"use client";

import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";

interface PaginationControlProps {
  hasPrevPage: boolean;
  hasNextPage: boolean;
}

const PaginationControl: React.FC<PaginationControlProps> = ({
  hasNextPage,
  hasPrevPage,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "9";
  return (
    <div className="w-full flex justify-center items-center p-4 mt-20">
      <div className="flex items-center gap-6">
        <Button
          variant={"outline"}
          disabled={!hasPrevPage}
          size={"lg"}
          onClick={() => {
            router.push(
              `/products/?page=${Number(page) - 1}&per_page=${per_page}`
            );
          }}
        >
          prev
        </Button>
        <Button
          size={"lg"}
          disabled={!hasNextPage}
          onClick={() => {
            router.push(
              `/products/?page=${Number(page) + 1}&per_page=${per_page}`
            );
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default PaginationControl;
