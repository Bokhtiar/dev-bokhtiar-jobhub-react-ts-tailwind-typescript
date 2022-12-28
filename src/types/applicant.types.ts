interface CreatedBy {
  _id: string;
  name: string;
  profile_image: any;
}

export interface IApplicantList {
  _id: string;
  created_by: CreatedBy;
  job: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IApplicant {
  _id: string;
  name: string;
  phone: string;
  email: string;
  dob: string;
  gender: string;
  role: string;
  designation: any;
  profile_image: any;
  present_address: any;
  permanent_address: any;
  website: any;
  about: any;
  resume: any;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
