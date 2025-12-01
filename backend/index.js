import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("DevLink Backend is running");
});

app.get("/api/documents", (req, res) => {
  const documents = [
    {
      id: 1,
      title: "JavaScript Info — The Modern JavaScript Tutorial",
      url: "https://javascript.info/",
      description:
        "Comprehensive guide to modern JavaScript including DOM, async, and advanced topics.",
      favicon: "https://javascript.info/img/favicon/favicon.png",
      createdAt: "2025-01-13T10:30:00Z",
      type: "DOCUMENT",
    },
    {
      id: 2,
      title: "React — Official Documentation",
      url: "https://react.dev/",
      description:
        "Latest docs for React with explanations, interactive examples, and best practices.",
      favicon: "https://react.dev/favicon.ico",
      createdAt: "2025-01-13T11:00:00Z",
      type: "DOCUMENT",
    },
    {
      id: 3,
      title: "Clean Code Summary",
      url: "https://github.com/ryanmcdermott/clean-code-javascript",
      description:
        "JavaScript version of Robert C. Martin’s famous Clean Code principles.",
      favicon: "https://github.githubassets.com/favicons/favicon.svg",
      createdAt: "2025-01-13T12:00:00Z",
      type: "DOCUMENT",
    },
  ];
  const data = res.json(documents);
});

app.get("/api/youtube-videos", (req, res) => {
  const youtubeVideos = [
    {
      id: 1,
      title: "Build & Deploy a Full Stack App with MERN",
      url: "https://www.youtube.com/watch?v=-0exw-9YJBo",
      channel: "Traversy Media",
      thumbnail: "https://i.ytimg.com/vi/-0exw-9YJBo/maxresdefault.jpg",
      description:
        "A complete MERN tutorial covering backend, frontend, and deployment.",
      createdAt: "2025-01-12T09:00:00Z",
      type: "YOUTUBE",
    },
    {
      id: 2,
      title: "Docker Tutorial for Beginners",
      url: "https://www.youtube.com/watch?v=3c-iBn73dDE",
      channel: "TechWorld with Nana",
      thumbnail: "https://i.ytimg.com/vi/3c-iBn73dDE/maxresdefault.jpg",
      description:
        "Visual explanation of Docker concepts and practical containers.",
      createdAt: "2025-01-10T11:30:00Z",
      type: "YOUTUBE",
    },
    {
      id: 3,
      title: "Node.js Crash Course",
      url: "https://www.youtube.com/watch?v=fBNz5xF-Kx4",
      channel: "Traversy Media",
      thumbnail: "https://i.ytimg.com/vi/fBNz5xF-Kx4/maxresdefault.jpg",
      description:
        "Everything you need to know to start building backend apps with Node.",
      createdAt: "2025-01-10T14:00:00Z",
      type: "YOUTUBE",
    },
  ];
  const data = res.json(youtubeVideos);
});

app.get("/api/codesnippets", (req, res) => {
  const snippets = [
    {
      id: 1,
      title: "Debounce Function",
      language: "JavaScript",
      code: `
function debounce(fn, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), delay);
  };
}
      `,
      description:
        "Useful for search inputs, scroll events, and performance optimization.",
      createdAt: "2025-01-11T08:30:00Z",
      type: "CODE SNIPPET",
    },
    {
      id: 2,
      title: "Python: Read File in One Line",
      language: "Python",
      code: `data = open("file.txt").read()`,
      description: "One-liner to read files in Python.",
      createdAt: "2025-01-11T10:00:00Z",
      type: "CODE SNIPPET",
    },
    {
      id: 3,
      title: "SQL Join Example",
      language: "SQL",
      code: `
SELECT users.name, orders.amount
FROM users
JOIN orders ON users.id = orders.user_id;
      `,
      description: "Basic SQL join between users and orders table.",
      createdAt: "2025-01-11T12:30:00Z",
      type: "CODE SNIPPET",
    },
  ];
  const data = res.json(snippets);
});

app.get("/api/git", (req, res) => {
  const repos = [
    {
      id: 1,
      name: "react",
      fullName: "facebook/react",
      url: "https://github.com/facebook/react",
      stars: 225000,
      language: "JavaScript",
      description:
        "A declarative, efficient, and flexible JavaScript library for building UIs.",
      owner: "Facebook",
      avatar: "https://avatars.githubusercontent.com/u/69631",
      createdAt: "2025-01-12T07:15:00Z",
      type: "GIT REPO",
    },
    {
      id: 2,
      name: "awesome-python",
      fullName: "vinta/awesome-python",
      url: "https://github.com/vinta/awesome-python",
      stars: 200000,
      language: "Python",
      description:
        "A curated list of awesome Python frameworks, libraries, and software.",
      owner: "vinta",
      avatar: "https://avatars.githubusercontent.com/u/652070",
      createdAt: "2025-01-12T09:30:00Z",
      type: "GIT REPO",
    },
    {
      id: 3,
      name: "node",
      fullName: "nodejs/node",
      url: "https://github.com/nodejs/node",
      stars: 110000,
      language: "C++ / JavaScript",
      description: "Node.js JavaScript runtime built on Chrome's V8 engine.",
      owner: "Node.js Foundation",
      avatar: "https://avatars.githubusercontent.com/u/9950313",
      createdAt: "2025-01-12T11:00:00Z",
      type: "GIT REPO",
    },
  ];
  const data = res.json(repos);
});

app.listen(PORT, () => {
  console.log(`DevLink Backend is running on port ${PORT}`);
});

export default app;
