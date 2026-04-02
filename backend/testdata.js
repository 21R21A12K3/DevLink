export const testData = [
    {
      id: 1,
      type: "documents",
      title: "JavaScript Info — The Modern JavaScript Tutorial",
      url: "https://javascript.info/",
      description:
        "Comprehensive guide to modern JavaScript including DOM, async, and advanced topics.",
      favicon: "https://javascript.info/img/favicon/favicon.png",
      createdAt: "2025-01-13T10:30:00Z",
    },
    {
      id: 2,
      type: "documents",
      title: "React — Official Documentation",
      url: "https://react.dev/",
      description:
        "Latest docs for React with explanations, interactive examples, and best practices.",
      favicon: "https://react.dev/favicon.ico",
      createdAt: "2025-01-13T11:00:00Z",
    },
    {
      id: 3,
      type: "documents",
      title: "Clean Code Summary",
      url: "https://github.com/ryanmcdermott/clean-code-javascript",
      description:
        "JavaScript version of Robert C. Martin’s famous Clean Code principles.",
      favicon: "https://github.githubassets.com/favicons/favicon.svg",
      createdAt: "2025-01-13T12:00:00Z",
    },
    {
      id: 4,
      type: "youtubeVideos",
      title: "Build & Deploy a Full Stack App with MERN",
      url: "https://www.youtube.com/watch?v=-0exw-9YJBo",
      channel: "Traversy Media",
      thumbnail: "https://i.ytimg.com/vi/-0exw-9YJBo/maxresdefault.jpg",
      description:
        "A complete MERN tutorial covering backend, frontend, and deployment.",
      createdAt: "2025-01-12T09:00:00Z",
    },
    {
      id: 5,
      type: "youtubeVideos",
      title: "Docker Tutorial for Beginners",
      url: "https://www.youtube.com/watch?v=3c-iBn73dDE",
      channel: "TechWorld with Nana",
      thumbnail: "https://i.ytimg.com/vi/3c-iBn73dDE/maxresdefault.jpg",
      description:
        "Visual explanation of Docker concepts and practical containers.",
      createdAt: "2025-01-10T11:30:00Z",
    },
    {
      id: 6,
      type: "youtubeVideos",
      title: "Node.js Crash Course",
      url: "https://www.youtube.com/watch?v=fBNz5xF-Kx4",
      channel: "Traversy Media",
      thumbnail: "https://i.ytimg.com/vi/fBNz5xF-Kx4/maxresdefault.jpg",
      description:
        "Everything you need to know to start building backend apps with Node.",
      createdAt: "2025-01-10T14:00:00Z",
    },
    {
      id: 7,
      type: "snippets",
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
    },
    {
      id: 8,
      type: "snippets",
      title: "Python: Read File in One Line",
      language: "Python",
      code: `data = open("file.txt").read()`,
      description: "One-liner to read files in Python.",
      createdAt: "2025-01-11T10:00:00Z",
    },
    {
      id: 9,
      type: "snippets",
      title: "SQL Join Example",
      language: "SQL",
      code: `
SELECT users.name, orders.amount
FROM users
JOIN orders ON users.id = orders.user_id;
      `,
      description: "Basic SQL join between users and orders table.",
      createdAt: "2025-01-11T12:30:00Z",
    },
    {
      id: 10,
      type: "repos",
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
    },
    {
      id: 11,
      type: "repos",
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
    },
    {
      id: 12,
      type: "repos",
      name: "node",
      fullName: "nodejs/node",
      url: "https://github.com/nodejs/node",
      stars: 110000,
      language: "C++ / JavaScript",
      description: "Node.js JavaScript runtime built on Chrome's V8 engine.",
      owner: "Node.js Foundation",
      avatar: "https://avatars.githubusercontent.com/u/9950313",
      createdAt: "2025-01-12T11:00:00Z",
    },
]
