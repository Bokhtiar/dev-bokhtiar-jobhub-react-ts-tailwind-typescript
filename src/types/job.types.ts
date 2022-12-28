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

export interface IJobCreate {
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
}

interface CreatedBy {
  _id: string;
  name: string;
  profile_image: string;
}

export interface ICommentList {
  _id: string;
  created_by: CreatedBy;
  job: string;
  description: string;
  createdAt: string;
  __v: number;
}

export interface IJobStatus {
  id: string;
  status: string;
}
