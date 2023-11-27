/**
 * In this challenge, you have to add a list of tags to each category (based on
 * ad tags in the category). Duplicate tags for one category is not permitted. Tags
 * must me sorted alphabatically. Categories order, ads order and ads tags order must remain
 * untouched.
 *
 * @param categories List of categories without tags, but with ads
 * @returns List of categories with a new prop tags
 */

// ↓ uncomment bellow lines and add your response!

export default function ({
  categories,
}: {
  categories: Category[];
}): CategoryWithTags[] {

  let result = categories.map((category, index) => {
    const newTags: string[] = []
    // console.log(category)

    // console.log(`index: ${index}`);
    category.ads.forEach(ad => {
      ad.tags.map(tag => {
        // console.log(tag)
        if (!newTags.includes(tag)) {
          newTags.push(tag)
          // console.log(newTags)
        }
      });
    });
    return { ...category, tags: newTags.sort() }
  });
  return result

  // for (let prop in categories) {
  //     let test1 = (categories[prop])
  //     console.log(test1)
  //     test1.ads.map((el, index) => {
  //         let test2 = el.tags
  //         console.log(index)
  //         console.log(test2)
  //     })
  // }

}


// used interfaces, do not touch
interface Ad {
  title: string;
  price: number;
  tags: string[];
}

export interface Category {
  ads: Ad[];
  name: string;
}

export interface CategoryWithTags extends Category {
  tags: string[];
}
