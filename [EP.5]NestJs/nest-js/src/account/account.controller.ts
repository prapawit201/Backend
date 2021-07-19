import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AccountService } from './account.service';

@Controller('account')
@ApiTags('account')
export class AccountController {
  constructor(private accountService: AccountService) {}

  @Get()
  account(){
   return this.accountService.getAccount()
  }

  @Post()
  register(
    @Body('firstname') firstname: string,
    @Body('lastname') lastname: string,
    @Req() req
  ){
    console.log( req.body);
    return this.accountService.registerAccount(firstname,lastname)
    
  }

}