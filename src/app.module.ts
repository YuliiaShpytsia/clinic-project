import { Module } from '@nestjs/common';

import { ClinicsModule } from './clinics/clinics.module';
import { DoctorsModule } from './doctors/doctors.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ClinicsModule, DoctorsModule, UsersModule],
})
export class AppModule {}
