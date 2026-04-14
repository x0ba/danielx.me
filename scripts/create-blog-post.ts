#!/usr/bin/env bun

import { access, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { argv, exit, stdin as input, stdout as output } from "node:process";
import readline from "node:readline/promises";

const blogDirectory = path.resolve("src/content/blog");

type PostInput = {
  title: string;
  description: string;
  tags: string[];
};

const usage = [
  "Create a new blog post",
  "",
  "Usage:",
  '  bun run new:post --title "My Post" --description "What this post is about" --tags "astro, mdx"',
  "",
  "Flags:",
  "  --title         Post title",
  "  --description   Post description",
  '  --tags          Comma-separated tags, e.g. "astro, mdx, web dev"',
].join("\n");

const getArgValue = (name: string) => {
  const directMatch = argv.find((arg) => arg.startsWith(`--${name}=`));
  if (directMatch) {
    return directMatch.slice(name.length + 3).trim();
  }

  const flagIndex = argv.findIndex((arg) => arg === `--${name}`);
  if (flagIndex === -1) {
    return undefined;
  }

  const nextValue = argv[flagIndex + 1];
  if (!nextValue || nextValue.startsWith("--")) {
    return "";
  }

  return nextValue.trim();
};

const hasFlag = (name: string) => argv.includes(`--${name}`);

const parseTags = (value: string | undefined) =>
  (value ?? "")
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);

const slugify = (value: string) => {
  const slug = value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/["']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");

  return slug || "untitled-post";
};

const formatDate = (date: Date) => date.toISOString().slice(0, 10);

const fileExists = async (filePath: string) => {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
};

const getUniqueFilePath = async (baseSlug: string) => {
  let attempt = 0;

  while (true) {
    const slug = attempt === 0 ? baseSlug : `${baseSlug}-${attempt + 1}`;
    const filePath = path.join(blogDirectory, `${slug}.mdx`);

    if (!(await fileExists(filePath))) {
      return { slug, filePath };
    }

    attempt += 1;
  }
};

const promptForMissingInput = async (initialInput: Partial<PostInput>) => {
  const rl = readline.createInterface({ input, output });

  try {
    const title = initialInput.title?.trim() || (await rl.question("Title: ")).trim();
    const description =
      initialInput.description?.trim() || (await rl.question("Description: ")).trim();
    const tagsInput =
      initialInput.tags && initialInput.tags.length > 0
        ? initialInput.tags.join(", ")
        : await rl.question("Tags (comma-separated): ");

    return {
      title,
      description,
      tags: parseTags(tagsInput),
    } satisfies PostInput;
  } finally {
    rl.close();
  }
};

const validateInput = ({ title, description }: PostInput) => {
  if (!title) {
    console.error("Error: title is required.");
    exit(1);
  }

  if (!description) {
    console.error("Error: description is required.");
    exit(1);
  }
};

const main = async () => {
  if (hasFlag("help") || hasFlag("h")) {
    console.log(usage);
    return;
  }

  const rawTags = getArgValue("tags");
  const initialInput: Partial<PostInput> = {
    title: getArgValue("title"),
    description: getArgValue("description"),
    tags: parseTags(rawTags),
  };

  const needsPrompt = !initialInput.title || !initialInput.description || rawTags === undefined;
  if (needsPrompt && !input.isTTY) {
    console.error("Error: missing required input in non-interactive mode.\n");
    console.error(usage);
    exit(1);
  }

  const postInput = needsPrompt
    ? await promptForMissingInput(initialInput)
    : {
        title: initialInput.title!,
        description: initialInput.description!,
        tags: initialInput.tags ?? [],
      };
  validateInput(postInput);

  const pubDate = formatDate(new Date());
  const baseSlug = slugify(postInput.title);
  const { slug, filePath } = await getUniqueFilePath(baseSlug);

  const content = `---
title: ${JSON.stringify(postInput.title)}
description: ${JSON.stringify(postInput.description)}
pubDate: ${pubDate}
tags: ${JSON.stringify(postInput.tags)}
---

Write your post here.
`;

  await mkdir(blogDirectory, { recursive: true });
  await writeFile(filePath, content, "utf8");

  console.log(`Created blog post: src/content/blog/${slug}.mdx`);
};

await main();
