export type Certification = {
  name: string;
  issuer: string;
  category: string;
  blurb: string;
  /**
   * Set a real credential / verification URL when available.
   * When null, the card renders without a verification link instead of inventing one.
   */
  verifyUrl: string | null;
  /** Optional credential ID — leave null unless you have the exact value. */
  credentialId: string | null;
};

export const certifications: Certification[] = [
  {
    name: "AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services (AWS Academy)",
    category: "Cloud",
    blurb:
      "Foundational cloud-computing concepts: AWS global infrastructure, core services, security, and the shared-responsibility model.",
    verifyUrl: null,
    credentialId: null,
  },
  {
    name: "Palo Alto Networks Cybersecurity",
    issuer: "Palo Alto Networks",
    category: "Cybersecurity",
    blurb:
      "Cybersecurity fundamentals including threat landscapes, network security concepts, and the principles behind modern security platforms.",
    verifyUrl: null,
    credentialId: null,
  },
];
