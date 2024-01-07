import { Category } from "../entities/category";
import { Arg, Mutation, Query, Resolver } from "type-graphql";

@Resolver()
export class CategoryResolver {
  @Query(() => [Category])
  async allCategories() {
    try {
      const result = await Category.find();
      return result;
    } catch (error) {
      return `erreur resolver category : ${error}`
    }
  }

  @Mutation(() => String)
  async deleteCategoryById(@Arg("idd") myId: number) {
    console.log("id to delete", myId);
    
    const categoryToDelete = await Category.findOneByOrFail({
      id: myId,
    });
    categoryToDelete.remove();
    return "The Category has been deleted";
  }
}
