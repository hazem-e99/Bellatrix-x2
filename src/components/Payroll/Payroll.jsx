import React, { useState } from 'react';

function Accordion() {
  const steps = [
    "Employee data import",
    "Time & attendance sync",
    "Salary & tax auto-calculation",
    "Approval workflows",
    "Payment execution",
    "Payslip generation & reporting",
  ];
  const [open, setOpen] = useState(null);
  return (
    <div>
      {steps.map((label, idx) => (
        <div key={idx}>
          <button
            onClick={() => setOpen(open === idx ? null : idx)}
            aria-expanded={open === idx}
          >
            <span>
              <span>{idx + 1}</span>
              <span>{label}</span>
            </span>
            <span>{open === idx ? '▶' : '▶'}</span>
          </button>
          {open === idx && (
            <div>
              {label}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function SolutionTabs() {
  const steps = [
    "Employee data import",
    "Time & attendance sync",
    "Salary & tax auto-calculation",
    "Approval workflows",
    "Payment execution",
    "Payslip generation & reporting",
  ];
  const [selected, setSelected] = useState(0);
  return (
    <div>
      <div>
        {steps.map((label, idx) => (
          <button
            key={idx}
            onClick={() => setSelected(idx)}
            aria-selected={selected === idx}
          >
            {idx + 1}
          </button>
        ))}
      </div>
      <div>
        <div>{steps[selected]}</div>
        <div>{steps[selected]}</div>
      </div>
    </div>
  );
}

function SolutionVerticalStepper() {
  const steps = [
    { title: "Employee data import", desc: "Easily onboard and manage employee records in one place.", details: "Import employee data from spreadsheets or integrated HR systems. Supports bulk uploads and data validation." },
    { title: "Time & attendance sync", desc: "Integrate timesheets and attendance for accurate payroll.", details: "Syncs with your time tracking tools to ensure accurate hours and leave data for every employee." },
    { title: "Salary & tax auto-calculation", desc: "Automate salary, tax, and deduction calculations.", details: "Calculates gross and net pay, taxes, and deductions automatically based on your rules and local compliance." },
    { title: "Approval workflows", desc: "Streamline approvals with role-based access.", details: "Multi-level approval flows for payroll runs, with notifications and audit trails." },
    { title: "Payment execution", desc: "Execute payments securely through integrated bank APIs.", details: "Initiate salary payments directly from the platform with secure, bank-level integrations." },
    { title: "Payslip generation & reporting", desc: "Generate payslips and compliance-ready reports instantly.", details: "Employees get digital payslips; admins get downloadable, compliance-ready reports." }
  ];
  const [current, setCurrent] = useState(0);

  return (
    <section>
      <div>
        <div>
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              <button
                onClick={() => setCurrent(idx)}
                aria-current={idx === current}
              >
                <span>{idx + 1}</span>
                <span>{step.title}</span>
              </button>
              {idx < steps.length - 1 && (
                <span>|</span>
              )}
            </React.Fragment>
          ))}
        </div>
        <div>
          <div>
            <div>{current + 1}</div>
            <div>{steps[current].title}</div>
            <div>{steps[current].desc}</div>
            <div>{steps[current].details}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PayrollPage() {
  return (
    <div>
      {/* Hero Section */}
      <section>
        <div>
          <div></div>
          <h1>Simplify Payroll for Your company</h1>
          <p>Automated, compliant, and hassle-free payroll tailored for software consultancy teams.</p>
          <a href="#contact">Request a Free Demo</a>
        </div>
      </section>

      {/* Pain Points */}
      <section>
        <div>
          <div></div>
          <h2>The Payroll Struggles We Eliminate</h2>
          <div>
            <div>
              <strong>Our solution addresses the most common payroll challenges faced by consultancy firms:</strong>
              <ul>
                {[
                  {text: "Delayed salary processing and errors"},
                  {text: "Manual tax calculations and compliance risks"},
                  {text: "Lack of visibility and transparency for employees"},
                  {text: "Difficulty scaling payroll operations across geographies"},
                  {text: "Disconnected systems leading to data silos"}
                ].map((item, idx) => (
                  <li key={idx}>{item.text}</li>
                ))}
              </ul>
            </div>
            <div>
              <img src="/images/implementation.jpg" alt="Payroll Implementation illustration showing digital payroll process" />
            </div>
          </div>
        </div>
      </section>

     {/* Solution Overview */}
<section>
  <div>
    <h2>Payroll System Built for Software Consultancies</h2>
    <p>Streamline your entire payroll lifecycle — from onboarding to salary disbursement — with a secure, intuitive platform.</p>
    <h3>Core Workflow</h3>
    <SolutionVerticalStepper />
  </div>
</section>

      {/* Key Features */}
      <section>
        <div>
          <div></div>
          <h2>Key Features for Modern Consultancies</h2>
          <div>
            {[
              { title: "Automated Payroll Runs", desc: "Set up payroll once and let it run automatically, with full audit trails." },
              { title: "Tax & Compliance", desc: "Stay compliant with local tax laws and generate reports in one click." },
              { title: "Employee Self-Service", desc: "Employees access payslips, tax docs, and leave balances anytime." },
              { title: "Real-Time Analytics", desc: "Get instant insights into payroll costs, trends, and forecasts." },
              { title: "Multi-Country Support", desc: "Run payroll for teams in multiple countries, currencies, and languages." },
              { title: "Integrations", desc: "Connect with HR, time tracking, and accounting tools you already use." },
            ].map((f, idx) => (
              <div key={idx} tabIndex="0">
                <div>{f.title}</div>
                <div>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section>
        <div>
          <h2>How It Works</h2>
          <div>
            <p>
            Our payroll process is simple: upload employee and contract details, sync timesheets and leave data, let the system run payroll automatically on schedule, approve via role-based access, execute payments through integrated bank APIs, and download payslips & compliance-ready reports—all in one platform.
          </p>
          </div>
        </div>
      </section>

      {/* Why Perfect for Software Consultancy Firms */}
      <section>
        <div>
          <div>
            <div>
              <h2>Why It's Perfect for Software Consultancy Firms</h2>
              <ul>
                <li>Handles flexible work models (remote, hybrid, contract)</li>
                <li>Built-in compliance for local and global operations</li>
                <li>Reduces time spent on admin work by 70%</li>
                <li>Supports dynamic teams with frequent changes</li>
                <li>Scales with your business — from startup to enterprise</li>
              </ul>
            </div>
            <div>
              <img src="/images/join_us_in_building_cta.jpg" alt="Why Perfect for Software Consultancy Firms" />
            </div>
          </div>
        </div>
      </section>
      {/* Pricing / Plans */}
      <section>
        <div>
          <h2>Flexible Plans Based on Company Size:</h2>
          <div>
            {/* Starter Plan */}
            <div>
              <h3>Starter</h3>
              <p>Up to 20 employees</p>
              <ul>
                <li>Basic payroll processing</li>
                <li>Email support</li>
                <li>Employee self-service</li>
              </ul>
              <a href="#contact">Get Started</a>
            </div>
            {/* Growth Plan */}
            <div>
              <h3>Growth</h3>
              <p>20–100 employees</p>
              <ul>
                <li>Everything in Starter</li>
                <li>Advanced reporting</li>
                <li>Priority support</li>
              </ul>
              <a href="#contact">Get Started</a>
            </div>
            {/* Enterprise Plan */}
            <div>
              <h3>Enterprise</h3>
              <p>100+ employees</p>
              <ul>
                <li>Everything in Growth</li>
                <li>Custom integrations</li>
                <li>Dedicated account manager</li>
              </ul>
              <a href="#contact">Contact Sales</a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section>
        <div>
          <div>
            <div>
              <h2>FAQs</h2>
              <div>
                <strong>Q: Does this system support global payroll?</strong>
                <p>A: Yes, we support multi-country and multi-currency payroll operations.</p>
              </div>
              <div>
                <strong>Q: Can it integrate with our existing HR system?</strong>
                <p>A: Absolutely, we offer seamless integrations and open APIs.</p>
              </div>
              <div>
                <strong>Q: How long does implementation take?</strong>
                <p>A: Most companies are onboarded in less than 2 weeks.</p>
              </div>
            </div>
            <div>
              <img src="/images/payroll.png" alt="Payroll FAQ" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}