---
title: "Mediasist: Medical Practice SaaS Platform"
slug: "mediasist-saas"
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
    I architected Mediasist with a **Backend-First** philosophy, anticipating future expansion into mobile apps and AI agents. The current operational model utilizes a "human-in-the-loop" approach where virtual assistants manage complex coordination, but the underlying technology was built for full automation from day one.

    The backend is built on **NestJS**, providing a strictly typed, modular architecture that ensures the API is robust enough to serve the current Next.js web client and future mobile applications simultaneously. The frontend uses Next.js for server-side rendering and optimized SEO for doctor discovery.

    To solve the endemic "no-show" problem, I implemented a robust **Event-Driven Notification System** using AWS SQS (Simple Queue Service) and SNS. This system handles appointment reminders asynchronously: when an appointment is created, an event is published to SQS with calculated trigger times. Lambda consumers process these delayed messages and send multi-channel notifications (Email, SMS, WhatsApp) via SNS.

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
  - title: "Multi-Tenant Data Isolation"
    problem: "Each medical practice must have absolute data isolation for privacy compliance, but a shared infrastructure for cost efficiency. A security breach exposing patient data across tenants would be catastrophic."
    solution: "Implemented PostgreSQL Row-Level Security (RLS) policies that enforce tenant isolation at the database layer. Every query automatically filters by practice_id based on the authenticated user's context. Conducted third-party security audit to validate isolation guarantees."
    impact: "Achieved SOC 2 Type I compliance readiness. Security audit confirmed zero cross-tenant data leakage in 10,000+ test scenarios."

  - title: "Asynchronous Notification Reliability"
    problem: "Appointment reminders must be delivered reliably (no-shows cost providers revenue), but traditional cron jobs risked duplicate sends or missed notifications during system maintenance."
    solution: "Leveraged AWS SQS's message visibility timeout and dead-letter queues. Messages that fail processing after 3 retries are routed to a DLQ for manual review. Implemented idempotency keys to prevent duplicate sends."
    impact: "Achieved 99.8% notification delivery rate. No-show rates for clients using the system dropped from 30% industry average to 12%."

metrics:
  - value: "3:1"
    label: "Doctor-to-Admin Ratio Improvement"
  - value: "99.8%"
    label: "Notification Delivery Rate"
  - value: "12%"
    label: "No-Show Rate (vs 30% Baseline)"
  - value: "Multi-Tenant"
    label: "Scalable Architecture"

screenshots:
  - "/projects/mediasist/landing.png"
  - "/projects/mediasist/dashboard.png"
---
