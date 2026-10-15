# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

React, TypeScript in strict mode, Vite, React Router, Tailwind CSS, Axios, Mock Service Worker, Vitest, and React Testing Library.

## Users

Portfolio reviewers and interviewers evaluating a front-end or software developer internship candidate. The demo models Employee, Manager, and Admin users completing an approval workflow.

## Product Purpose

Workflow Approval Dashboard is a personal portfolio project that demonstrates a clear, runnable enterprise-style approval workflow without claiming to be a production or company system.

## Capabilities and Constraints

The application is front-end only. Axios calls are intercepted by MSW, and demo data is persisted in localStorage. Permission checks are simulated in routes, controls, and the mock API; a real system requires server-side authorization. Request status follows Draft to Pending to Approved or Rejected. The project intentionally avoids a real backend, database, file uploads, Recharts, external state management, and unsupported terminal-state edits.

## Evidence on Hand

No real company data, workflows, customer claims, or production evidence may be invented or implied.

## Product Principles

- Keep code simple enough to explain in an internship interview.
- Make every implemented interaction genuinely runnable.
- Separate UI, business rules, API access, and mock persistence by responsibility.
- Describe only features that exist.

## Accessibility & Inclusion

Use semantic HTML, associated form labels, keyboard-operable controls, visible focus states, and sufficient color contrast.
