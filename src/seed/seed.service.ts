import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
//import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable()
export class SeedService {
  //private readonly axios: AxiosInstance = axios;

  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter,
  ) {}

  async executeSeed() {
    //Eliminamos toda la data primero
    await this.pokemonModel.deleteMany({}); // delete * from pokemons;

    const data = await this.http.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=650',
    );

    /*const { data } = await this.axios.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=650',
    );*/

    //const insertPromisesArray: Promise<Pokemon>[] = [];
    const pokemonToInsert: { name: string; no: number }[] = [];

    data.results.forEach(async ({ name, url }) => {
      //console.log({ name, url });

      const segments = url.split('/');
      const no = +segments[segments.length - 2];
      pokemonToInsert.push({ name, no });

      //const pokemon = await this.pokemonModel.create({ name, no });

      //Agregamos las promesa al arreglo
      //insertPromisesArray.push(this.pokemonModel.create({ name, no }));

      //const pokemon = await this.pokemonModel.create({ name, no });
      //console.log({ name, no });
    });

    //Insertamos todos los registros
    await this.pokemonModel.insertMany(pokemonToInsert);

    //await Promise.all(insertPromisesArray);

    //Este arreglo tendria especificamente la resolución de cada una de las promesas en el mismo orden, es útil pero ahora no hace falta saber ese detalle
    //const newArray = await Promise.all(insertPromisesArray);

    return 'Seed Executed';
  }
}
