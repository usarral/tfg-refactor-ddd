import { StaffCreatestaffr } from '../../app/use-cases/createStaff/staff-createstaffr.use-case';
import { RequestStaffCreatestaffr } from '../../app/use-cases/createStaff/dto/request-staff-createstaffr.dto';

export class CreateStaffStaffPostController {
  constructor(private readonly createstaffr: StaffCreatestaffr) {}

  // add manually the route to the controller and the request 
  async handle(): Promise<void> {
    try {
      const result = await this.createstaffr.execute(new RequestStaffCreatestaffr());
      
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}