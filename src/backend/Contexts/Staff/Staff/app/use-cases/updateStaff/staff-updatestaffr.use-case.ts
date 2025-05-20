import { RequestStaffUpdatestaffr } from './dto/request-staff-updatestaffr.dto';
import { ResponseStaffUpdatestaffr } from './dto/response-staff-updatestaffr.dto';
import { UseCase } from '@shared/app/use-cases/use-case'

export class StaffUpdatestaffr implements UseCase {
  constructor() {}

  async execute(request: RequestStaffUpdatestaffr): Promise<ResponseStaffUpdatestaffr | void> {
    // Implement your use case logic here
    throw new Error('Method not implemented.');
  }
}