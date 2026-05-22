<div align="center">

# 🚀 Postly

### The Modern API Client — Supercharged with AI

*REST · WebSocket · Collaboration · AI-Powered*

<br/>

[![Next.js](https://img.shields.io/badge/Next.js-15-000000?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![ShadCN UI](https://img.shields.io/badge/ShadCN-UI-18181B?style=flat-square&logo=shadcnui&logoColor=white)](https://ui.shadcn.com)
[![Zustand](https://img.shields.io/badge/Zustand-State-FF6B35?style=flat-square)](https://zustand-demo.pmnd.rs)
[![TanStack](https://img.shields.io/badge/TanStack-Query-FF4154?style=flat-square&logo=reactquery&logoColor=white)](https://tanstack.com/query)
[![License](https://img.shields.io/badge/License-MIT-22c55e?style=flat-square)](LICENSE)

<br/>

> **Postly** is a modern, collaborative API client with real-time WebSocket support and AI superpowers — built for developers who want speed, clarity, and teamwork in one tool.

<br/>

[🌐 Live Demo](#) · [📖 Documentation](#) · [🐛 Report Bug](https://github.com/Hasnainkhan40/postly/issues) · [💡 Request Feature](https://github.com/Hasnainkhan40/postly/issues)

</div>

---

## 📸 Screenshots

> _Add your screenshots here_

| REST Client | WebSocket Client | Workspaces |
|:---:|:---:|:---:|
| ![REST](./screenshots/rest.png) | ![WS](./screenshots/websocket.png) | ![Workspaces](./screenshots/workspaces.png) |

---

## ✨ Features

### 🌐 REST API Client
Send **GET, POST, PUT, DELETE** requests instantly with a clean, distraction-free interface.

### ⚙️ Custom Params & Headers
Add query parameters and custom headers on the fly — no config files needed.

### 📦 Request Body Editor
Powered by **Monaco Editor** (the same engine behind VS Code):
- JSON & plain text editing
- Auto-format with a single click
- One-click copy to clipboard

### 📊 Response Inspector
Deeply inspect every response:
- Response **body** with syntax highlighting
- Response **headers** viewer
- **Size** and **latency** metrics at a glance

### 🔄 WebSocket Client
Connect to `ws://` and `wss://` endpoints in real time — no extra tooling required.

### 💬 Live Message Viewer
Track every message in your WebSocket session:
- Sent & received messages clearly distinguished
- **Size** and **timestamp** for every message

### 👥 Workspaces & Invites
Built for teams:
- Organize requests into **Workspaces**
- **Invite teammates** via email
- Collaborate on shared request collections

### 🖼️ Overlapping Avatars
See who's in your workspace with team presence indicators and **hover tooltips** showing member details.

### 💾 Persistent Storage
Nothing gets lost:
- Saved **requests** & **responses**
- Persistent **WebSocket message history**

### 🎨 Modern UI
Built with a best-in-class frontend stack:
- **Next.js** — App Router, SSR, performance
- **ShadCN UI** — accessible, composable components
- **Tailwind CSS** — utility-first styling
- **TanStack Query** — smart data fetching & caching
- **Zustand** — lightweight global state management

---

## 🤖 AI Superpowers

Postly is the first API client with AI built directly into the workflow.

### ✨ Auto-Generate Requests
Just **describe what you need** in plain English — AI builds the complete request for you including method, URL, headers, and body.

```
"Create a POST request to register a new user with name, email, and password"
```
→ AI instantly fills in the entire request. Done.

### ✨ Auto-Generate Request Names
Stop naming requests manually. Describe your intent and AI generates a **clear, meaningful request name** automatically — keeping your collections organized without the overhead.

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | [Next.js 15](https://nextjs.org) (App Router) |
| Language | TypeScript |
| UI Components | [ShadCN UI](https://ui.shadcn.com) |
| Styling | [Tailwind CSS](https://tailwindcss.com) |
| State Management | [Zustand](https://zustand-demo.pmnd.rs) |
| Data Fetching | [TanStack Query](https://tanstack.com/query) |
| Code Editor | [Monaco Editor](https://microsoft.github.io/monaco-editor) |
| AI | OpenAI API |
| Real-time | WebSocket API |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18+
- **npm** or **yarn** or **pnpm**

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Hasnainkhan40/postly.git
cd postly

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
```

### Environment Variables

```env
# AI
OPENAI_API_KEY=your_openai_api_key

# Auth (if applicable)
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000

# Database (if applicable)
DATABASE_URL=your_database_url
```

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 💡 How to Use

**Making a REST Request**
1. Select your HTTP method (GET, POST, PUT, DELETE)
2. Enter the request URL
3. Add query params or headers as needed
4. Write your request body in the Monaco editor
5. Hit **Send** — inspect the response instantly

**Using WebSocket**
1. Switch to the **WebSocket** tab
2. Enter your `ws://` or `wss://` URL
3. Click **Connect**
4. Send and receive messages in real time via the Live Message Viewer

**Using AI to Generate Requests**
1. Click the ✨ **AI Generate** button
2. Describe your request in plain English
3. AI fills in the method, URL, headers, and body automatically
4. Review and send

**Working with Teams**
1. Create a **Workspace**
2. Invite teammates via email
3. Share and collaborate on request collections together

---

## 🗂️ Project Structure

```
postly/
├── app/                    # Next.js App Router pages & layouts
│   ├── (auth)/             # Auth routes
│   ├── dashboard/          # Main app dashboard
│   └── api/                # API route handlers
├── components/
│   ├── ui/                 # ShadCN base components
│   ├── rest-client/        # REST API client components
│   ├── websocket/          # WebSocket client components
│   └── workspace/          # Workspace & team components
├── store/                  # Zustand state stores
├── hooks/                  # Custom React hooks
├── lib/                    # Utilities & helpers
├── types/                  # TypeScript type definitions
├── public/
└── package.json
```

---

## 🤝 Contributing

Contributions are welcome and appreciated!

1. **Fork** the repository
2. Create your branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a **Pull Request**

Please ensure your code follows the existing style and includes relevant tests.

---

## 📄 License

Licensed under the **MIT License** — see [LICENSE](LICENSE) for details.

---

## 🙏 Acknowledgements

- [Monaco Editor](https://microsoft.github.io/monaco-editor) — VS Code's editor in the browser
- [ShadCN UI](https://ui.shadcn.com) — Beautiful, accessible components
- [TanStack](https://tanstack.com) — Powerful data management
- [Zustand](https://zustand-demo.pmnd.rs) — Lightweight state management
- [OpenAI](https://openai.com) — AI capabilities

---

<div align="center">
<br/>

**⭐ If Postly saves you time, give it a star — it means a lot!**

<br/>

Made with ❤️ by [Hasnain Khan](https://github.com/Hasnainkhan40)

</div>
