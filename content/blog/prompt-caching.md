---
title: "Prompt Caching: How to Cut LLM Operating Costs Dramatically Without Sacrificing Quality"
date: 2026-07-01T00:00:00+09:00
authors:
  - name: jeonck
    link: https://github.com/jeonck
    image: https://github.com/jeonck.png
tags:
  - LLM
  - Cost Optimization
  - Prompt Engineering
---

One of the biggest headaches in operating an AI service is the combination of "input token cost" and "response latency." That worry only deepens for services that reference long documents or rely on complex system instructions. You can't shrink the context without hurting answer quality, and when the cost becomes unbearable, the first optimization strategy you should reach for is prompt caching.
<!--more-->

## 1. What Is Prompt Caching?

Many people mistakenly think of prompt caching as "saving previous conversation content and reusing it." Strictly speaking, though, that describes response caching, not prompt caching.

The core idea behind prompt caching is **reusing the intermediate results from processing the repeated leading portion (prefix) of the input**.

When an LLM processes a prompt, it internally runs an enormous amount of computation to understand the text. Recomputing the same instructions or reference documents from scratch on every single request is inefficient. Prompt caching stores this "repeated prefix" in system memory and, on subsequent requests, retrieves it instantly instead of recalculating it.

## 2. Real-World Impact: The Care Access Case

What does this look like in practice? Care Access, a medical records analysis service, adopted Amazon Bedrock's prompt caching and achieved remarkable results:

- **Cost reduction**: 86% reduction in overall processing cost
- **Speed improvement**: 66% reduction in processing time per record

For workloads structured around long, repetitive documents (context) like medical records — where a new question is asked against the same context each time — prompt caching enables immediate cost optimization without even changing the model.

## 3. Designing Prompts to Maximize Cache Hit Rate

The effectiveness of prompt caching hinges on how you structure your prompt. The core principle is to place "**the unchanging (constant) portion first, and the portion that changes every time (variable) last**."

### A Bad Example (a structure that makes cache hits difficult)

If information that changes every time (date, question, etc.) comes first, the model treats each request as "new input" and can't take advantage of the cache.

```
[Today's date: 2026-06-24]
[Question: How do I apply for vacation?]
[Long company policy document...]
```

### A Good Example (a structure that maximizes cache hits)

Pin the repeated policies and instructions at the front, and push the variable data to the back.

```xml
<system_policy>
[Response principles]
[Response format]
[20-page HR policy document]
</system_policy>

<user_info>
Request-specific information:
Today's date: 2026-06-24
Question: According to this policy, how do I apply for vacation?
</user_info>
```

## 4. A 3-Step Guide for Practitioners

1. **Separate the repeated region from the variable region**: Analyze the prompt you're currently using and distinguish fixed values (system instructions, policies, tool definitions) from dynamic values (user questions, current time).
2. **Apply a structured template**: Formalize your prompt using XML tags or similar, as shown in the example above.
3. **Measure the results**: Check the usage metadata in your API responses to monitor whether "Cache Read Input Tokens" are being reported. Confirming that the cache is actually being hit is the most important step.

## Wrapping Up

Prompt caching is the most fundamental way to improve the operational efficiency of an AI service. Before you switch to a smaller model or forcibly trim your prompt at the cost of quality, start by restructuring your prompts. Simply preventing the model from recomputing repeated context lets you win on both cost and speed at once.

Go check your prompts right now. Is your repeated prefix ready to be cached?

{{< callout type="info" >}}**Reference** — Understanding Prompt Caching: How to Reduce LLM Costs Without Sacrificing Quality | LinkedIn{{< /callout >}}
