import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersModule } from "./users/users.module";
import { databaseConfig } from "./config/database.config";

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConfig), // This will read ormconfig.json
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
