import { Users, CheckCircle, Building, Wifi } from "@/icons/Icons";

export const statsData = [
  {
    id: "total-users",
    title: "Total Users",
    value: 4,
    icon: Users,
    iconBg: "bg-gray-100",
    iconColor: "text-gray-600"
  },
  {
    id: "active-users",
    title: "Active Users",
    value: 6,
    icon: CheckCircle,
    iconBg: "bg-green-100",
    iconColor: "text-green-600"
  },
  {
    id: "departments",
    title: "Departments",
    value: 1,
    icon: Building,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600"
  },
  {
    id: "online-now",
    title: "Online Now",
    value: 4,
    icon: Wifi,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600"
  }
];

export const tabs = [
  { id: "users", label: "Users", href: "/users-and-roles" },
  {
    id: "roles",
    label: "Roles & Permissions",
    href: "/users-and-roles/roles-and-permissions",
  },
  {
    id: "departments",
    label: "Departments",
    href: "/users-and-roles/departments",
  },
];

export const filterOptions = [
  {
    label: "All Roles",
    options: [
      { label: "All Roles", value: "all" },
      { label: "Admin", value: "admin" },
      { label: "Manager", value: "manager" },
      { label: "Technician", value: "technician" },
      { label: "Staff", value: "staff" },
      { label: "Security", value: "security" },
      { label: "Viewer", value: "viewer" },
    ],
    defaultValue: "all",
  },
  {
    label: "All Departments",
    options: [
      { label: "All Departments", value: "all" },
      { label: "ICU", value: "icu" },
      { label: "Emergency", value: "emergency" },
      { label: "Pharmacy", value: "pharmacy" },
      { label: "Security", value: "security" },
      { label: "Administration", value: "administration" },
      { label: "Maintenance", value: "maintenance" },
    ],
    defaultValue: "all",
  },
  {
    label: "All Status",
    options: [
      { label: "All Status", value: "all" },
      { label: "Active", value: "active" },
      { label: "Inactive", value: "inactive" },
    ],
    defaultValue: "all",
  },
];