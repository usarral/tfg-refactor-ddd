import { CategoriaDeletecategoriar } from '../../app/use-cases/deleteCategoria/categoria-deletecategoriar.use-case';
import { RequestCategoriaDeletecategoriar } from '../../app/use-cases/deleteCategoria/dto/request-categoria-deletecategoriar.dto';

export class DeleteCategoriaCategoriaDeleteController {
  constructor(private readonly deletecategoriar: CategoriaDeletecategoriar) {}

  // add manually the route to the controller and the request 
  async handle(): Promise<void> {
    try {
      const result = await this.deletecategoriar.execute(new RequestCategoriaDeletecategoriar());
      
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}