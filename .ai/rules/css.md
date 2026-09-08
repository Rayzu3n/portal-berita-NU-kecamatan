---
paths:
  - 'resources/css/**'
---

# Css

## Tailwind v4 font-size tokens must use --text-* namespace
In this Tailwind v4 project, custom type-scale tokens (display-hero, headline-md, title-lg, body-*, label-*, caption) are defined in @theme with the --text-<name> and --text-<name>--line-height namespaces so they generate text-<name> utilities. Do not use --font-size-* / --line-height-* — those namespaces are inert in v4 and silently produce no CSS. Font families are --font-sans (Plus Jakarta Sans) and --font-display (Newsreader).
