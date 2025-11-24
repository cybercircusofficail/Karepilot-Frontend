"use client";

import { useState, useEffect } from "react";
import { CustomInput } from "@/components/common/CustomInput";
import { CustomSelect } from "@/components/common/CustomSelect";
import { Button } from "@/components/ui/button";
import { CreateAlertData } from "@/lib/alerts-and-geofencing/types";
import {
  alertTypes,
  priorityLevels,
  departments,
} from "@/lib/alerts-and-geofencing/data";
import { X, Bell } from "@/icons/Icons";

interface CreateAlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: CreateAlertData) => void;
  isLoading?: boolean;
}

export function CreateAlertModal({
  isOpen,
  onClose,
  onSubmit,
  isLoading = false,
}: CreateAlertModalProps) {
  const [formData, setFormData] = useState<CreateAlertData>({
    name: "",
    description: "",
    alertType: "",
    priority: "High",
    email: "",
    phone: "",
    department: "",
    location: "",
    floor: "",
    room: "",
  });

  useEffect(() => {
    if (!isOpen) {
      setFormData({
        name: "",
        description: "",
        alertType: "",
        priority: "High",
        email: "",
        phone: "",
        department: "",
        location: "",
        floor: "",
        room: "",
      });
    }
  }, [isOpen]);

  const handleSubmit = () => {
    if (isLoading) return;
    onSubmit(formData);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-2 sm:p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-card rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-2xl max-h-[95vh] overflow-hidden flex flex-col">
        <div className="px-4 sm:px-6 pt-4 sm:pt-6 pb-3 sm:pb-4 border-b border-border">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1 pr-2">
              <h2 className="text-lg sm:text-xl font-semibold text-card-foreground">
                Create Alert
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                Create a new alert or notification for your organization
              </p>
            </div>
            <Button
              onClick={onClose}
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground transition-colors -mt-1 cursor-pointer p-1 h-auto shrink-0"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>
        </div>

        <div className="px-4 sm:px-6 py-4 sm:py-6 overflow-y-auto flex-1">
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-card-foreground mb-1 sm:mb-2">
                Alert Details
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
                Provide information about the alert and its urgency
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <CustomSelect
                value={formData.alertType}
                onChange={(value) =>
                  setFormData({ ...formData, alertType: value })
                }
                options={alertTypes.map((type) => ({
                  name: type.label,
                  value: type.value,
                }))}
                placeholder="Select alert type"
                label="Alert Type"
                required
              />

              <CustomSelect
                value={formData.priority}
                onChange={(value) =>
                  setFormData({ ...formData, priority: value })
                }
                options={priorityLevels.map((level) => level.label)}
                placeholder="Select Priority"
                label="Priority"
                required
              />
            </div>

            <CustomInput
              value={formData.name}
              onChange={(value) => setFormData({ ...formData, name: value })}
              placeholder="e.g., Code Red - Emergency Situation"
              label="Alert Title"
              required
            />

            <CustomInput
              value={formData.description}
              onChange={(value) =>
                setFormData({ ...formData, description: value })
              }
              placeholder="e.g., Detailed description of the alert situation..."
              label="Alert Message"
              required
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              <CustomInput
                value={formData.location}
                onChange={(value) =>
                  setFormData({ ...formData, location: value })
                }
                placeholder="e.g. ICU Ward"
                label="Location"
                required
              />

              <CustomInput
                value={formData.floor}
                onChange={(value) =>
                  setFormData({ ...formData, floor: value })
                }
                placeholder="e.g. 3rd Floor"
                label="Floor"
                required
              />

              <CustomInput
                value={formData.room}
                onChange={(value) =>
                  setFormData({ ...formData, room: value })
                }
                placeholder="e.g. ICU-301"
                label="Room"
                required
              />
            </div>

            <CustomSelect
              value={formData.department}
              onChange={(value) =>
                setFormData({ ...formData, department: value })
              }
              options={departments.map((dept) => dept.label)}
              placeholder="Select department"
              label="Department"
              required
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-4 sm:px-6 py-3 sm:py-4 border-t border-border bg-muted/50">
          <Button
            onClick={onClose}
            variant="outline"
            className="w-full sm:w-auto px-4 sm:px-5 py-2.5 cursor-pointer text-sm font-medium text-muted-foreground bg-transparent border border-border rounded-lg hover:bg-accent transition-colors flex items-center justify-center gap-2"
          >
            <X className="w-4 h-4" />
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={isLoading}
            className="w-full sm:w-auto px-4 sm:px-5 flex gap-2 justify-center py-2.5 text-sm cursor-pointer font-medium text-white bg-[#3D8C6C] rounded-lg transition-colors hover:bg-[#3D8C6C]/90 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Bell className="w-4 h-4" />
            {isLoading ? "Creating..." : "Create Alert"}
          </Button>
        </div>
      </div>
    </div>
  );
}
