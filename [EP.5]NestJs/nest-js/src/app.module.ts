import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { UserModule } from './user/user.module';
import { CatModule } from './cat/cat.module';
import { AccountModule} from './account/account.module'
import { CatMiddleware } from './cat/cat.middleware';
import { CatController } from './cat/cat.controller';
import * as helmet from 'helmet';
@Module({
  imports: [TypeOrmModule.forRoot(), TodoModule, UserModule, CatModule , AccountModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(helmet(), CatMiddleware).forRoutes(CatController);
  }
}
