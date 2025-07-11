import React, { useState, useEffect } from 'react';

const steps = [
  {
    title: 'Employee data import',
    desc: 'Easily onboard and manage employee records in one place.',
    details:
      'Import employee data from spreadsheets or integrated HR systems. Supports bulk uploads and data validation with real-time error checking.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
      </svg>
    ),
    benefits: ['Bulk import from Excel/CSV', 'Data validation', 'Duplicate detection', 'HR system integration'],
  },
  {
    title: 'Time & attendance sync',
    desc: 'Integrate timesheets and attendance for accurate payroll.',
    details:
      'Syncs with your time tracking tools to ensure accurate hours and leave data for every employee. Supports multiple time tracking systems.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    benefits: ['Real-time sync', 'Multiple time systems', 'Leave management', 'Overtime calculation'],
  },
  {
    title: 'Salary & tax auto-calculation',
    desc: 'Automate salary, tax, and deduction calculations.',
    details:
      'Calculates gross and net pay, taxes, and deductions automatically based on your rules and local compliance. Handles complex tax scenarios.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    benefits: ['Auto tax calculation', 'Compliance built-in', 'Deduction management', 'Bonus processing'],
  },
  {
    title: 'Approval workflows',
    desc: 'Streamline approvals with role-based access.',
    details:
      'Multi-level approval flows for payroll runs, with notifications and audit trails. Customizable approval hierarchies.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    benefits: ['Multi-level approval', 'Email notifications', 'Audit trails', 'Role-based access'],
  },
  {
    title: 'Payment execution',
    desc: 'Execute payments securely through integrated bank APIs.',
    details:
      'Initiate salary payments directly from the platform with secure, bank-level integrations. Supports multiple payment methods.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    benefits: ['Bank API integration', 'Multiple payment methods', 'Secure transactions', 'Payment tracking'],
  },
  {
    title: 'Payslip generation & reporting',
    desc: 'Generate payslips and compliance-ready reports instantly.',
    details:
      'Employees get digital payslips; admins get downloadable, compliance-ready reports. Customizable templates and automated distribution.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    benefits: ['Digital payslips', 'Custom templates', 'Auto distribution', 'Compliance reports'],
  },
];

const PayrollStepper = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    // ... (copy the full SolutionHorizontalStepper JSX here, replacing steps/current/setCurrent as needed)
    // For brevity, you can copy the full JSX from the original file
  );
};

export default PayrollStepper; 