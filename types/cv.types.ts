// types/cv.types.ts

export interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
  profileImage?:string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  graduationYear: string;
}

enum SkillLevel {
  Beginner = "Basico",
  Intermediate = "Intermedio",
  Advanced = "Avanzado",
  Expert = "Experto",
} 
export interface Skills{
  id: string;
  skillName:string;
  level:SkillLevel;
}

export interface CVData {
  personalInfo: PersonalInfo;
  experiences: Experience[];
  education: Education[];
  skils:Skills[];
}
