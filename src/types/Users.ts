export type Gender = 'Male' | 'Female' | 'Other';
type MaritalStatus = 'Single' | 'Married' | 'Divorced' | 'Widowed';
type ResidenceType = 'Apartment' | 'House' | 'Condo' | 'Townhouse';
type EmploymentStatus = 'Employed' | 'Unemployed';
type Sector = 'FinTech' | 'Engineering' | 'Construction' | 'Health';
type Status = 'active' | 'inactive' | 'pending' | 'blacklisted';
export type EducationLevel = 'B.Sc' | 'M.Sc' | 'HND' | 'PhD';
type Relationship = 'Sister' | 'Brother' | 'Father' | 'Mother' | 'Husband' | 'Wife';

export interface PersonalInfo {
  fullName: string;
  bvn: number;
  email: string;
  phoneNumber: string;
  gender: Gender;
  maritalStatus: MaritalStatus;
  children: string | number;
  typeOfResidence: ResidenceType;
}

export interface EducationalInfo {
  level: EducationLevel;
  employmentStatus: EmploymentStatus;
  sector: Sector;
  duration: '2 years' | '1 year' | '4 years' | '6 months' | '10 years' | '9 months';
  officeEmail: string;
  monthlyIncome: string;
  loanRepay: string;
}

export interface Socials {
  twitter: string;
  facebook: string;
  instagram: string;
}

export interface Guarantor {
  fullName: string;
  phoneNumber: string;
  email: string;
  relationship: Relationship;
}

export interface User {
  userId: string;
  organization: string;
  personalInfo: PersonalInfo;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: Status;
  loanAmount: number;
  bankAccount: number;
  bankName: string;
  educationalInfo: EducationalInfo;
  socials: Socials;
  guarantor: Guarantor;
}
