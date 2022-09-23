import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { StarbucksModule } from './API/starbucks.module';
// import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    StarbucksModule,
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/common/graphql/schema.gql',
    }),
    // TypeOrmModule.forRoot(),
  ],
})
export class AppModule {}
