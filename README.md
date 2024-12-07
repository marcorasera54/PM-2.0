## ⚡ Installation

The easiest way to get started with Plane is by creating a [Plane Cloud](https://app.plane.so) account.

If you would like to self-host Plane, please see our [deployment guide](https://docs.plane.so/docker-compose).

| Installation methods | Docs link                                                                                                                                          |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Docker               | [![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)](https://docs.plane.so/self-hosting/methods/docker-compose)         |
| Kubernetes           | [![Kubernetes](https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white)](https://docs.plane.so/kubernetes) |

`Instance admins` can configure instance settings with [God-mode](https://docs.plane.so/instance-admin).

## 🚀 Features

- **Issues**: Quickly create issues and add details using a powerful rich text editor that supports file uploads. Add sub-properties and references to problems for better organization and tracking.

- **Cycles**:
  Keep up your team's momentum with Cycles. Gain insights into your project's progress with burn-down charts and other valuable features.

- **Modules**: Break down your large projects into smaller, more manageable modules. Assign modules between teams to track and plan your project's progress easily.

- **Views**: Create custom filters to display only the issues that matter to you. Save and share your filters in just a few clicks.

- **Pages**: Plane pages, equipped with AI and a rich text editor, let you jot down your thoughts on the fly. Format your text, upload images, hyperlink, or sync your existing ideas into an actionable item or issue.

- **Analytics**: Get insights into all your Plane data in real-time. Visualize issue data to spot trends, remove blockers, and progress your work.

- **Drive** (_coming soon_): The drive helps you share documents, images, videos, or any other files that make sense to you or your team and align on the problem/solution.

## 🛠️ Quick start for contributors

> Development system must have docker engine installed and running.

Setting up local environment is extremely easy and straight forward. Follow the below step and you will be ready to contribute - 

1. Clone the code locally using:
   ```
   git clone https://github.com/makeplane/plane.git
   ```
2. Switch to the code folder:
   ```
   cd plane
   ```
3. Create your feature or fix branch you plan to work on using:
   ```
   git checkout -b <feature-branch-name>
   ```
4. Open terminal and run:
   ```
   ./setup.sh
   ```
5. Open the code on VSCode or similar equivalent IDE.
6. Review the `.env` files available in various folders.
   Visit [Environment Setup](./ENV_SETUP.md) to know about various environment variables used in system.
7. Run the docker command to initiate services:
   ```
   docker compose -f docker-compose-local.yml up -d
   ```

You are ready to make changes to the code. Do not forget to refresh the browser (in case it does not auto-reload).

Thats it!