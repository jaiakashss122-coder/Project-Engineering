# Vibe Coding vs AI Pair Programming

## Challenge #4

This project compares two approaches to building the same Task Manager application:

- Vibe Coding — Antigravity-generated Vibe Version
- AI Pair Programming — Antigravity Pair Version

Both applications implement the same required features.

## App Features

- Add a task with a title
- Mark a task as complete
- Filter tasks by:
  - All
  - Active
  - Completed
- Clean and responsive UI

## Live Deployments

- Vibe Version: https://project-engineering-szk7.vercel.app/
- Pair Version: https://project-engineering-two.vercel.app/

## Tools Used

### Vibe Version

Tool: Antigravity

The Vibe Version was generated using a natural-language approach and then tested locally before deployment.

### Pair Version

Tool: Antigravity

The Pair Version was built interactively with AI assistance. I reviewed and applied the suggestions while making the implementation decisions.

## Comparison Table

| Dimension | Vibe Version | Pair Version | Verdict |
|---|---|---|---|
| Speed | Generated the application quickly from a high-level request. | Took 10 minutes, from 16:27 to 16:37. | Vibe was faster |
| Control | The tool generated the application structure and implementation automatically. | I reviewed the AI suggestions and decided how the implementation should work. | Pair gave more control |
| Code Quality | The generated project worked and provided the required functionality. | The implementation was kept simple with React state, functions, filtering, and CSS. | Pair was easier to keep focused |
| Explainability | Some generated implementation details required more inspection to understand. | I worked through the state, task functions, filtering, JSX, and CSS step by step. | Pair was easier to explain |
| Editability | Changes depend more on understanding the generated project structure. | Changes were easier to make because I worked with the code incrementally. | Pair was easier to edit |

## Pair Programming Evidence

### Time

- Start time: 16:27
- End time: 16:37
- Total time: 10 minutes

### Files Modified

- `src/App.jsx`
- `src/App.css`

### Suggestions Accepted

- Implemented conditional rendering for the empty-task state.
- Added an `.empty-message` CSS class for the empty state.

### Suggestions Rejected

- None

### Important Coding Decision

I kept the empty-state logic simple by using React conditional rendering based on `filteredTasks.length`, and kept the styling in CSS without adding external UI libraries.

## When I Would Use Each Tool

### Vibe Coding

I would use a vibe coding tool when I need to quickly create a working prototype or explore an application idea. The main advantage I observed was speed because the tool can generate a large portion of the application from a high-level description.

### AI Pair Programming

I would use AI pair programming when I need more control over the implementation or when the code will need to be maintained and changed later. With the Pair Version, I reviewed the AI suggestions and understood the implementation step by step.

## Conclusion

The Vibe Version was useful for quickly getting a working application, while the Pair Version provided more control over the implementation.

The comparison showed that speed and control involve different trade-offs. For a quick prototype I would choose vibe coding, while for maintainable project work I would prefer AI pair programming.

## Submission

This repository contains both the Vibe Coding and AI Pair Programming implementations for Challenge #4.

- Vibe Version: https://project-engineering-szk7.vercel.app/
- Pair Version: https://project-engineering-two.vercel.app/