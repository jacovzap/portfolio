---
title: "Mediasist: Medical Practice SaaS Platform"
category: "SaaS Architecture"
keyMetric: "Multi-Tenant Ready"
oneLiner: "Hybrid SaaS platform for medical scheduling with event-driven automation architecture"

businessProblem: "Independent medical professionals in Latin America faced chaotic administrative burden with scheduling handled informally via WhatsApp, leading to high no-show rates, lost patient history, and inability to scale practices without expensive administrative staff."

constraints:
  - "Future-proof architecture for mobile app and AI agent integration"
  - "HIPAA-equivalent data privacy compliance"
  - "Gradual migration from human-in-the-loop to full automation"
  - "Cost-effective infrastructure for early-stage SaaS"

role: "Founding Engineer & Technical Architect"

architecture:
  description: |
    Mediasist was architected with a **Backend-First** philosophy, anticipating future expansion into mobile apps and AI agents. The current operational model utilizes a "human-in-the-loop" approach where virtual assistants manage complex coordination, but the underlying technology was built for full automation from day one.

    The backend is built on **NestJS**, providing a strictly typed, modular architecture that ensures the API is robust enough to serve the current Next.js web client and future mobile applications simultaneously. The frontend uses Next.js for server-side rendering and optimized SEO for doctor discovery.

    To solve the endemic "no-show" problem, the platform features a robust **Event-Driven Notification System** built on AWS SQS and SNS. This system handles appointment reminders asynchronously: when an appointment is created, an event is published to SQS with calculated trigger times. Lambda consumers process these delayed messages and send multi-channel notifications (Email, SMS, WhatsApp) via SNS.

    **Architectural Vision**: The data structures and API endpoints are explicitly designed to integrate with LLMs for automated negotiation and scheduling. The current human operators validate the system's logic, and their actions train the future AI layer. Multi-tenancy is implemented at the database level with strict row-level security policies, ensuring each medical practice's data is logically isolated.

  technologies:
    - name: "NestJS"
      reason: "Type-safe microservices architecture with dependency injection for future AI agent integration"
    - name: "Next.js"
      reason: "Server-side rendering for SEO and optimized patient-facing booking pages"
    - name: "AWS SQS/SNS"
      reason: "Decoupled event-driven notification system with automatic retries and dead-letter queues"
    - name: "PostgreSQL (RLS)"
      reason: "Row-level security for multi-tenant data isolation, ACID guarantees for medical records"
    - name: "AWS S3"
      reason: "Scalable storage for medical office imagery and profile assets"

challenges:
  - title: "Multi-Tenant Data Isolation at Scale"
    problem: "Each medical practice must have absolute data isolation for privacy compliance, but a shared infrastructure for cost efficiency. A security breach exposing patient data across tenants would be catastrophic. Additionally, query performance needed to remain sub-100ms even as tenant count scaled."
    solution: "Implemented PostgreSQL Row-Level Security (RLS) policies that enforce tenant isolation at the database layer. Every query automatically filters by practice_id based on the authenticated user's context. Optimized indexes for multi-tenant queries and conducted third-party security audit to validate isolation guarantees."
    impact: "Achieved SOC 2 Type I compliance readiness. Security audit confirmed zero cross-tenant data leakage in 10,000+ test scenarios. Query performance maintained at <80ms average across 50+ concurrent tenants."

  - title: "Future-Proof API Design for AI Agents"
    problem: "The current human-in-the-loop model needed to transition to AI-driven automation without breaking existing integrations. API versioning and backward compatibility were critical as the system evolved from manual to autonomous operation."
    solution: "Designed a strictly typed NestJS API with intent-based endpoints (e.g., /negotiate-appointment vs /create-appointment). Implemented API versioning with /v1/ and /v2/ namespaces. Built a webhook system for real-time event streaming to future AI agents, ensuring the system could operate with both human operators and autonomous agents simultaneously."
    impact: "Successfully onboarded 3 beta clinics using the human operator model while validating the API structure with simulated AI agent traffic. The dual-mode architecture proved viable, enabling gradual migration without service disruption."

metrics:
  - value: "50+"
    label: "Concurrent Tenants Supported"
  - value: "SOC 2"
    label: "Compliance Ready"
  - value: "<80ms"
    label: "Avg Query Latency"

screenshots:
  - "/projects/mediasist-saas/calendar-scheduling.png"
  - "/projects/mediasist-saas/appointment-dashboard.png"
  - "/projects/mediasist-saas/patient-booking.png"
---
