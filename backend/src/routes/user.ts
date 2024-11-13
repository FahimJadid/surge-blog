import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { hashPassword, verifyPassword } from "../utils/crypto-utils";
import { sign } from "hono/jwt";
import {SignupSchema, LoginSchema} from "@fahimaljadid/surge-common"

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

export const userRouter = new Hono<Context>();

userRouter.post("/signup", async (c) => {
  const prisma = c.get("prisma");
  const body = await c.req.json();
  const { success } = SignupSchema.safeParse(body);

  if(!success){
    c.status(400);
    return c.json({error: "Invalid request body"});
  }

  try {
    const hashedPassword = await hashPassword(body.password);
    const user = await prisma.user.create({
      data: {
        email: body.email,
        name: body.name,
        password: hashedPassword,
      },
    });

    const token = await sign({ id: user.id }, c.env.JWT_SECRET);

    return c.json({ token }, 201);
  } catch (error) {
    console.error("Error during signup:", error);
    c.status(403);
    return c.json({ error: "error while signing up" });
  }
});

userRouter.post("/login", async (c) => {
  const prisma = c.get("prisma");
  const body = await c.req.json();

  const {success} = LoginSchema.safeParse(body);

  if(!success){
    c.status(400);
    return c.json({error: "Invalid request body"});
  }
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });

    if (!user) {
      c.status(403);
      return c.json({ message: "user does not exists" });
    }

    const passwordMatch = await verifyPassword(user.password, body.password);

    if (!passwordMatch) {
      c.status(401);
      return c.json({ message: "Invalid email or password" });
    }

    const token = await sign({ id: user.id }, c.env.JWT_SECRET);

    return c.json({ token }, 200);
  } catch (error) {
    console.error("Error during login:", error);
    c.status(403);
    return c.json({ error: "error while logging in" });
  }
});
