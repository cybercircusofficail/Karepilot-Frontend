import { TabItem } from "@/lib/types/common/navigation";
import { MapPin, CheckCircle, Edit3, Building2 } from "@/icons/Icons";
import { StatItemWithIcon } from "@/components/common/StatsGridWithIcons";

export interface FloorPlan {
  id: number;
  title: string;
  subtitle: string;
  status: "Published" | "Draft" | "Archived" | "Building" | "New";
  statusColor: string;
  fileType: string;
  fileSize: string;
  modifiedDate: string;
  scale: string;
  version: string;
  hasPreview: boolean;
  building: string;
  floor: string;
}

export const mapManagerTabs: TabItem[] = [
  { id: "floor-plans", label: "Floor Plans", href: "/map-manager" },
  { id: "buildings", label: "Buildings", href: "/map-manager/buildings" },
  { id: "settings", label: "Settings", href: "/map-manager/settings" },
];
