---
title: "MCP Server Management"
weight: 7
---

Model Context Protocol — a standard protocol for connecting AI models to external context and tools

## What Is MCP?

The **Model Context Protocol**(MCP) is an open standard released by Anthropic in 2024 that lets AI models safely interact with external data sources, tools, and services.

```mermaid
flowchart LR
    A["AI model<br/>Claude / GPT"] --> B["MCP client"]
    B --> C["MCP server 1<br/>File system"]
    B --> D["MCP server 2<br/>Database"]
    B --> E["MCP server 3<br/>External API"]
    B --> F["MCP server 4<br/>Vector DB"]

    style A fill:#2563EB,stroke:#1D4ED8,color:#fff
    style B fill:#7C3AED,stroke:#6D28D9,color:#fff
    style C fill:#16A34A,stroke:#15803D,color:#fff
    style D fill:#EA580C,stroke:#C2410C,color:#fff
    style E fill:#0891B2,stroke:#0E7490,color:#fff
    style F fill:#1E3A5F,stroke:#1E3A5F,color:#fff
```

## Core Components of MCP

| Component | Role |
|---|---|
| **Resources** | Exposes data such as files, DB records, and API responses |
| **Tools** | Defines functions/actions the AI can invoke |
| **Prompts** | Reusable prompt templates |
| **Sampling** | Lets the server request inference from the AI |

## MCP Server Configuration Example

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/docs"]
    },
    "database": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-postgres"],
      "env": {
        "DATABASE_URL": "postgresql://..."
      }
    }
  }
}
```

## MCP Management Considerations from an Infrastructure Perspective

- **Security**: restrict the resources an MCP server can access using the principle of least privilege
- **Availability**: assess the impact on AI workflows if an MCP server goes down
- **Performance**: monitor how tool-call latency affects overall response time
- **Version management**: maintain backward compatibility when an MCP server's schema changes
