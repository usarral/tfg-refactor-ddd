import { StaffDeletestaffr } from '../../app/use-cases/deleteStaff/staff-deletestaffr.use-case';
import { RequestStaffDeletestaffr } from '../../app/use-cases/deleteStaff/dto/request-staff-deletestaffr.dto';

export class DeleteStaffStaffDeleteController {
  constructor(private readonly deletestaffr: StaffDeletestaffr) {}

  // add manually the route to the controller and the request 
  async handle(): Promise<void> {
    try {
      const result = await this.deletestaffr.execute(new RequestStaffDeletestaffr());
      
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}