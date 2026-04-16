# frontend-stage1b-profile-card
A responsive and accessible Profile Card featuring a dynamic Epoch time counter, built for the HNG14 Frontend Stage 1B task.

# Frontend Wizards: Stage 1B: Profile Card

##  Project Overview
This project is a high-performance, accessible Profile Card component built for the NHG14 Stage 1B task. It demonstrates the use of semantic HTML5, modern CSS Grid/Flexbox, and dynamic data binding with Vanilla JavaScript.

##  Key Features
- **Live Epoch Counter:** Displays `Date.now()` in milliseconds, updating every 500ms.
- **Semantic Structure:** Utilizes `<article>`, `<figure>`, `<nav>`, and `<section>` for SEO and screen-reader compatibility.
- **Accessibility:**
  - WCAG AA color contrast compliant.
  - Fully keyboard navigable (Tab focusable).
  - Descriptive alt text for the avatar.
- **Responsive Design:** A mobile-first approach that adapts from 320px to 1200px.

##  Automated Testing (data-testid)
The following attributes are implemented to support stable automated testing:
- `test-profile-card`: Main container
- `test-user-name`: Displayed name
- `test-user-time`: Millisecond epoch counter
- `test-user-avatar`: Profile image
- `test-user-social-links`: Social navigation wrapper



##  Installation
To run this project locally:
1. Clone the repository:
   ```bash
   git clone [https://github.com/chabagaje/frontend-stage1b-profile-card.git]
   (https://github.com/chabagaje/frontend-stage1b-profile-card.git)
