interface Job {
  _id: string;
  created_by: string;
  company_name: string;
  company_logo: string;
  title: string;
  location: string;
  job_type: string;
  start_salary: number;
  end_salary: number;
  createdAt: string;
}

export interface IApplicationList {
  _id: string;
  created_by: string;
  job: Job;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
