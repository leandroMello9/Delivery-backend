import { Store } from 'src/models/Store';
import { User } from 'src/models/User';
import { DataSource } from 'typeorm';
declare const _default: (() => {
    type: string;
    host: string;
    port: string;
    username: string;
    password: string;
    database: string;
    entities: (typeof User | typeof Store)[];
    migrations: string[];
    autoLoadEntities: boolean;
    synchronize: boolean;
    cli: {
        migrationsDir: string;
    };
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    type: string;
    host: string;
    port: string;
    username: string;
    password: string;
    database: string;
    entities: (typeof User | typeof Store)[];
    migrations: string[];
    autoLoadEntities: boolean;
    synchronize: boolean;
    cli: {
        migrationsDir: string;
    };
}>;
export default _default;
export declare const connectionSource: DataSource;
