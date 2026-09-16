import { Injectable } from '@nestjs/common';
import { Model } from './model.js';
import { ModelZoo } from './model-zoo.js';

/** Yours to write. The tests call `clear()` and `create()` directly. */
@Injectable()
export class ModelsService {

    private modelZoo = new ModelZoo();

    clear() : void{
        this.modelZoo = new ModelZoo();
    }

    create(model: Model): Model{
        this.modelZoo.addModel(model);
        return model;
    }

    findAll(): Model[]  {
        return this.modelZoo.getAllModels()
    }

    findOne(id : string): Model | undefined {
        return this.modelZoo.getModel(id);
    }

    remove(id : string): boolean{
        return this.modelZoo.removeModel(id)
    }



    



}
