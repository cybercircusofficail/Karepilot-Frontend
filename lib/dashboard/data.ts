import {
  uploadFloorPlanIcon,
  addMedicalPoiIcon,
  trackEquipmentIcon,
  emergencyAlertsIcon,
  assignNurseStaffZoneIcon,
  downloadDailyReportIcon,
  addWardLocationIcon,
  markEmergencyExitIcon,
} from "@/icons/Assets";
import {
  Compass,
  Building2,
  Settings,
  Bell,
  Coffee,
  Camera,
  Pill,
  TestTube,
  ImageIcon,
} from "@/icons/Icons";

export const facilities = [
  { name: "Navigation", icon: Compass },
  { name: "Facility", icon: Building2 },
  { name: "Service", icon: Settings },
  { name: "Emergency", icon: Bell },
  { name: "Amenity", icon: Coffee },
  { name: "Medical Department", icon: Camera },
  { name: "Pharmacy", icon: Pill },
  { name: "Laboratory", icon: TestTube },
  { name: "Medical Imaging", icon: ImageIcon },
];

export const buildings = [
  "Main Hospital",
  "Emergency Wing",
  "Diagnostic Wing",
  "Pediatric Wing",
];

export const floors = ["Ground Floor", "1st Floor", "2nd Floor", "3rd Floor"];

export const quickActions = [
  {
    id: 1,
    title: "Upload Floor Plan",
    description: "Import a floor plan for a hospital in PDF, PNG, or CAD",
    icon: uploadFloorPlanIcon,
    action: "upload-floor-plan",
  },
  {
    id: 2,
    title: "Add Medical POI",
    description: "Edit key reports, Crisis, ERs, Pharmacists, Waiting Areas",
    icon: addMedicalPoiIcon,
    action: "add-medical-poi",
  },
  {
    id: 3,
    title: "Track Equipment",
    description:
      "Track live location of staff, visitors, or equipment on floors",
    icon: trackEquipmentIcon,
  },
  {
    id: 4,
    title: "Emergency Alerts",
    description: "Set alerts for unauthorized access to critical areas",
    icon: emergencyAlertsIcon,
  },
  {
    id: 5,
    title: "Assign a Nurse or Staff to a Zone",
    description:
      "Allocate medical or support staff to specific layer or geofenced zones",
    icon: assignNurseStaffZoneIcon,
  },
  {
    id: 6,
    title: "Add Ward Locations",
    description:
      "Create markers for patient wards and assign floor/ward numbers",
    icon: addWardLocationIcon,
  },
  {
    id: 7,
    title: "Download Daily Report",
    description:
      "View and export live reports showing hospital events and departments",
    icon: downloadDailyReportIcon,
  },
  {
    id: 8,
    title: "Mark Emergency Exit Location",
    description: "Define and label safe exit routes for emergencies",
    icon: markEmergencyExitIcon,
  },
];
