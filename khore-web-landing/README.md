
# Khore: Project Brief for Web Development

## The Vision
We are building Khore, an open-source, node-based video editing engine. The goal is to create the "Blender of Video Editing"—a tool that replaces the bloated, laggy legacy editors (like Premiere Pro) with a zero-copy, Vulkan-accelerated, cross-platform media engine.

## 1. The Vibe & Aesthetic
- **Theme**: "Sexy Smooth" dark mode by default. Think of the websites for high-end developer tools (like Vercel, Rust-lang, or Zed Editor) mixed with the artistic darkness of Blender.org.
- **Colors**: Deep charcoal/black backgrounds. Accents should be something that pops but feels technical—like a neon "Terminal Green," "Vulkan Red," or "Electric Blue."
- **Typography**: A clean, modern sans-serif for headers (like Inter or Roboto) paired with a monospaced font (like Fira Code or JetBrains Mono) for technical callouts and code snippets.
- **Performance**: The site itself must be fast. If we are promising a high-performance video editor, the landing page cannot lag with heavy JavaScript animations.

## 2. The Core Structure (Single Page to Start)

### Section 1: The Hero (Above the Fold)
- **Headline**: Needs to be aggressive and clear. (e.g., *The Open-Source Video Engine for the Next Generation.*)
- **Sub-headline**: A node-based NLE powered by Vulkan. No subscription, no legacy bloat, no lag.
- **Primary CTA**: "Star on GitHub" (to build early momentum).
- **Secondary CTA**: "Read the Manifesto" or "Join the Discord."
- **Visual**: A sleek mockup or wireframe of a node-graph connecting to a video timeline.

### Section 2: The Problem vs. The Khore Solution
A quick 3-column grid explaining why Khore exists:
1. **Legacy Debt**: Commercial editors crash on complex timelines. Khore uses a multi-threaded task graph.
2. **GPU Native**: Bypassing the CPU bottlenecks with a Zero-Copy Vulkan 1.4 pipeline.
3. **Community First**: Built for extensibility with a native Python API.

### Section 3: The "Under the Hood" (For the Nerds)
This is where we attract contributors. List the tech stack clearly:
- **Engine**: C++ / Rust
- **Media**: FFmpeg 8.1
- **Graphics**: Vulkan & wgsl shaders
- **Interop**: OpenTimelineIO & USD

### Section 4: The Roadmap & Footer
A simple visual timeline showing:
- **Phase 1**: Core Engine CLI
- **Phase 2**: Timeline GUI
- **Phase 3**: Node Compositor

**Footer Links**: GitHub Repo, Documentation (Coming Soon), Community/Discord.

