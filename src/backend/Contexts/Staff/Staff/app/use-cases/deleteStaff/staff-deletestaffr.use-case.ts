import { RequestStaffDeletestaffr } from './dto/request-staff-deletestaffr.dto';
import { ResponseStaffDeletestaffr } from './dto/response-staff-deletestaffr.dto';
import { UseCase } from '@shared/app/use-cases/use-case'

export class StaffDeletestaffr implements UseCase {
  constructor() {}

  async execute(request: RequestStaffDeletestaffr): Promise<ResponseStaffDeletestaffr | void> {
    // Implement your use case logic here
    throw new Error('Method not implemented.');
  }
}