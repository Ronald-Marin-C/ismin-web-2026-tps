import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import type { Model, Task } from './model.js';
import { ModelModel as DBModel} from '../generated/prisma/models.js';

/**
 * The service, to be moved from memory to the database.
 *
 * The public contract does not change, but everything becomes
 * **asynchronous**: every Prisma call goes over the network and returns
 * a promise.
 *
 * 👉 STEP 4: replace each `throw` with a Prisma call.
 *
 * ⚠️ Three differences from yesterday's Map:
 *
 *    - `findUnique` returns `null`, not `undefined`
 *
 *    - `delete` throws when the row does not exist
 *      (look at `deleteMany`, or catch the error)
 *
 *    - SQLite has no union types: as far as the database is concerned,
 *      `task` is any string. So the compiler will refuse to treat a
 *      database row as a `Model`. Same lesson as session 1: what comes
 *      from outside is not guaranteed. Narrow the type at the boundary:
 *      a small private `toModel(row)` helper does the job nicely.
 */
@Injectable()
export class ModelsService {
  constructor(private readonly prisma: PrismaService) {}

  private toModel(dbModel : DBModel): Model{     
    return {
      ...dbModel,
      task: dbModel.task as Task,
      license: dbModel.license ?? undefined
    }
  }

  private toDbModel(model: Model): DBModel {
    return{
      ...model,
      license: model.license ?? null
    }
  }

  async create(model: Model): Promise<Model> {
    const create = await this.prisma.model.create({
      data: this.toDbModel(model)});
    return this.toModel(create)
  }

  async findAll(org: string | undefined, task: string | undefined, filters: { org?: string; task?: Task; } = {}): Promise<Model[]> {
    const models = await this.prisma.model.findMany({
      where: {
      ...(org? { org } : {}),
      ...(task? { task } : {}),
      }
    });

    return models.map(model => this.toModel(model));
  }

  async findOne(id: string): Promise<Model | null> {
    
 
    const model = await this.prisma.model.findUnique(
      {
        where: {id},
      });
    
    if(!model)
    {
      throw new NotFoundException;

    }
    return this.toModel(model);
  }

  /** Returns `true` if the model existed, `false` otherwise. */
  async remove(id: string): Promise<boolean> {
  
    try{
      await this.prisma.model.delete({
        where : {id},
      });
    return true
    } 
    catch{
      throw new NotFoundException();
    }
  }

  /** Given: used by the tests to start from an empty database. */
  async clear(): Promise<void> {
    await this.prisma.model.deleteMany();
  }

  
}
