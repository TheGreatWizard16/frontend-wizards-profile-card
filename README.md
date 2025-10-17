# 🚀 Frontend Wizards — Stage 0 Task: Profile Card

A fully responsive, semantic, and accessible **Profile Card** built using **plain HTML, CSS, and vanilla JavaScript**.  
Every visible element includes the required `data-testid` attributes for automated testing.

---

## 🔗 Live Demo
[**Live Site**](https://thegreatwizard16.github.io/frontend-wizards-profile-card/)

---

## 📁 Project Structure
frontend-wizards-profile-card/
│
├── index.html
├── style.css
├── script.js
└── README.md


---

## ✅ Requirements Checklist

| Requirement | Status | Notes |
|--------------|:------:|-------|
| `data-testid="test-profile-card"` root container | ✅ | Present |
| `test-user-name` (name) | ✅ | Inside `<h2>` |
| `test-user-bio` (bio paragraph) | ✅ | Accessible `<p>` |
| `test-user-time` (current ms) | ✅ | Live updates via `Date.now()` |
| `test-user-avatar` (avatar image) | ✅ | Has `alt`, loads from URL/upload |
| `test-user-social-links` (social list) | ✅ | `<nav>` + safe external links |
| Individual social links (Twitter, GitHub, LinkedIn) | ✅ | Each has own `data-testid` |
| `test-user-hobbies` list | ✅ | Distinct `<ul>` inside `<section>` |
| `test-user-dislikes` list | ✅ | Distinct `<ul>` inside `<section>` |
| Semantic HTML used (`article`, `figure`, `nav`, `section`) | ✅ | Proper roles & structure |
| Responsive on mobile, tablet, desktop | ✅ | CSS Grid + Flexbox |
| Keyboard focus visible, links tabbable | ✅ | `:focus-visible` styles applied |

---

## ⚙️ Features
- **Live Time:** updates in milliseconds using `Date.now()`.
- **Dynamic Avatar:** user can upload a file or provide a direct image URL.
- **Accessible & Semantic:** correct tags, alt text, and aria labels.
- **Responsive Layout:** stacks on mobile, grid on tablet/desktop.
- **Keyboard-Friendly:** all links tabbable, visible focus outline.
- **Test-Ready:** every visible element has a stable `data-testid`.

---

## 🧠 How to Run Locally
1. Clone or download this repository:
   ```bash
   git clone https://github.com/TheGreatWizard16/frontend-wizards-profile-card.git
# frontend-wizards-profile-card
