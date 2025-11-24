"use client";

import { useState, useEffect } from "react";
import { CustomInput } from "@/components/common/CustomInput";
import { CustomSelect } from "@/components/common/CustomSelect";
import { ToggleSwitch } from "@/components/common/ToggleSwitch";
import { Button } from "@/components/ui/button";
import {
  CreateGeofenceZoneData,
  NotificationSettings,
} from "@/lib/alerts-and-geofencing/types";
import { X, MapPin } from "@/icons/Icons";

interface CreateGeofenceZoneModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: CreateGeofenceZoneData) => void;
  isLoading?: boolean;
}

export function CreateGeofenceZoneModal({
  isOpen,
  onClose,
  onSubmit,
  isLoading = false,
}: CreateGeofenceZoneModalProps) {
  const [formData, setFormData] = useState<CreateGeofenceZoneData>({
    name: "",
    type: "Monitoring",
    description: "",
    notifications: {
      email: true,
      sms: false,
      push: false,
      sound: false,
    },
  });

  const zoneTypes = ["Monitoring", "Restricted", "Alert", "Notification"];

  useEffect(() => {
    if (!isOpen) {
      setFormData({
        name: "",
        type: "Monitoring",
        description: "",
        notifications: {
          email: true,
          sms: false,
          push: false,
          sound: false,
        },
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

  const handleNotificationChange = (
    key: keyof NotificationSettings,
    value: boolean
  ) => {
    setFormData((prev) => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [key]: value,
      },
    }));
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
                Create Geofence Zone
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                Set up a new monitoring zone with custom alert rules
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
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <CustomInput
                value={formData.name}
                onChange={(value) => setFormData({ ...formData, name: value })}
                placeholder="e.g. ICU Restricted Zone"
                label="Zone Name"
                required
              />
              <div className="mt-1">
                <CustomSelect
                value={formData.type}
                onChange={(value) => setFormData({ ...formData, type: value })}
                options={zoneTypes}
                placeholder="Select Zone Type"
                label="Zone Type"
                required
              />
              </div>
            </div>

            <div className="mt-6">
              <CustomInput
                value={formData.description}
                onChange={(value) =>
                  setFormData({ ...formData, description: value })
                }
                placeholder="e.g., describe the purpose and rules for this zone..."
                label="Description"
                required
              />
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-semibold text-card-foreground mb-4">
                Notification Settings
              </h3>
              <div className="space-y-4">
                <ToggleSwitch
                  checked={formData.notifications.email}
                  onChange={() =>
                    handleNotificationChange(
                      "email",
                      !formData.notifications.email
                    )
                  }
                  label="Email Notifications"
                  description="Send alerts via email"
                />

                <ToggleSwitch
                  checked={formData.notifications.sms}
                  onChange={() =>
                    handleNotificationChange("sms", !formData.notifications.sms)
                  }
                  label="SMS Notifications"
                  description="Send urgent alerts via SMS"
                />

                <ToggleSwitch
                  checked={formData.notifications.push}
                  onChange={() =>
                    handleNotificationChange("push", !formData.notifications.push)
                  }
                  label="Push Notifications"
                  description="Send mobile push notifications"
                />

                <ToggleSwitch
                  checked={formData.notifications.sound}
                  onChange={() =>
                    handleNotificationChange(
                      "sound",
                      !formData.notifications.sound
                    )
                  }
                  label="Sound Alerts Notifications"
                  description="Play audio alerts on triggers"
                />
              </div>
            </div>
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
            <MapPin className="w-4 h-4" />
            {isLoading ? "Creating..." : "Create Zone"}
          </Button>
        </div>
      </div>
    </div>
  );
}
