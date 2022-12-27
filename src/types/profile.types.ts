export interface IProfile {
  _id: string;
  name: string;
  phone: string;
  email: string;
  dob: string;
  gender: string;
  role: string;
  designation: string;
  profile_image: string;
  present_address: string;
  permanent_address: string;
  website: string;
  about: string;
  resume: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IProfileUpdate {
  name: string;
  dob: string;
  gender: string;
  designation: string;
  present_address: string;
  permanent_address: string;
  website: string;
  about: string;
}

export interface IPasswordChange {
  old_password: string;
  new_password: string;
  re_type_new_password: string;
}

export interface IProfileImageChange {
  image: string;
}

export interface IResumeAdd {
  resume: string;
}
