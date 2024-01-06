import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Category } from "./category";
import { Tag } from "./tag";
import { Field, ObjectType } from "type-graphql";
import { Length } from "class-validator";

@ObjectType() // Provenant de typeGraphQL
@Entity() // Provenant de typeORM
export class Ad extends BaseEntity {

  @Field() // Provenant de typeGraphQL
  @PrimaryGeneratedColumn()
  id: number;

  @Field() // Provenant de typeGraphQL
  @Column() // Provenant de typeORM
  @Length(3) // Provenant de class-validator
  title: string;

  @Field() // Provenant de typeGraphQL
  @Column() // Provenant de typeORM
  price: number;

  @Field() // Provenant de typeGraphQL
  @Column() // Provenant de typeORM
  description: string;

  @Field() // Provenant de typeGraphQL
  @Column() // Provenant de typeORM
  owner: string;

  @Field()
  @Column()
  imgUrl: string;

  @Field()
  @Column()
  location: string;

  // an ad has only 1 category
  // a category can contain multiple ads
  // Many to One relationship (many ads one category)
  @Field(() => Category)
  @ManyToOne(() => Category, (category) => category.ads, {
    onDelete: "CASCADE",
  }) 
  category: Category;

  // an ad can have multiple tags
  // a tag can have multiple ads
  @JoinTable()
  @ManyToMany(() => Tag, (tag) => tag.ads)
  tags: Tag[];
}
