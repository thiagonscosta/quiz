import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnswerModule } from './answer/answer.module';
import { GroupModule } from './group/group.module';
import { QuestionModule } from './question/question.module';

@Module({
  imports: [AnswerModule, GroupModule, QuestionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
