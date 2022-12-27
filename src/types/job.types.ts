export interface IJobList {
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

export interface IJob {
  _id: string;
  created_by: string;
  company_name: string;
  company_logo: string;
  company_short_description: string;
  company_website: string;
  company_email_address: string;
  title: string;
  category: string;
  location: string;
  job_type: string;
  salary_type: string;
  start_salary: number;
  end_salary: number;
  vacancy: number;
  expired_at: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

