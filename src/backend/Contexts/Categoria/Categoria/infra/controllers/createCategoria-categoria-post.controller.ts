import { CategoriaCreatecategoriar } from '../../app/use-cases/createCategoria/categoria-createcategoriar.use-case';
import { RequestCategoriaCreatecategoriar } from '../../app/use-cases/createCategoria/dto/request-categoria-createcategoriar.dto';

export class CreateCategoriaCategoriaPostController {
  constructor(private readonly createcategoriar: CategoriaCreatecategoriar) {}

  // add manually the route to the controller and the request 
  async handle(): Promise<void> {
    try {
      const result = await this.createcategoriar.execute(new RequestCategoriaCreatecategoriar());
      
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}