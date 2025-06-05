import { Module } from '@nestjs/common';

import { ClinicsModule } from './clinics/clinics.module';
import { DoctorsModule } from './doctors/doctors.module';
import { UsersModule } from './users/users.module';
import configuration from './configs/configuration';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    ClinicsModule,
    DoctorsModule,
    UsersModule,
  ],
})
export class AppModule {}
