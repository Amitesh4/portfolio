export type SocialLink = {
  label: string;
  href: string;
  handle?: string;
};

export type SiteConfig = {
  name: string;
  shortName: string;
  role: string;
  headline: string;
  intro: string;
  location: string;
  degree: string;
  college: string;
  collegeShort: string;
  graduation: string;
  focus: string[];
  github: string;
  linkedin: string;
  /** Set this to a real address when ready. Empty string hides the email button. */
  email: string;
  /**
   * Set to "/resume.pdf" (place the PDF in the public folder) once the file exists.
   * When null, the resume button renders in a clearly-labelled "needs file" state.
   */
  resumeUrl: string | null;
  resumeName: string;
};

export const site: SiteConfig = {
  name: "Amitesh P",
  shortName: "Amitesh",
  role: "Software Developer · AI/ML & Cybersecurity",
  headline: "Building practical solutions at the intersection of software, AI, and cybersecurity.",
  intro:
    "I'm an Information Technology engineering student who learns by building. I care about turning ideas into working software — from wireless-security monitoring to applied machine learning and everyday web tools.",
  location: "Hyderabad, India",
  degree: "B.E. in Information Technology",
  college: "Maturi Venkata Subba Rao Engineering College (MVSR), Hyderabad",
  collegeShort: "MVSR Engineering College",
  graduation: "2027",
  focus: ["Software Development", "AI / ML", "Cybersecurity"],
  github: "https://github.com/Amitesh4",
  linkedin: "https://www.linkedin.com/in/p-amitesh-43b9632a9/",
  email: "amiteshpanaganti@gmail.com",
  resumeUrl: "/resume.pdf",
  resumeName: "Amitesh_P_Resume.pdf",
};

export const navLinks = [
  { id: "top", label: "Hello" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "certifications", label: "Certs" },
  { id: "contact", label: "Contact" },
] as const;
