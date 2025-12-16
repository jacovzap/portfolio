---
title: "Industrial Cost Accounting & Resource Management Platform"
category: "On-Premise Systems"
keyMetric: "30% Efficiency Gain"
oneLiner: "Specialized ERP for artisan leather producers with government-mandated data sovereignty"

businessProblem: "Small and medium-sized leather producers in Bolivia lacked access to specialized software, relying on informal methods (spreadsheets, paper records) that hindered growth. Generic ERP solutions failed to accommodate industry-specific workflows like piece-rate labor and complex cost accounting for raw materials."

constraints:
  - "On-Premise deployment for national data sovereignty compliance"
  - "Niche industry workflows not supported by commercial software"
  - "Government partnership requiring secure access management"
  - "Limited technical literacy among end users"

role: "Solo Full-Stack Developer & Systems Designer"

architecture:
  description: |
    On-site requirement gathering with industry associations revealed unique workflows that shaped the system design. The platform was built using Express and PostgreSQL for robust relational data management, with a React frontend optimized for low-bandwidth environments.

    The system addresses critical gaps: a **Piece-Rate Labor Module** designed specifically for calculating wages based on "products delivered" rather than hours worked (a local industry standard), support for deferred payments and partial product delivery in the sales module, and a sophisticated **Cost Accounting Engine** that aggregates utilities (water, electricity) and raw material costs to provide producers with exact "Cost per Unit."

    **Deployment Strategy Shift**: Initially designed for cloud deployment, regulatory requirements mandated **On-Premise hosting** to comply with Bolivia's data protection laws. The application was configured and deployed to government-managed servers, ensuring all data remained within national borders while maintaining secure remote access for producers.

    **Trade-off Accepted**: On-premise deployment increased maintenance complexity and limited automatic scaling, but it was non-negotiable for regulatory compliance and government partnership viability.

  technologies:
    - name: "Express.js"
      reason: "Lightweight and flexible backend for custom business logic without framework overhead"
    - name: "PostgreSQL"
      reason: "Complex relational queries for multi-entity cost aggregation and inventory tracking"
    - name: "React"
      reason: "Component-based UI optimized for low-bandwidth with code splitting and lazy loading"
    - name: "On-Premise Linux Server"
      reason: "Government-mandated data sovereignty and compliance with national data protection laws"

challenges:
  - title: "Complex Multi-Variable Cost Calculation"
    problem: "Producers needed real-time cost per unit calculations that factored in variable utility costs, fluctuating raw material prices, and labor efficiency metrics across different product lines."
    solution: "Designed a normalized database schema with cost allocation tables. Implemented a calculation engine that runs nightly jobs to aggregate costs and update product pricing recommendations based on the previous day's production data."
    impact: "Producers gained precise visibility into profit margins for the first time, enabling strategic decisions on which product lines to prioritize. Average profit margin increased 15% within 6 months."

  - title: "User Adoption with Limited Technical Literacy"
    problem: "Target users (small business owners) had minimal computer experience, risking project failure despite technical soundness."
    solution: "Conducted iterative usability testing with real producers. Simplified UI to focus on 3 primary workflows (Production Entry, Sales Recording, Cost Review). Created video tutorials in local dialect and implemented a hotline support system via the government partner."
    impact: "Achieved 85% adoption rate within first quarter, with producers reporting the 'Mission Control' dashboard as their primary business tool for daily decisions."

metrics:
  - value: "30%"
    label: "Efficiency Improvement"
  - value: "85%"
    label: "User Adoption Rate"
  - value: "15%"
    label: "Profit Margin Increase"

screenshots:
  - "/projects/industrial-erp/dashboard.png"
  - "/projects/industrial-erp/cost-analysis.png"
  - "/projects/industrial-erp/production-tracking.png"
---
