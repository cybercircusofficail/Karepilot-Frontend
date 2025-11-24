"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Siren, ChevronDown } from "@/icons/Icons";
import { Organization } from "@/lib/types/organization/organization";

interface AlertsAndGeofencingHeaderProps {
  onCreateZone: () => void;
  onCreateAlert: () => void;
  organizations?: Organization[];
  selectedOrganizationId?: string;
  onOrganizationChange?: (organizationId: string) => void;
}

export function AlertsAndGeofencingHeader({
  onCreateZone,
  onCreateAlert,
  organizations = [],
  selectedOrganizationId,
  onOrganizationChange,
}: AlertsAndGeofencingHeaderProps) {
  const [isOrgDropdownOpen, setIsOrgDropdownOpen] = useState(false);
  const orgDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        orgDropdownRef.current &&
        !orgDropdownRef.current.contains(event.target as Node)
      ) {
        setIsOrgDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOrg = organizations.find((org) => org.id === selectedOrganizationId);

  return (
    <div className="flex flex-col gap-4 mb-6">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4">
        <div className="flex-1">
          <h1 className="text-xl sm:text-2xl font-bold text-card-foreground mb-1 sm:mb-2">
            Alerts & Geofencing
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Monitor alerts and manage geofence zones for your organization.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
          <Button
            onClick={onCreateZone}
            variant="outline"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-muted-foreground bg-transparent border border-border rounded-lg hover:bg-accent transition-colors cursor-pointer"
          >
            <MapPin className="w-4 h-4" />
            <span>Create Zone</span>
          </Button>

          <Button
            onClick={onCreateAlert}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-[#3D8C6C] rounded-lg transition-colors hover:bg-[#3D8C6C]/90 cursor-pointer"
          >
            <Siren className="w-4 h-4" />
            <span>Create Alert</span>
          </Button>
        </div>
      </div>

      {organizations.length > 1 && (
        <div className="relative" ref={orgDropdownRef}>
          <label className="block text-xs font-medium text-muted-foreground mb-1.5">
            Select Organization
          </label>
          <button
            onClick={() => setIsOrgDropdownOpen(!isOrgDropdownOpen)}
            className="flex items-center justify-between gap-2 px-4 py-2.5 bg-muted border border-border rounded-lg text-card-foreground hover:bg-muted/80 transition-colors w-full sm:w-auto min-w-[250px] cursor-pointer"
          >
            <span className="text-sm font-medium truncate">
              {selectedOrg?.name || "Select Organization"}
            </span>
            <ChevronDown
              className={`w-4 h-4 text-muted-foreground transition-transform shrink-0 ${
                isOrgDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isOrgDropdownOpen && (
            <div className="absolute top-full left-0 mt-1 w-full sm:w-auto min-w-[250px] bg-card border border-border rounded-lg shadow-lg z-50 max-h-60 overflow-auto">
              <div className="p-2">
                {organizations.map((org) => (
                  <button
                    key={org.id}
                    onClick={() => {
                      onOrganizationChange?.(org.id);
                      setIsOrgDropdownOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-md hover:bg-accent transition-colors ${
                      selectedOrganizationId === org.id ? "bg-accent" : ""
                    }`}
                  >
                    <div className="flex-1 text-left">
                      <div className="text-card-foreground font-medium">{org.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {[org.city, org.country].filter(Boolean).join(", ") || "No location"}
                      </div>
                    </div>
                    {selectedOrganizationId === org.id && (
                      <div className="w-2 h-2 rounded-full bg-[#3D8C6C] shrink-0 ml-2" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
