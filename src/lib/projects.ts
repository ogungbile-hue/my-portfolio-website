import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Project {
  slug: string;
  title: string;
  number: string;
  tagline?: string;
  role?: string;
  description: string;
  featured: boolean;
  status: "Live" | "In progress" | "Case study" | "Archived";
  order: number;
  stack: string[];
  link?: string;
  github?: string;
  image?: string;
  body?: string;
}

const projectsDirectory = path.join(process.cwd(), "content/projects");

export function getProjects(): Project[] {
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjects = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || slug,
        number: data.number || "001",
        tagline: data.tagline || "",
        role: data.role || "",
        description: data.description || "",
        featured: Boolean(data.featured),
        status: data.status || "Live",
        order: Number(data.order) || 99,
        stack: Array.isArray(data.stack) ? data.stack : [],
        link: data.link || "",
        github: data.github || "",
        image: data.image || "",
        body: content,
      } as Project;
    });

  return allProjects.sort((a, b) => a.order - b.order);
}
