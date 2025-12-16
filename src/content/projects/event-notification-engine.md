---
title: "High-Scale Event Notification Engine"
slug: "event-notification-engine"
category: "Event-Driven Architecture"
keyMetric: "99.9% Reliability"
oneLiner: "Precision notification delivery for 30k+ daily events using serverless architecture"

businessProblem: "Users needed notifications exactly 10 minutes before subscribed events. The existing monolithic system experienced increasing latency and failures during peak traffic, lacked retry mechanisms leading to lost critical alerts, and incurred prohibitive infrastructure costs during idle times."

constraints:
  - "Cost optimization during low-traffic windows"
  - "Kubernetes horizontal scaling with multiple pods"
  - "Idempotency requirements for distributed systems"
  - "Precision timing within 10-minute window"

role: "Lead Backend Architect"

architecture:
  description: |
    I architected a deferred execution system leveraging NestJS as the orchestration layer, integrated with Amazon SNS for the delivery mechanism and Redis (via Bull) for distributed queue management.

    The core innovation was an **Optimized Batch Injection** strategy: instead of continuous polling, a daily CronJob executes during the server's lowest traffic window, querying all events scheduled for the upcoming 24 hours. For each event, the system calculates the precise trigger time (Event Time - 10 minutes) and injects these jobs into a Redis Queue with specific delays.

    This architecture decouples the "fetching" logic from the "sending" logic, allowing the system to idle efficiently until the exact moment a notification is required. When the delayed job processes, it triggers Amazon SNS to push the notification to all topic subscribers.

    **Trade-off Accepted**: Users subscribing to a topic after the daily Cron execution but before an event on the same day would not receive that specific notification. However, this approach drastically reduced database polling and compute costs compared to near-real-time polling, making it the optimal solution for balancing system stability with operational expenditure at this growth stage.

  technologies:
    - name: "NestJS"
      reason: "Type-safe dependency injection and modular architecture for complex business logic orchestration"
    - name: "Bull (Redis)"
      reason: "Distributed delayed job queue with persistence and horizontal scaling support"
    - name: "Amazon SNS"
      reason: "Managed pub/sub delivery with automatic retries and topic-based fanout"
    - name: "PostgreSQL"
      reason: "Relational data model for event subscriptions and user management"

challenges:
  - title: "Concurrent Cron Execution on Kubernetes Pods"
    problem: "With horizontal scaling across multiple K8s pods, the CronJob occasionally triggered on multiple instances simultaneously, resulting in duplicate notifications—a critical UX failure that eroded user trust."
    solution: "Implemented a cryptographic hashing mechanism to ensure idempotency. We generate a unique hash based on event metadata and timestamp. Before enqueuing a job, the system checks Redis for this specific hash key. If the key exists, the duplicate job is discarded silently."
    impact: "Achieved 100% job uniqueness guarantee with zero duplicate sends. The hashing approach also provided operational flexibility: if an event time changed, we could update the job in Redis directly, and the hash check would prevent stale duplicates."

  - title: "Precision Timing at Scale"
    problem: "Ensuring notifications fired within a tight 10-minute window while processing 30k+ daily events required careful system clock synchronization and job processing guarantees."
    solution: "Leveraged Redis's delay mechanism with NTP-synchronized server clocks. Implemented monitoring alerts for job processing delays exceeding 30 seconds, allowing proactive infrastructure scaling."
    impact: "Maintained sub-minute precision for 99.9% of notifications, meeting strict SLA requirements for time-sensitive user alerts."

metrics:
  - value: "30k+"
    label: "Daily Events Processed"
  - value: "99.9%"
    label: "Delivery Reliability"
  - value: "10min"
    label: "Precision Window"
  - value: "60%"
    label: "Cost Reduction vs Polling"
---
