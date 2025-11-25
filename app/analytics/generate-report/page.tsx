"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { AnalyticsHeader } from "../components/AnalyticsHeader";
import { AvailableReports } from "./components/AvailableReports";
import { GenerateCustomReport } from "./components/GenerateCustomReport";
import {
  reportTemplates,
  reportSections,
  dateRanges,
  exportFormats,
  recentReports,
} from "@/lib/analytics/data";
import { RecentReports } from "@/components/common/RecentReports";

export default function Page() {
  const [templates, setTemplates] = useState(reportTemplates);
  const [sections, setSections] = useState(reportSections);

  const breadcrumbs = [
    { label: "Analytics & Reports", href: "/analytics" },
    { label: "Generate Reports" },
  ];

  const handleTemplateSelect = (templateId: number) => {
    setTemplates((prev) =>
      prev.map((template) => ({
        ...template,
        isSelected: template.id === templateId,
      }))
    );
  };

  const handleSectionToggle = (sectionId: number) => {
    setSections((prev) =>
      prev.map((section) =>
        section.id === sectionId
          ? { ...section, checked: !section.checked }
          : section
      )
    );
  };

  const handleExportData = () => {
    // TODO: Implement export data functionality
  };

  const handleGenerateReport = () => {
    // TODO: Implement generate report functionality
  };

  return (
    <DashboardLayout
      pageTitle="Analytics & Reports"
      showOrganizationHeader={true}
      showBackButton={true}
      backLink="/analytics"
      organizationName="Central Medical Hospital"
      breadcrumbs={breadcrumbs}
    >
      <div className="space-y-6">
        <AnalyticsHeader
          title="Generate Reports"
          subtitle="Generate comprehensive reports for your organization"
          onExportData={handleExportData}
          onGenerateReport={handleGenerateReport}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AvailableReports
            title="Available Reports"
            subtitle="Choose from pre-built report templates or create custom reports"
            templates={templates}
            onTemplateSelect={handleTemplateSelect}
          />

          <GenerateCustomReport
            title="Custom Export"
            subtitle="Create custom data reports with specific parameters"
            dateRangeOptions={dateRanges}
            formatOptions={exportFormats}
            sections={sections}
            onSectionToggle={handleSectionToggle}
            onGenerateReport={handleGenerateReport}
          />
        </div>
        <RecentReports
          title="Recent Reports"
          subtitle="Download or manage your recent data exports"
          reports={recentReports}
        />
      </div>
    </DashboardLayout>
  );
}
