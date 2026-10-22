---
title: "Plan Mode Didn't Die — It Moved Inside the Loop"
date: 2026-10-22T00:00:00+09:00
authors:
  - name: jeonck
    link: https://github.com/jeonck
    image: https://github.com/jeonck.png
tags:
  - Agents
  - Coding Agents
  - Engineering Organization
  - Opinion
---

Turning on plan mode before handing work to a coding agent was, until recently, simply the order of operations. Lately I see more people skipping it and just talking to the agent. Is that laziness, or did the approach itself hit a limit? I think it is the second one — but not in the way the "plan mode is dead" posts claim.
<!--more-->

{{< callout type="warning" >}}
**This is an opinion piece.** The technical reference version of this argument lives in [Agent Interface → Planning: Up Front or Inside the Loop?](/docs/orchestration/agent-interface/). Where this post states something as fact, it is sourced at the bottom; where it states a judgment about organizations, that judgment is mine.
{{< /callout >}}

## What this post covers

- What plan mode was actually doing, and why its two jobs are now moving in opposite directions
- Why planning moved from a document into the execution loop
- What an engineering organization should build, given that the tooling keeps changing shape

## TL;DR

- Plan mode had two jobs: instruct the agent precisely, and give a human understanding plus a veto. The first is shrinking, the second is growing.
- Planning didn't disappear — the **gate** did. It became a step inside the loop that the agent takes when the task warrants it.
- Plan mode has not been removed from the major tools. What changed is the default: Claude Code moved interactive sessions to auto mode during 2026.
- The binding constraint is no longer agent throughput; it is human attention. More code, not more shipped software.
- Models and tool shapes change every quarter. What survives is tests an agent can run, eval sets, repo-level context, review routing — and an in-house team that owns the loop.

## Two jobs — what plan mode was actually doing

Plan mode bundled two things that look like one thing.

The first was **precise instruction**: write down what to do and how, so the agent doesn't wander off into a refactor nobody asked for. This job is shrinking, and it is shrinking for a good reason. A model that explores the codebase, reads the memory files, and makes reasonable assumptions needs fewer decisions handed to it in advance. Every decision the model gets right on its own is one decision a human no longer has to pre-specify. The better the models get, the less room this job leaves.

The second was **human understanding** — a point where a person sees what is about to happen and can say no. That job did not shrink. It got harder, which I will come back to.

## The case against the gate — three complaints that hold up

**Long generated plans do not get read.** Planning has value; shipping its output as a long document is a different proposition. A plan that records every decision *and* the context behind it gets long, the over-structured register of generated prose makes it tiring to finish, and bolting a summary on top just adds more text to read. Teams building plan-centric coding tools report users caring about spec documents less than expected. A document you have to re-summarize before you can use it is an argument that it should have been short to begin with.

**Plan → approve → execute cuts against how the work actually goes.** Real work is: understand part of it, build something, look at the result, change your mind. A gate in the middle asks you to finish thinking before you have the information that would change your thinking — and going back to revise the plan mid-implementation feels like losing ground, which is exactly the wrong incentive. There is a smaller tax on top: deciding, per task, whether this one needs plan mode, and toggling.

**Heavier spec-driven flows cost real money.** One practitioner comparison reports spec-kit-style projects running several times the cost of the equivalent plan-mode flow for the same scope. The counter-argument — that specs are the disciplined counterweight to unconstrained vibe coding — is also just an argument. Nobody has published a controlled comparison, so treat both as field reports.

## What replaces it — planning inside the loop

Understand a slice → act → verify → surface the one thing a human must decide → adjust → go again.

That loop works now because the cost of going the wrong way collapsed. When a mis-aimed agent burned an afternoon, planning first and approving second was correct. When the agent writes a test, runs it, watches it fail, and corrects itself inside a minute, a plain chat thread that plans only when it needs to is cheaper than a gate on every task.

Worth saying plainly, because the "plan mode is dead" framing gets this wrong: **plan mode is still shipped.** Claude Code still has it — October 2026 releases fixed its behavior on resume and added a setting for how auto mode interacts with planning — and the Codex CLI still offers a read-only planning mode. The default moved, not the feature. Planning stopped being a phase a human schedules and became a step an agent takes.

## The attention problem — the second job got harder

Here is the part I think gets under-discussed. The understanding job did not merely survive; it became the hard problem.

When one agent worked on one branch, reading the diff was the whole review. With agents running in parallel, nobody follows every thread and every change. Secondhand coverage of a 2026 study reports roughly 30% more code produced, with review-and-merge time rising alongside it — more code, not more shipped software. Experienced practitioners describe still being able to land about one significant change at a time. I would not lean hard on the exact percentages, but the direction matches what I see.

So the design goal moves from *document the plan* to **route attention**: rank what is running by what it needs from a human — approval, an answer, a decision — put those first, and attach exactly enough context to decide. Keeping the whole picture in a human's head while code changes faster than anyone can read it is, as far as I can tell, still unsolved.

## Organization — the builder team argument

This is where I stop reporting and start arguing.

Planning didn't disappear; the gate did — and the same thing will happen to whatever we are doing now. The shape of these tools has already changed three times in short order: plain chat, then plan mode as a mandatory step, now fleets of parallel agents. Any team that standardized on the ceremony of one of those stages is now carrying process that no longer pays for itself.

What survives the churn is not a workflow. It is the substrate: tests and CI an agent can actually run, eval sets for your own tasks so you adopt a new model on evidence instead of vibes, context and memory files that live in the repo, and a review-routing mechanism that decides what reaches a person. Call it a software factory if you like — the point is that it is yours, and it outlives the tool of the quarter.

And that requires people. My view: this has to be an in-house builder team with leadership directly involved, grown internally or hired in, not outsourced and not delegated three layers down. Korean enterprises have a structural disadvantage here, and it is not about leadership quality — the organizations are simply large and slow relative to the cadence at which this tooling turns over. If that does not change, I do not think the usual barriers will keep foreign competitors out of the domestic market for long. For what it is worth, I believe at least one large Korean company is already operating this way without having said so publicly.

The technical half of this argument is reference material. This half is a bet.

## Caveats

- The claim that plan mode is disappearing rests on blog posts and practitioner anecdotes. I found no survey data showing a decline in its use.
- Plan mode has not been removed from either Claude Code or the Codex CLI. Any post declaring it dead — including the ones linked below — is ahead of the evidence on that specific point.
- The study figures on code volume and review time come from secondary coverage, not from the primary paper, and I have not verified them against it.
- The cost comparison between spec-driven and plan-mode flows is one team's experience, not a controlled benchmark.
- The organizational section is opinion. I have no data on how many Korean enterprises run an in-house builder team.

## What I'm taking from this

- Audit our own repos for the substrate above: can an agent run the tests unaided, and is the context it needs actually in the repo?
- Build the review-routing piece before adding more parallel agents — otherwise the agents just grow the queue.
- Write down which classes of work still require an up-front plan (irreversible migrations, cross-service interfaces, unfamiliar code without tests) so skipping it stays a decision rather than a habit.
- Re-check the primary study on review time, and look for actual survey data on planning-mode usage.

## References

- [Claude Code changelog](https://code.claude.com/docs/en/changelog)
- [Instil — Spec-Driven Development vs Plan Mode](https://instil.co/blog/spec-driven-development-is-dead-long-live-plan-mode)
- [DEV — Spec-Driven Development in 2026](https://dev.to/krlz/spec-driven-development-in-2026-what-it-is-the-tooling-and-how-teams-actually-use-it-2fk2)
- [byteiota — Plan Mode Is Dead](https://byteiota.com/plan-mode-is-dead-here-is-what-agentic-coding-looks-like-now/)
- [Simon Willison — Embracing the parallel coding agent lifestyle](https://simonw.substack.com/p/embracing-the-parallel-coding-agent)
- [ExplainX — summary of the 2026 review-bottleneck study](https://explainx.ai/blog/ai-coding-agents-more-code-not-more-software-harvard-jellyfish-review-bottleneck-2026)
