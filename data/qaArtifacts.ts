export interface QaArtifact { id:string; title:string; environment:string; preconditions:string; steps:string[]; expected:string; actual:string; severity:"Low"|"Medium"|"High"|"Critical"; impact:string; evidence:string }

export const missingReceiptBug:QaArtifact={
  id:"missing-receipt-warning-bug",
  title:"Missing Receipt Warning Not Displayed for Corporate User Policy",
  environment:"Chrome / Windows 11",
  preconditions:"Corporate account; Missing Receipt policy set to User; user warning preference enabled.",
  steps:["Sign in as the corporate user.","Open an expense report.","Add an expense without a receipt.","Submit the report for approval."],
  expected:"A warning appears indicating that the report contains an expense without a receipt.",
  actual:"The report proceeds without displaying the warning.",
  severity:"Medium",
  impact:"A user could continue the workflow without being alerted that supporting documentation was missing.",
  evidence:"Screenshot or screen recording attached to the working issue (omitted from this sanitized sample).",
};
