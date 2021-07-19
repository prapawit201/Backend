import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiExtraModels, ApiOkResponse, ApiResponse, ApiTags, getSchemaPath } from '@nestjs/swagger';
import { User } from 'src/user/user.entity';
import { Cat } from './cat.entity';
import { CreateCatDto, UpdateCatDto } from './cat.model';
import { CatService } from './cat.service';


@Controller('cat')
@ApiTags('cat')
@ApiExtraModels(Cat)

export class CatController {
  constructor(private catService: CatService) {}
  @Post()
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully created.',
  })
  postCat(@Body() body: CreateCatDto) {
    let name = body.name;
    let age = body.age;
    let user = body.user;
    console.log(body);
    this.catService.postCat(name, age, user);
    return 'Created Success';
  }

  @Get()
  @ApiOkResponse({
    schema:{
      properties:{
        status:{
          type: 'integer',
          default: 200
        },
        message:{
          type: 'string',
          default: " successful response from server "
        },
        results:{
          type: 'array',
          items : {$ref: getSchemaPath(Cat)}
        }
      }
    }
  })
  // @Res() res: Response
  getCat() {
    return this.catService.getCat();

    // return res.json({
    //   status: 'OK',
    //   message: 'get resource success',
    // });
  }

  @Get('/own')
  getOwnCat() {
    return this.catService.getOwnCat();
  }

  @Get(':id')
  getCatById(@Param('id') id: string) {
    return this.catService.getCatById(id);
  }

  @Delete(':id')
  deleteCatById(@Param('id') id: string) {
    return this.catService.deleteCatById(id);
  }

  @Put(':id')
  updateCatById(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return this.catService.updateCatById(id, updateCatDto);
  }
}
