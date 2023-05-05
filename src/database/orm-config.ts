import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { User } from "../users/entities/user.entity";
import {
  LOG_LEVEL,
  POSTGRES_DB,
  POSTGRES_HOST,
  POSTGRES_PASSWORD,
  POSTGRES_PORT,
  POSTGRES_USER
} from "../../global-config";


/**
 * @ignore
 */
const ormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: POSTGRES_HOST,
  port: POSTGRES_PORT,
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  entities: [ User ],
  synchronize: true,
  autoLoadEntities: true,
  //logger: 'file',
  logging: LOG_LEVEL === 'debug' ? true : false
}

export default ormConfig
