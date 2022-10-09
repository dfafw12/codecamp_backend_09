import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
import { MovieModule } from "./apis/movies/movie.module";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { MovieImageModule } from "./apis/movieImage/movieImage.module";
import { UserModule } from "./apis/users/user.module";
import { AuthModule } from "./apis/auth/auth.module";
import { MovieUserModule } from "./apis/movieUser/movieUser.module";
import { FilesModule } from "./apis/files/files.module";

@Module({
  imports: [
    AuthModule,
    UserModule,
    MovieModule,
    FilesModule,
    MovieUserModule,
    MovieImageModule,
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: "src/commons/graphql/schema.gql",
      context: ({ req, res }) => ({ req, res }),
    }),
    TypeOrmModule.forRoot({
      type: process.env.DATABASE_TYPE as "mysql",
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PROT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DATABASE,
      entities: [__dirname + "/apis/**/*.entity.*"],
      synchronize: true,
      logging: true,
    }),
  ],
})
export class AppModule {}
