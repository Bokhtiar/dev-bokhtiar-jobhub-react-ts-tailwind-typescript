import { useCallback, useEffect, useState } from "react";
import { Images } from "utils/images";
import { NetworkServices } from "network";
import { DataTable } from "components/table";
import { MdRemoveRedEye } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { IRDataColumns } from "types/datatable.types";
import { IApplicantList } from "types/applicant.types";
import { PrimaryOutlineButton } from "components/button";
import { dateparse, networkErrorHandeller } from "utils/helper";
import { ApplicationStatusModal } from "components/modal/application-status.modal";

export const ApplicantsIndex: React.FC = (): JSX.Element => {
  const { id } = useParams();
  const [data, setData] = useState<IApplicantList[] | []>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [visible, setVisible] = useState<boolean>(false);
  const [visibleValue, setVisibleValue] = useState<IApplicantList | null>(null);

  /* Fetch data */
  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await NetworkServices.PrivateJob.applicants({
        id: id || "",
      });
      if (response && response.status === 200) {
        setData(response?.data?.data);
      }
      setLoading(false);
    } catch (error: any) {
      if (error) {
        setLoading(false);
        networkErrorHandeller(error);
      }
    }
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  /* Handle visibility */
  const handleVisibility = (data: IApplicantList) => {
    setVisibleValue(data);
    setVisible(true);
  };

  /* Close visibility */
  const closeVisibility = () => {
    fetchData();
    setVisibleValue(null);
    setVisible(false);
  };

  /* data columns */
  const columns: IRDataColumns[] = [
    {
      name: "Image",
      maxWidth: "60px",
      cell: (row) => (
        <img
          src={row.created_by.profile_image || Images.Avatar}
          alt="Applicant avatar"
          className="w-[50px] h-[50px] rounded-full mx-auto"
        />
      ),
    },
    {
      name: "Name",
      maxWidth: "150px",
      selector: (row) => row.created_by.name,
    },
    {
      name: "Status",
      selector: (row) => row.status,
    },
    {
      name: "Applied at",
      selector: (row) => dateparse(row.createdAt),
    },
    {
      name: "Action",
      maxWidth: "200px",
      cell: (row) => (
        <div className="flex gap-1">
          <Link to={`/dashboard/jobs/applicants/profile/${row.created_by._id}`}>
            <PrimaryOutlineButton
              type="button"
              size="md"
              className="!rounded-full !px-[14px] !py-3"
            >
              <MdRemoveRedEye size={18} />
            </PrimaryOutlineButton>
          </Link>

          <PrimaryOutlineButton
            type="button"
            size="md"
            className="!rounded-full !px-[14px] !py-3"
            onClick={() => handleVisibility(row)}
          >
            Change Status
          </PrimaryOutlineButton>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6 bg-white rounded-lg">
      <p className="text-gray-700 text-2xl lg:text-3xl mb-1">All Applicants</p>
      <p className="text-gray-400 text-sm mb-8 xl:mb-10">
        Applicants list of this job.
      </p>

      <DataTable
        data={data}
        columns={columns}
        loading={isLoading}
        pagination={false}
        paginationServer={false}
        noDataMessage="No applicants available."
      />

      {/* Application status update modal */}
      {visibleValue && (
        <ApplicationStatusModal
          data={visibleValue}
          visible={visible}
          toggleVisible={closeVisibility}
        />
      )}
    </div>
  );
};
