import { getCenteredSubset } from "@/src/utils/getCenteredSubset";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface PaginationProps {
  pages?: number;
  pageActive?: number;
}

export const Pagination = ({ pages = 1, pageActive = 1 }: PaginationProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const pagesArrayFormatted = Array.from<number, number>(
    { length: pages },
    (_, index) => index + 1
  );
  const currentQueries = new URLSearchParams(
    Array.from(searchParams.entries())
  );

  const pagesSliced = getCenteredSubset(pagesArrayFormatted, pageActive);

  const handleSetPage = (page: number) => {
    if (page < 1 || page > pages) return;

    currentQueries.set("pagina", page.toString());
    const queriesUpdated = currentQueries.toString();
    const query = queriesUpdated ? `?${queriesUpdated}` : "";

    router.push(`${pathname}${query}`);
  };

  return (
    <>
      {pages && (
        <div className="flex justify-center items-center gap-4">
          <button
            className={`flex justify-center items-center bg-white p-2 rounded-sm transition-opacity duration-300 hover:opacity-80 ${
              pageActive <= 1 && "text-gray-300"
            }`}
            disabled={pageActive <= 1}
            onClick={() => handleSetPage(pageActive - 1)}>
            &lt;&lt; Anterior
          </button>

          <ul className="flex gap-2">
            {pagesSliced.map((pageNumber) => (
              <li key={`página-${pageNumber}`}>
                <button
                  onClick={() => handleSetPage(pageNumber)}
                  className={`p-2 min-w-[2rem] min-h-[2rem] rounded-sm transition-opacity duration-300 hover:opacity-80  ${
                    pageNumber === pageActive
                      ? "bg-blue text-white"
                      : "bg-white text-black"
                  }`}>
                  {pageNumber}
                </button>
              </li>
            ))}
          </ul>

          <button
            className={`flex justify-center items-center bg-white p-2 rounded-sm transition-opacity duration-300 hover:opacity-80 ${
              pageActive >= pages && "text-gray-300"
            }`}
            disabled={pageActive >= pages}
            onClick={() => handleSetPage(pageActive + 1)}>
            Próximo &gt;&gt;
          </button>
        </div>
      )}
    </>
  );
};
