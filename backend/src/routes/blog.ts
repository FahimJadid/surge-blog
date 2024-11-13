import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { verify } from "hono/jwt";
import { CreatePostSchema, UpdatePostSchema } from "@fahimaljadid/surge-common";

type Context = {
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
    prisma: PrismaClient;
  };
};

export const blogRouter = new Hono<Context>();

// Middleware to check if the user is authenticated
blogRouter.use("/*", async (c, next) => {
  const authHeader = c.req.header("Authorization") || "";
  if (!authHeader) {
    c.status(401);
    return c.json({ error: "Unauthorized: No Authorization header" });
  }

  const tokenParts = authHeader.split(" ");
  if (tokenParts.length !== 2 || tokenParts[0] !== "Bearer") {
    c.status(401);
    return c.json({ error: "Unauthorized: Invalid token format" });
  }

  const token = tokenParts[1];

  try {
    const payload = (await verify(token, c.env.JWT_SECRET)) as { id: string };

    if (!payload) {
      c.status(401);
      return c.json({ error: "Unauthorized: Invalid token" });
    }

    c.set("userId", payload.id);
    await next();
  } catch (error) {
    c.status(403);
    return c.json({ error: "Forbidden: Token verification failed" });
  }
});

blogRouter.get("/bulk", async (c) => {
  const prisma = c.get("prisma");

  try {
    const posts = await prisma.post.findMany({});
    return c.json({ posts });
  } catch (error) {
    c.status(500);
    return c.json({ error: "Error fetching posts" });
  }
});

blogRouter.post("/", async (c) => {
  const userId = c.get("userId");
  const prisma = c.get("prisma");
  const body = await c.req.json();
  const {success} = CreatePostSchema.safeParse(body);

  if(!success) {
    c.status(400);
    return c.json({error: "Invalid request body"});
  }
  try {
    const post = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: userId,
      },
    });
    return c.json({
      id: post.id,
      message: "Post created successfully",
    });
  } catch (error) {
    c.status(500);
    return c.json({ error: "Error while Creating post" });
  }
});

blogRouter.put("/", async (c) => {
  const userId = c.get("userId");
  const prisma = c.get("prisma");
  const body = await c.req.json();

  const {success} = UpdatePostSchema.safeParse(body);

  if(!success) {
    c.status(400);
    return c.json({error: "Invalid request body"});
  }
  try {
    const post = await prisma.post.update({
      where: {
        id: body.id,
        authorId: userId,
      },
      data: {
        title: body.title,
        content: body.content,
      },
    });
    return c.json({
      id: post.id,
      message: "Post Updated successfully",
    });
  } catch (error) {
    c.status(500);
    return c.json({ error: "Error while updating post" });
  }
});

blogRouter.get("/:id", async (c) => {
  const id = c.req.param("id");
  const prisma = c.get("prisma");

  try {
    const post = await prisma.post.findFirst({
      where: {
        id,
      },
    });

    if (!post) {
      c.status(404);
      return c.json({ message: "Blog Post not found" });
    }

    return c.json(post);
  } catch (error) {
    c.status(500);
    return c.json({ message: "Error fetching post" });
  }
});
