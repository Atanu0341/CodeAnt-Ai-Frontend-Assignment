export interface AuthButton {
  id: string;
  label: string;
  iconPath: string;
  category: "saas" | "self-hosted"; // Add a category to differentiate groups
}

export const authButtons: AuthButton[] = [
  {
    id: "github",
    label: "Sign in with GitHub",
    iconPath: "./github.svg",
    category: "saas",
  },
  {
    id: "bitbucket",
    label: "Sign in with Bitbucket",
    iconPath: "./bitBucket.svg",
    category: "saas",
  },
  {
    id: "azure",
    label: "Sign in with Azure Devops",
    iconPath: "./azure.svg",
    category: "saas",
  },
  {
    id: "gitlab",
    label: "Sign in with GitLab",
    iconPath: "./gitLab.svg",
    category: "saas",
  },
  {
    id: "gitlabsh",
    label: "Sign in with GitLab",
    iconPath: "./gitLab.svg",
    category: "self-hosted",
  },
  {
    id: "sso",
    label: "Sign in with SSO",
    iconPath: "./sso.svg",
    category: "self-hosted",
  },
];

export interface Repository {
  name: string
  isPublic: boolean
  language: string
  size: string
  updatedAt: string
}

export const repositories: Repository[] = [
  { name: 'design-system', isPublic: true, language: 'React', size: '7320 KB', updatedAt: '1 day ago' },
  { name: 'codeant-ci-app', isPublic: false, language: 'Javascript', size: '5871 KB', updatedAt: '2 days ago' },
  { name: 'analytics-dashboard', isPublic: false, language: 'Python', size: '4521 KB', updatedAt: '5 days ago' },
  { name: 'mobile-app', isPublic: true, language: 'Swift', size: '3096 KB', updatedAt: '3 days ago' },
  { name: 'e-commerce-platform', isPublic: false, language: 'Java', size: '6210 KB', updatedAt: '6 days ago' },
  { name: 'blog-website', isPublic: true, language: 'HTML/CSS', size: '1876 KB', updatedAt: '4 days ago' },
  { name: 'social-network', isPublic: false, language: 'PHP', size: '5432 KB', updatedAt: '7 days ago' },
]
