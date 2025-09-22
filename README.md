# ALX Polly - Interactive Polling Application

ALX Polly is a modern, interactive polling application built with Next.js, where users can create polls, vote on existing polls, and share results with others.

![ALX Polly Dashboard](https://example.com/screenshot.png)

## Features

- **User Authentication**: Sign up, login, and manage your account
- **Create Custom Polls**: Create polls with multiple options and customizable settings
- **Vote on Polls**: Participate in polls created by you or other users
- **Poll Management**: Edit, delete, or archive your created polls
- **Poll Sharing**: Share polls via direct links or social media
- **Responsive Design**: Works seamlessly across desktop and mobile devices

## Project Structure

```
app/
├── auth/            # Authentication pages (login, register)
├── polls/           # Main polls dashboard and listing
│   ├── [id]/        # Individual poll view and voting interface
│   └── new/         # Poll creation interface
├── components/      # Shared UI components
│   └── ui/          # Shadcn UI components
└── page.tsx         # Root redirect to polls dashboard
```

## Technology Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **UI Components**: Shadcn UI
- **Styling**: Tailwind CSS
- **Fonts**: Geist font family

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## User Flows

### Authentication

- Users can sign up with email/password
- Existing users can log in to their accounts
- Password recovery is available via email

### Creating Polls

1. Navigate to "Create Poll" button in the header
2. Fill in the poll title and question
3. Add at least two poll options (more can be added with "Add Option")
4. Configure poll settings (optional):
   - Allow multiple selections
   - Require users to be logged in
   - Set poll end date
5. Create the poll

### Voting on Polls

1. Browse available polls from the dashboard
2. Click on a poll to view details
3. Select an option and submit your vote
4. View current poll results

### Sharing Polls

- Copy direct link to poll
- Share via social media

## Development

### Adding New Components

The project uses Shadcn UI components. To add a new component:

```bash
npx shadcn@latest add [component-name]
```

### Future Roadmap

- Poll analytics and insights
- Custom themes for polls
- Advanced poll types (ranking, scoring, etc.)
- Mobile application
- API for third-party integrations

## Deployment

The recommended deployment platform is Vercel:

1. Push your code to a GitHub repository
2. Import the project to [Vercel](https://vercel.com)
3. Configure any environment variables
4. Deploy!

## License

MIT © ALX Polly Team
