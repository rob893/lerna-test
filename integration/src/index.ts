import { Doctor } from '@rherber/doctor';
import { Patient } from '@rherber/patient';
import { Scheduler } from '@rherber/scheduler';

const doc = new Doctor();
const pat = new Patient();
const sche = new Scheduler();

doc.testDoctor();

pat.testPatient();
sche.testScheduler();