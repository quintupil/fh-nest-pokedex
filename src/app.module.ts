import { join } from 'path';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { PokemonModule } from './pokemon/pokemon.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { EnvConfiguration } from './config/app.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // recomendado
      load: [EnvConfiguration],
    }),

    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    //MongooseModule.forRoot('mongodb://localhost:27017/nest-pokemon'),
    MongooseModule.forRootAsync({
      imports: [ConfigModule], // 🔥 CLAVE para resolver ConfigService
      inject: [ConfigService],

      useFactory: (config: ConfigService) => {
        const uri =
          config.get<string>('mongodb') ?? config.get<string>('MONGODB');
        if (!uri) throw new Error('Missing env var: MONGODB or mongodb');
        return { uri };
      },
    }),
    PokemonModule,
    CommonModule,
    SeedModule,
  ],
})
export class AppModule {
  constructor() {
    //console.log(process.env);
  }
}
