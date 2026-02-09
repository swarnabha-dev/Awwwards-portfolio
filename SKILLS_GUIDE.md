# Stitch Skills Guide

This repository includes a set of "Stitch Skills" to enhance your agentic coding experience. These skills are located in `.agent/skills` and provide specialized capabilities for React development, design documentation, and more.

## Available Skills

### 1. `design-md`
**Description:** Generates comprehensive `DESIGN.md` documentation for your project.
**Usage:**
Ask the agent: "Run the `design-md` skill to document the current design system."

### 2. `enhance-prompt`
**Description:** Refines vague UI ideas into detailed, high-quality prompts for generation.
**Usage:**
Ask the agent: "Use the `enhance-prompt` skill to improve this request: 'make a dashboard'."

### 3. `react-components`
**Description:** Converts Stitch designs (or HTML mockups) into modular, production-ready React components.
**Usage:**
Ask the agent: "Use the `react-components` skill to convert the current static HTML into React components."

### 4. `remotion`
**Description:** Creates high-quality walkthrough videos of your application using Remotion.
**Usage:**
Ask the agent: "Use the `remotion` skill to generate a demo video of the project."

### 5. `shadcn-ui`
**Description:** Expert guidance for integrating and customizing shadcn/ui components.
**Usage:**
Ask the agent: "Use the `shadcn-ui` skill to help me add a button component."

### 6. `stitch-loop`
**Description:** Generates multi-page websites with automated file organization.
**Usage:**
Ask the agent: "Use the `stitch-loop` skill to build a multi-page portfolio site."

## How it Works
The agent reads the `SKILL.md` file in each skill directory to understand how to execute the specific task. The skills may use scripts or resources located within their respective folders.

## Location
All skills are installed in: `.agent/skills/`
