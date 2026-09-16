import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post } from '@nestjs/common';
import { ModelsService } from './models.service.js';
import type { Model } from './model.js';
import { NotFoundError } from 'rxjs';

/**
 * The controller: it translates HTTP ↔ domain. No business logic here.
 *
 * Everything is yours to write: the tests in `test/models.e2e-spec.ts`
 * describe the expected behaviour precisely.
 *
 * Routes to expose:
 *   GET    /models              → list (with ?org= and ?task= filters)
 *   GET    /models/:id          → one model, or 404
 *   POST   /models              → creation, status 201
 *   DELETE /models/:id          → removal, status 204, or 404
 */
@Controller('models')
export class ModelsController {
  
  constructor(private readonly modelsService: ModelsService) {}


  @Get()
    findAll(): Model[] {
      return this.modelsService.findAll();}
  
  @Get(':id')
  findOne(@Param('id') id: string): Model {
    // Nota: Corregí "finOne" a "findOne" asumiendo que fue un error de tipeo en tu código original.
    const model = this.modelsService.findOne(id); 
    
    // Si el modelo no existe, lanzamos el error 404
    if (!model) {
      throw new NotFoundException(`Model with id ${id} not found`);
    }
    
    return model; 
  }
    
  @Post()
  @HttpCode(201)
  create(@Body() model: Model): Model{
    return this.modelsService.create(model)
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string): void {
    const wasRemoved = this.modelsService.remove(id);
    
    if (!wasRemoved) {
      throw new NotFoundException(`Model with id ${id} not found`);
    }
    
  }
}
