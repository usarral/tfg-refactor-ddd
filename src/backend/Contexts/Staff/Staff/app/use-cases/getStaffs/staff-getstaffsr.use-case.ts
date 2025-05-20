import { RequestStaffGetstaffsr } from './dto/request-staff-getstaffsr.dto';
import { ResponseStaffGetstaffsr } from './dto/response-staff-getstaffsr.dto';
import { UseCase } from '@shared/app/use-cases/use-case'

export class StaffGetstaffsr implements UseCase {
  constructor() {}

  async execute(request: RequestStaffGetstaffsr): Promise<ResponseStaffGetstaffsr | void> {
    // Implement your use case logic here
    throw new Error('Method not implemented.');
  }
}