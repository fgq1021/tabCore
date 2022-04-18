import {
  Delete,
  Get,
  Patch,
  Post,
  Put,
  HttpException,
  HttpStatus,
  Body,
  Param,
  Query,
  Request,
  UseInterceptors,
  UploadedFile,
  UploadedFiles
} from "@nestjs/common";
import { CreateDto } from "./dto/create.dto";
import { UpdateDto } from "./dto/update.dto";
import { tab } from "../../tab.init";
import { FileInterceptor, AnyFilesInterceptor } from "@nestjs/platform-express";

export class TabNestjsController {
  public unit;
  public createDto = CreateDto;
  public updateDto = UpdateDto;

  constructor(unit: string) {
    this.unit = unit;
  }

  errController(err = { status: "NOT_FOUND" }) {
    console.log(err);
    // HttpStatus.
    throw new HttpException(err, HttpStatus[err.status]);
  }

  // 创建一个单元
  @Post()
  async create(@Body() createDto: CreateDto, @Request() { user }) {
    try {
      return await tab[this.unit].create(createDto, user);
    } catch (e) {
      this.errController(e);
    }
  }

  @Get()
  findAll() {

  }

  // 查询一个单元
  @Get(":id")
  async findOne(@Param("id") id: string, @Request() { user }) {
    try {
      // console.log(el, el.updatedAt);
      return await tab[this.unit].get(id, user);
    } catch (e) {
      this.errController(e);
    }
  }


  // 更改一个单元
  @Patch(":id")
  async update(@Param("id") id: string, @Body() updateDto: UpdateDto, @Request() { user }) {
    try {
      return await tab[this.unit].save(updateDto, user);
    } catch (e) {
      this.errController(e);
    }
  }

  // 删除一个单元
  @Delete(":id")
  async remove(@Param("id") id: string, @Request() { user }) {
    try {
      return await tab[this.unit].delete(id, user);
    } catch (e) {
      this.errController(e);
    }
  }

  // 查询此单元我有什么
  @Post("listMy")
  async listMy(@Query("limit") limit: number = 50, @Query("skip") skip: number = 0,
               @Body("filter") filter?: object, @Body("sort") sort?: object,
               // @ts-ignore
               @Request() { user }) {
    try {
      const res = await tab[this.unit].listMy(filter, sort, limit, skip, user);
      return res.row();
    } catch (e) {
      this.errController(e);
    }
  }

  // 查询一个单元
  @Post("list")
  async list(@Query("limit") limit: number = 50, @Query("skip") skip: number = 0,
             @Body("filter") filter?: object, @Body("sort") sort?: object,
             // @ts-ignore
             @Request() { user }) {
    try {
      const res = await tab[this.unit].find(filter, sort, limit, skip, user);
      return res.row();
    } catch (e) {
      this.errController(e);
    }
  }


  // 获取一个列表
  @Get(":id/children/:place/:key/:sort?")
  async children(@Param("id") id: string,
                 @Param("place") place: string, @Param("key") key: string, @Param("sort") sortCache: string,
                 @Query("limit") limit: number = 50, @Query("skip") skip: number = 0,
                 @Body("filter") filter?: object, @Body("sort") sort?: object,
                 // @ts-ignore
                 @Request() { user }) {
    try {
      const res = await tab[this.unit].children(id + "." + place + "." + key, {}, sort || sortCache, limit, skip, user);
      return res.row();
    } catch (e) {
      this.errController(e);
    }
  }

  // 获取一个列表并添加参数（过滤器和排序）
  @Post(":id/children/:place/:key/:sort?")
  async childrenWithOption(@Param("id") id: string,
                           @Param("place") place: string, @Param("key") key: string, @Param("sort") sortCache: string,
                           @Query("limit") limit: number = 50, @Query("skip") skip: number = 0,
                           @Body("filter") filter?: object, @Body("sort") sort?: object,
                           // @ts-ignore
                           @Request() { user }) {
    try {
      const res = await tab[this.unit].children(id + "." + place + "." + key, filter, sort || sortCache, limit, skip, user);
      return res.row();
    } catch (e) {
      this.errController(e);
    }
  }

  // 往一个单元的某个键值上传文件
  @Put(":id/file/:place/:key")
  @UseInterceptors(FileInterceptor("file"))
  async upload(@UploadedFile() file, @Param("id") id: string, @Param("place") place: string, @Param("key") key: string,
               @Request() { user }) {
    try {
      return await tab[this.unit].upload(file, id, place, key, (p) => {
        console.log(p);
      }, user);
    } catch (e) {
      this.errController(e);
    }
  }

  // 上传文件夹
  @Put(":id/directory/:place/:key")
  @UseInterceptors(AnyFilesInterceptor())
  async uploadDirectory(@UploadedFiles() files, @Param("id") id: string, @Param("place") place: string = "data", @Param("key") key: string = "sub",
                        @Request() { user }) {
    try {
      return await tab[this.unit].uploadDirectory(files, id, place, key, (p) => {
        console.log(p);
      }, user);
    } catch (e) {
      this.errController(e);
    }
  }
}
