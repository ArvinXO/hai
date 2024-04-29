# HAI- AI Chat

Open AI chat bot - Vercel Deployable

## Dependencies

This project requires the following dependencies:

- `openai`: The official OpenAI API client for JavaScript. Used to interact with the OpenAI API.
- `dotenv`: Used to load environment variables from a `.env.local` file. Necessary for securely handling the OpenAI API key.
- `next`: The core package for a Next.js application. Necessary for running the application.
- `ai`: Provides the `OpenAIStream` and `StreamingTextResponse` functions. (Please verify the package name and its purpose)
- `shadcn`: shadcn is a collection of beautifully designed, accessible, and customizable React components that you can use to build modern web applications with Next. js. With Shadcn, you can quickly and easily create user interfaces that are both stylish and functional

## Setup and Installation

To install these dependencies, run the following command in your terminal:

```bash
npm install openai dotenv next ai
npx shadcn-ui@latest init
npx shadcn-ui@latest add button
npx shadcn-ui@latest add input

export OPENAI_API_KEY='Your open ai key'
echo "export OPENAI_API_KEY='Your open ai key0'" >> ~/.zshrc (If you use zshrc for your profile)


npm run dev


```

Contributing
Contributions are always welcome! Please read the contribution guidelines first.

License
Distribute under the MIT License. See LICENSE for more information.

Contact
Arvin Teymouri - teymouri.arvin@gmail.com
