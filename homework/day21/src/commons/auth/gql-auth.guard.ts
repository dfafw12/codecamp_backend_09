import { ExecutionContext } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { GqlExecutionContext } from "@nestjs/graphql";

export class GqlAuthAccessGuard extends AuthGuard("access") {
  getRequest(context: ExecutionContext) {
    const gqlContext = GqlExecutionContext.create(context);
    // console.log(gqlContext.getContext().req);
    return gqlContext.getContext().req;
  }
}
