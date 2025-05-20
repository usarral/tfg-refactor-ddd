import { RequestStaffCreatestaffr } from './dto/request-staff-createstaffr.dto';
import { ResponseStaffCreatestaffr } from './dto/response-staff-createstaffr.dto';
import { UseCase } from '@shared/app/use-cases/use-case'

export class StaffCreatestaffr implements UseCase {
  constructor() {}

  async execute(request: RequestStaffCreatestaffr): Promise<ResponseStaffCreatestaffr | void> {
    // Implement your use case logic here
    throw new Error('Method not implemented.');
  }
}