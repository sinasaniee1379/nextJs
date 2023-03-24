import pushRouter from "@/utils/pushRouter";
import { Pagination } from "@mui/material";
import { useRouter } from "next/router";
const PaginationComponent = ({ page, totalPages }) => {
  const router = useRouter();
  const handlePage = (e, page) => {
    router.query.page = page;
    pushRouter(router);
  };
  return (
    <div className="col-span-6 flex justify-center" dir="ltr">
      {totalPages > 1 && (
        <Pagination
          count={totalPages}
          page={page}
          color="primary"
          onChange={handlePage}
        />
      )}
    </div>
  );
};

export default PaginationComponent;
