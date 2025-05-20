import { StaffGetstaffsr } from '../../app/use-cases/getStaffs/staff-getstaffsr.use-case';
import { RequestStaffGetstaffsr } from '../../app/use-cases/getStaffs/dto/request-staff-getstaffsr.dto';

export class GetStaffsStaffGetController {
  constructor(private readonly getstaffsr: StaffGetstaffsr) {}

  // add manually the route to the controller and the request 
  async handle(): Promise<void> {
    try {
      const result = await this.getstaffsr.execute(new RequestStaffGetstaffsr());
      
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}