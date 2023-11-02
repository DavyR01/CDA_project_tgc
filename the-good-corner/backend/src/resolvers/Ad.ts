


import { AdInput } from "../inputs/Ad";
import { Ad } from "../entities/ad"; // good
// import { Ad } from "src/entities/ad"; // bad : generated automatically by auto-completion.
// import { Ad } from "../entities/ad.ts"; // bad

import { Arg, Query, Resolver, Mutation } from "type-graphql";
import { Like } from "typeorm";

@Resolver()
export class AdResolver {

   @Query(() => [Ad])
   async getAllAds(@Arg('category', { nullable: true }) category?: string) {
      if (category) {
         return await Ad.find({
            where: { category: { name: Like(`%${category}%`) } },
            relations: {
               category: true,
            },
         });
      } else {
         return await Ad.find({ relations: { category: true } });
      }
   }

   @Mutation(()=> Ad)
   async createNewAd(@Arg("adDataa") adData: AdInput){
      return await Ad.save({...adData, category: { id: adData.category}})
   }
}