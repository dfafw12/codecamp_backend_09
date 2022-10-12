import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { FilesService } from "./files.service";
import { FileUpload, GraphQLUpload } from "graphql-upload";

@Resolver()
export class FilesResolver {
  constructor(
    private readonly filesService: FilesService //
  ) {}

  @Mutation(() => [String])
  async uploadFile(
    @Args({ name: "files", type: () => [GraphQLUpload] }) files: FileUpload[] //
  ) {
    const result = await this.filesService.upload({ files });
    return result;
  }
}
