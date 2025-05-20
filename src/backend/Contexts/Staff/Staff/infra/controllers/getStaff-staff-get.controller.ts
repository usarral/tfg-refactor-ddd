import { StaffGetstaffr } from '../../app/use-cases/getStaff/staff-getstaffr.use-case';
import { RequestStaffGetstaffr } from '../../app/use-cases/getStaff/dto/request-staff-getstaffr.dto';

export class GetStaffStaffGetController {
  constructor(private readonly getstaffr: StaffGetstaffr) {}

  // add manually the route to the controller and the request 
  async handle(): Promise<void> {
    try {
      const result = await this.getstaffr.execute(new RequestStaffGetstaffr());
      
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}