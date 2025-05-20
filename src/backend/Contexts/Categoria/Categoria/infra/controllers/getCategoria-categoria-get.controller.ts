import { CategoriaGetcategoriar } from '../../app/use-cases/getCategoria/categoria-getcategoriar.use-case';
import { RequestCategoriaGetcategoriar } from '../../app/use-cases/getCategoria/dto/request-categoria-getcategoriar.dto';

export class GetCategoriaCategoriaGetController {
  constructor(private readonly getcategoriar: CategoriaGetcategoriar) {}

  // add manually the route to the controller and the request 
  async handle(): Promise<void> {
    try {
      const result = await this.getcategoriar.execute(new RequestCategoriaGetcategoriar());
      
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}