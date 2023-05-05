import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LOG_LEVEL, PORT } from "../global-config";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger:
      LOG_LEVEL === "debug"
        ? ["log", "debug", "error", "verbose", "warn"]
        : ["log", "error", "verbose", "warn"],
    cors: true
  });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  await app.listen(PORT, () => {
    console.log(`Server started on port: ${ PORT }`)
  }));
}
bootstrap();
