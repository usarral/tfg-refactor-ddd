import { CategoriaGetcategoriasr } from '../../app/use-cases/getCategorias/categoria-getcategoriasr.use-case';
import { RequestCategoriaGetcategoriasr } from '../../app/use-cases/getCategorias/dto/request-categoria-getcategoriasr.dto';

export class GetCategoriasCategoriaGetController {
  constructor(private readonly getcategoriasr: CategoriaGetcategoriasr) {}

  // add manually the route to the controller and the request 
  async handle(): Promise<void> {
    try {
      const result = await this.getcategoriasr.execute(new RequestCategoriaGetcategoriasr());
      
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}