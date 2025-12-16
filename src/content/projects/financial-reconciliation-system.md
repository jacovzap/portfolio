---
title: "Distributed Financial Reconciliation System"
category: "Real-Time Systems"
keyMetric: "20 Branches Synchronized"
oneLiner: "Real-time financial operations platform eliminating revenue leakage for national retail chain"

businessProblem: "A leading national construction retailer with 20+ branches faced significant revenue leakage and data inconsistency due to manual cash reporting. This led to financial discrepancies, lack of oversight, security risks with physical cash handling, and an inability to make data-driven strategic decisions."

constraints:
  - "Legacy ERP system integration requirements"
  - "Real-time synchronization across geographically distributed branches"
  - "Regulatory compliance for financial audit trails"
  - "Minimal disruption to existing operations during rollout"

role: "Lead Full-Stack Developer & System Architect"

architecture:
  description: |
    I architected a real-time financial module integrated into the client's existing ERP, utilizing NestJS for the backend and React for the frontend interfaces at both HQ and branch locations.

    The core workflow begins with the Finance Manager at HQ generating a "Deposit Order" which is instantly pushed to the specific Branch Manager's dashboard via **WebSockets**. This eliminated email delays and ensured branches acted on the most current financial directives in real-time.

    Branch managers digitize their cash reports within the system, and to validate expenses, the platform requires digital proof. I implemented a secure document handling pipeline where receipts, invoices, and bank vouchers are scanned and uploaded to **AWS S3**. To maintain security, the frontend requests Presigned URLs from the backend, allowing temporary, secure access without exposing long-term credentials.

    **Architectural Decision**: The bidirectional WebSocket connection was critical for operational efficiency. When the Central Office approves or rejects a report, the Branch Manager receives instant feedback to correct issues, eliminating the 24-48 hour lag inherent in email-based workflows.

  technologies:
    - name: "NestJS"
      reason: "Type-safe backend with WebSocket gateway support for bidirectional real-time communication"
    - name: "React"
      reason: "Component-based UI for responsive dashboards at HQ and branch terminals"
    - name: "WebSockets (Socket.io)"
      reason: "Real-time bidirectional event streaming for order creation and approval notifications"
    - name: "AWS S3 + Presigned URLs"
      reason: "Secure document storage with temporary access tokens, preventing credential exposure"
    - name: "PostgreSQL"
      reason: "ACID-compliant transactions for financial data integrity"

challenges:
  - title: "Real-Time Sync Across Unreliable Networks"
    problem: "Branch locations often had inconsistent internet connectivity, risking data loss or desynchronization during WebSocket disconnections."
    solution: "Implemented a hybrid approach with WebSocket for real-time updates and REST API fallback polling. Client-side state management (React Context) maintained optimistic UI updates with server reconciliation on reconnection."
    impact: "Achieved 99.5% uptime for real-time features with automatic degradation to polling mode during network instability, ensuring zero data loss."

  - title: "Audit Trail Compliance"
    problem: "Regulatory requirements demanded immutable audit logs for every financial transaction, approval, and rejection with precise timestamps and user attribution."
    solution: "Designed an event-sourcing pattern where every state change is recorded as an append-only event in PostgreSQL. Each event includes cryptographic signatures to prevent tampering."
    impact: "Full compliance with national financial auditing standards. The event log enabled forensic analysis during a fraud investigation, providing complete transaction history."

metrics:
  - value: "20+"
    label: "Branches Synchronized"
  - value: "50%"
    label: "Latency Reduction"
  - value: "100%"
    label: "Digital Audit Coverage"

screenshots:
  - "/projects/financial-reconciliation/dashboard.png"
  - "/projects/financial-reconciliation/approval-flow.png"
  - "/projects/financial-reconciliation/document-upload.png"
---
