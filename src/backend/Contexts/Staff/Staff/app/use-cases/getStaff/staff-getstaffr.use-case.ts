import { RequestStaffGetstaffr } from './dto/request-staff-getstaffr.dto';
import { ResponseStaffGetstaffr } from './dto/response-staff-getstaffr.dto';
import { UseCase } from '@shared/app/use-cases/use-case'

export class StaffGetstaffr implements UseCase {
  constructor() {}

  async execute(request: RequestStaffGetstaffr): Promise<ResponseStaffGetstaffr | void> {
    // Implement your use case logic here
    throw new Error('Method not implemented.');
  }
}