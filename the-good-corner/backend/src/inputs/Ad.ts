import {Field, InputType} from 'type-graphql';

@InputType()
export class AdInput {
   @Field()
   title:string

   @Field()
   price:number

   @Field()
   description:string

   @Field()
   owner:string

   @Field()
   imgUrl:string

   @Field()
   location:string

   @Field()
   category:number
}