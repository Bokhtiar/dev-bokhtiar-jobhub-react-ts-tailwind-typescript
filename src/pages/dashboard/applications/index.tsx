import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NetworkServices } from "network";
import { DataTable } from "components/table";
import { MdRemoveRedEye } from "react-icons/md";
import { IRDataColumns } from "types/datatable.types";
import { PrimaryOutlineButton } from "components/button";
import { IApplicationList } from "types/application.types";
import { networkErrorHandeller } from "utils/helper";

export const ApplicationIndex: React.FC = (): JSX.Element => {
  const [data, setData] = useState<IApplicationList[] | []>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [perPage, setPerPage] = useState<number>(10);
  const [totalRows, setTotalRows] = useState<number>(0);

  /* Fetch data */
  const fetchData = useCallback(
    async (page: number) => {
      try {
        setLoading(true);
        const response = await NetworkServices.PrivateApplication.index({
          page,
          limit: perPage,
        });
        if (response && response.status === 200) {
          setData(response?.data?.data);
          setTotalRows(response?.data?.paginate?.total_items);
        }
        setLoading(false);
      } catch (error: any) {
        if (error) {
          setLoading(false);
          networkErrorHandeller(error);
        }
      }
    },
    [perPage]
  );

  useEffect(() => {
    fetchData(1);
  }, [fetchData]);

  /* handle paginate page change */
  const handlePageChange = (page: number) => fetchData(page);

  /* handle paginate row change */
  const handlePerRowsChange = async (newPerPage: number, page: number) => {
    setLoading(true);
    const response = await NetworkServices.PrivateApplication.index({
      page,
      limit: newPerPage,
    });
    setData(response.data.data);
    setPerPage(newPerPage);
    setLoading(false);
  };

  /* data columns */
  const columns: IRDataColumns[] = [
    {
      name: "",
      maxWidth: "60px",
      cell: (row) => (
        <img
          src={row.job.company_logo}
          alt="Company avatar"
          className="w-[50px] h-[50px] rounded-full mx-auto"
        />
      ),
    },
    {
      name: "Company",
      maxWidth: "150px",
      selector: (row) => row.job.company_name,
    },
    {
      name: "Title",
      selector: (row) => row.job.title,
    },
    {
      name: "Type",
      selector: (row) => row.job.job_type,
    },
    {
      name: "Salary",
      minWidth: "150px",
      selector: (row) => `TK ${row.job.start_salary}-${row.job.end_salary}`,
    },
    {
      name: "Location",
      selector: (row) => row.job.location,
    },
    {
      name: "Status",
      selector: (row) => row.status,
    },
    {
      name: "Action",
      maxWidth: "70px",
      cell: (row) => (
        <div className="flex gap-1">
          <Link to={`/dashboard/applications/${row._id}`}>
            <PrimaryOutlineButton
              type="button"
              size="md"
              className="!rounded-full !px-[14px] !py-3"
            >
              <MdRemoveRedEye size={18} />
            </PrimaryOutlineButton>
          </Link>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6 bg-white rounded-lg">
      <p className="text-gray-700 text-2xl lg:text-3xl mb-1">
        All Applications
      </p>
      <p className="text-gray-400 text-sm mb-8 xl:mb-10">
        Your submitted applications.
      </p>

      <DataTable
        data={data}
        columns={columns}
        loading={isLoading}
        pagination={true}
        paginationServer={true}
        totalRows={totalRows}
        handlePerRowsChange={handlePerRowsChange}
        handlePageChange={handlePageChange}
        noDataMessage="No jobs available."
      />
    </div>
  );
};
