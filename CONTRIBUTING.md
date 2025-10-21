Perfect ✅ — here’s your **complete `CONTRIBUTING.md`** document in one single copy-paste-ready block.
It matches the tone and workflow of your **FoodShare SDG 2 project**, so your teammates will know *exactly* how to collaborate efficiently.

---

````markdown
# 🤝 Contributing to FoodShare

Welcome to **FoodShare** — a collaborative project built in support of **SDG 2: Zero Hunger**.  
We’re thrilled to have you on the team! This document explains how to contribute effectively, maintain code quality, and keep the project organized.

---

## 🧭 General Principles

1. **Main goal:** Build a simple, functional, and beautiful app that connects food donors to those in need.
2. **Work clean:** Write readable, maintainable code with helpful comments.
3. **Respect others:** Communicate changes clearly, review each other’s work, and avoid overwriting teammates’ progress.

---

## 🌿 Branching Strategy

We use a **feature-based branching model** to keep development clean and conflict-free.

| Branch | Purpose |
|--------|----------|
| `main` | Stable production-ready version |
| `dev` | Integration/testing branch |
| `feature/<name>` | Individual feature or fix branches |

### Example:
```bash
# Create a new branch for your feature
git checkout -b feature/login-page

# After making changes
git add .
git commit -m "feat: add login page and form validation"

# Push your branch
git push origin feature/login-page
````

---

## 🧱 Commit Message Format

We use **conventional commit messages** for clarity and consistency.

### Format:

```
<type>: <short description>
```

### Common Commit Types:

| Type        | Meaning                                      |
| ----------- | -------------------------------------------- |
| `feat:`     | New feature                                  |
| `fix:`      | Bug fix                                      |
| `style:`    | CSS or UI changes                            |
| `refactor:` | Code restructuring without changing behavior |
| `docs:`     | Documentation updates (README, etc.)         |
| `chore:`    | Maintenance tasks (dependencies, cleanup)    |

### Examples:

```
feat: add donation form component
fix: resolve API fetch error in dashboard
style: improve mobile responsiveness for listings
docs: update project setup steps
```

---

## 🔄 Pull Request (PR) Workflow

1. **Before creating a PR:**

   * Pull the latest changes:

     ```bash
     git checkout dev
     git pull origin dev
     ```
   * Merge `dev` into your branch to resolve conflicts locally:

     ```bash
     git checkout feature/your-branch
     git merge dev
     ```

2. **Push your branch:**

   ```bash
   git push origin feature/your-branch
   ```

3. **Open a Pull Request on GitHub:**

   * Target branch: `dev`
   * Title: Clear summary of your changes
   * Description: Include screenshots or notes on what was added/fixed

4. **Wait for review:**
   At least one team member must review and approve before merging.

5. **Merge into dev:**
   Once approved, the team lead (or assigned reviewer) merges the PR.

6. **Sync main branch:**
   When the `dev` branch is stable and tested, it gets merged into `main`.

---

## 🧩 Code Guidelines

### ✅ Do:

* Use **functional components** and React hooks.
* Keep files organized under `/components`, `/pages`, `/api`, etc.
* Follow consistent indentation (2 spaces).
* Write clear, descriptive variable and function names.
* Comment non-obvious logic.

### 🚫 Don’t:

* Push directly to `main` or `dev`.
* Commit generated files (e.g., `node_modules`, `build`, `.env`).
* Leave console logs or unused imports in committed code.

---

## 🧠 Review Process

When reviewing a PR:

1. Read the title and description carefully.
2. Pull the branch locally and test it if needed.
3. Add comments for improvements or confirm approval.
4. Approve only if it runs cleanly without breaking other parts.

---

## 🎨 UI/UX Standards

To maintain a consistent visual identity:

* Follow the **SDG 2 theme** (green, white, neutral greys).
* Keep UI simple and clean — minimal clutter.
* Use **Poppins** or **Inter** fonts.
* Maintain responsiveness (mobile-first approach).

---

## 🧱 Adding a New Feature

When adding a new feature:

1. Create a branch:

   ```bash
   git checkout -b feature/<feature-name>
   ```
2. Add your feature files in the appropriate folder (`/pages`, `/components`, `/api`).
3. Test it locally:

   * Start backend: `json-server --watch server/db.json --port 8001`
   * Start frontend: `npm start`
4. Once it works, push and open a PR for review.

---

## 🔐 Environment Variables (future use)

When Firebase or real API integration is added, sensitive values will be stored in a `.env` file (never committed).

Example:

```
REACT_APP_API_URL=http://localhost:8001
REACT_APP_FIREBASE_KEY=your-key-here
```

Add `.env` to `.gitignore`.

---

## 🧭 Conflict Resolution

If merge conflicts occur:

```bash
git fetch origin
git merge origin/dev
```

Open the conflicting files, manually fix conflicts, then:

```bash
git add .
git commit -m "fix: resolve merge conflict"
git push
```

---

## 💬 Communication & Collaboration

We’ll use:

* **GitHub Issues** for bugs and new feature ideas
* **Pull Requests** for code discussions
* **Group Chat (WhatsApp/Discord)** for daily coordination

---

## 🌟 Project Quality Checklist

Before merging:
✅ Code runs with no errors
✅ Files are properly organized
✅ No console warnings
✅ Commit messages are clear
✅ Feature is tested locally
✅ UI looks consistent

---

