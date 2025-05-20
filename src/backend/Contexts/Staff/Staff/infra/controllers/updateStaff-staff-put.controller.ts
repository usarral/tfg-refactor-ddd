import { StaffUpdatestaffr } from '../../app/use-cases/updateStaff/staff-updatestaffr.use-case';
import { RequestStaffUpdatestaffr } from '../../app/use-cases/updateStaff/dto/request-staff-updatestaffr.dto';

export class UpdateStaffStaffPutController {
  constructor(private readonly updatestaffr: StaffUpdatestaffr) {}

  // add manually the route to the controller and the request 
  async handle(): Promise<void> {
    try {
      const result = await this.updatestaffr.execute(new RequestStaffUpdatestaffr());
      
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}