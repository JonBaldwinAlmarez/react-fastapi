# Copilot Instructions for AI Coding Agents

## Project Overview
This project is structured for a full-stack application with a `backend/` directory. The backend is currently empty, indicating initial setup or a placeholder for a FastAPI (Python) service. No frontend or additional documentation is present yet.

## Key Guidance for AI Agents
- **Backend Location:** All backend code should reside in the `backend/` directory. Follow FastAPI conventions for project structure (e.g., `main.py`, `app/`, `routers/`, `models/`, etc.).
- **Project Initialization:** If starting from scratch, scaffold a FastAPI backend. Use `uvicorn` for local development and testing.
- **No Existing Conventions:** There are no custom rules, agent instructions, or README files yet. Use standard FastAPI and Python best practices unless otherwise specified in future updates.
- **Workflows:**
  - To run the backend, use: `uvicorn main:app --reload` (after creating `main.py` in `backend/`).
  - Add a `requirements.txt` for Python dependencies in `backend/`.
- **Documentation:** Update this file as the project evolves, especially when new conventions, workflows, or integration points are introduced.

## Example: FastAPI Backend Structure
```
backend/
  main.py
  requirements.txt
  app/
    __init__.py
    routers/
    models/
    ...
```

## Next Steps
- If you add new components (frontend, database, etc.), document their structure and integration points here.
- Reference this file for project-specific instructions as the codebase grows.
