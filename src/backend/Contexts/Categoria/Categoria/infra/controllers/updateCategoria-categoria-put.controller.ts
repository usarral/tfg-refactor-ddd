import { CategoriaUpdatecategoriar } from '../../app/use-cases/updateCategoria/categoria-updatecategoriar.use-case';
import { RequestCategoriaUpdatecategoriar } from '../../app/use-cases/updateCategoria/dto/request-categoria-updatecategoriar.dto';

export class UpdateCategoriaCategoriaPutController {
  constructor(private readonly updatecategoriar: CategoriaUpdatecategoriar) {}

  // add manually the route to the controller and the request 
  async handle(): Promise<void> {
    try {
      const result = await this.updatecategoriar.execute(new RequestCategoriaUpdatecategoriar());
      
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}