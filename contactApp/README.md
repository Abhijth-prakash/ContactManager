# 📒 React Contact Manager
 
A simple and clean contact management app built with React, featuring full CRUD operations, form validation, and a JSON Server backend.
 
---
 
## ✨ Features
 
- View all contacts in a contact card list
- Add new contacts with duplicate email detection
- Edit existing contact details
- Delete contacts with optimistic UI updates
- Client-side form validation using React Hook Form + Zod
- Code-split with React lazy loading & Suspense
- Error boundaries for graceful error handling
- Routing with React Router DOM
 
---
 
## 🛠️ Tech Stack
 
| Layer | Technology | Version |
|---|---|---|
| UI | React | ^19.2.4 |
| Routing | React Router DOM | ^7.14.0 |
| Forms | React Hook Form | ^7.72.1 |
| Validation | Zod + @hookform/resolvers | ^4.3.6 / ^5.2.2 |
| HTTP Client | Axios | ^1.14.0 |
| Styling | Tailwind CSS (Vite plugin) | ^4.2.2 |
| Icons | React Icons | ^5.6.0 |
| Backend | JSON Server | latest |
| Unique IDs | uuid | ^13.0.0 |
 
---

## 📌 Routes
 
| Path | Component | Description |
|---|---|---|
| `/` | `ContactCard` | View all contacts |
| `/add` | `AddContact` | Add a new contact |
| `/contact/:id` | `ContactDetails` | View a single contact |
| `/contact/edit/:id` | `EditContact` | Edit a contact |
| `/contact/delete/:id` | `DeleteContact` | Delete a contact |
 
---
 
## 🔍 Key Implementation Details
 
**Optimistic UI on Delete** — The contact is removed from the UI immediately. If the server request fails, the previous state is restored.
 
**Duplicate Email Check** — On the Add Contact form, the app checks the existing contacts list before submitting and shows an inline error if the email is already in use.
 
**Lazy Loading** — All page-level components are loaded lazily with `React.lazy` and wrapped in `<Suspense>` to reduce the initial bundle size.
 
---
 