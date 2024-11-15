import { Hono } from "hono";
import { cors } from 'hono/cors'
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { userRouter } from "./routes/user";
import { blogRouter } from "./routes/blog";

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


interface PrismaMiddlewareContext {
	env: {
		DATABASE_URL: string;
	};
	set: (key: string, value: any) => void;
}

type NextFunction = () => Promise<void>;

const prismaMiddleware = async (c: PrismaMiddlewareContext, next: NextFunction) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env.DATABASE_URL,
	}).$extends(withAccelerate());
	c.set("prisma", prisma);
	await next();
};
  
const app = new Hono<Context>();
app.use('/*', cors())
app.use("*", prismaMiddleware);

app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);

export default app;
