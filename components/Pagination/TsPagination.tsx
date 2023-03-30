import Link from "next/link";

const Pagination = ({ currentPage, totalPages }: any) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;
  const prevPage = `/blog/page/${currentPage - 1}`;
  const nextPage = `/blog/page/${currentPage + 1}`;

  return (
    <nav className="flex items-center justify-between mt-8">
      {!isFirstPage && (
        <Link href={prevPage}>
          <div className="text-blue-600 hover:text-blue-800">
            ← Previous Page
          </div>
        </Link>
      )}
      {!isLastPage && (
        <Link href={nextPage}>
          <div className="text-blue-600 hover:text-blue-800">Next Page →</div>
        </Link>
      )}
    </nav>
  );
};

export default Pagination;
