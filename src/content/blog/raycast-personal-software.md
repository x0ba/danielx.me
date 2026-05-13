---
title: raycast as a personal software layer
description: a journey of building random doohickeys in raycast
pubDate: 2026-05-13
tags:
- raycast
- software
- ai
draft: true
---

Something I've heard a lot of people talk about in the past few months as AI agents, vibe coding, and AI-assisted software engineering have become more and more prevalent is the idea of building personal software that's useful only to yourself using AI, which is something that used to be impossible for most people because building software takes time and resources that could be better spent doing other things. 

One of these recent examples for me was that I wanted to create a way to make short links from my website. For example, I wanted `danielx.me/gh` to redirect to my GitHub, `danielx.me/in` to redirect to my LinkedIn, etc. This is simple enough to hardcode in Astro. All you need to do is define redirect targets in your Astro configuration file:

```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  redirects: {
    '/gh': 'https://github.com/x0ba',
    // feel free to shoot me a connection request!
    '/in': 'https://linkedin.com/in/daniel-xu-sd'
  }
});
```

I didn't want to hardcode this though. I wanted a way to dynamically manage this in a way that was simple and frictionless to do. Why not build a simple dashboard as a route on my site that I could just use to build this feature? That's simple enough to do. 

Until you realize security is a thing. If I were to just build a dashboard and shove it into my site as a simple route, I would have to implement authentication. I would have to set up something like Clerk or Supabase, and I might even have to set up a database like Convex to persist data. I would have to go through all that trouble just to do something that should be very simple. 

At this point, I just received access to the beta for Raycast v2, which I was really excited about. I'd been spending all day trying to figure out ways to integrate Raycast into my workflow more seamlessly. So I spun up a [Pi](https://pi.dev) instance and asked GPT-5.5 to build me a Raycast extension that allowed me to write to a JSON file that was in the GitHub repository for my site, which I used to set up redirect routes dynamically. Vercel would then automatically deploy my site as it always does, and bada-bing, bada-boom, my short link would be configured. All you needed was a GitHub access token, the repo name, and the path to the .json file.

The big GPT one-shotted this request. I did ask for some stylistic and branding tweaks, since even though this was just something that I would be running on my own local computer, I still wanted it to look good. For the most part, though, GPT just did the job. You can see the code [here](https://github.com/x0ba/raycast-short-links).

## Personal Software



