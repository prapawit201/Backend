import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { response } from "express";
import { Repository } from "typeorm";
import { Account } from "./account.entity";

@Injectable()
export class AccountService{
    constructor
    (@InjectRepository(Account) private accountRepository: Repository<Account>
    ){}
    accountArray : Account[]=[];

    async registerAccount(firstname:string, lastname:string) {
        
        const account = new Account()
        account.firstname = firstname,
        account.lastname = lastname,
        this.accountArray.push(account)
        return await this.accountRepository.save(account)
    }
    async getAccount(){
       return  await this.accountRepository.find()
    }
}