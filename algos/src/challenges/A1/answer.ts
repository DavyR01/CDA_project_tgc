/**
 * In this challenge, you must sort all ads by their price (cheapest first). If some of them
 * have the same price, you should sort by their title alphabetically (A to Z)
 *
 * @param ads Unsorted list of ads
 * @returns Sorted list of ads
 */

// ↓ uncomment bellow lines and add your response!

export default function ({ ads }: { ads: Ad[] }): Ad[] {

  // return ads.sort((a, b): any => {
  //   if (a.price < b.price) {
  //     return -1;
  //   } else if (a.price > b.price) {
  //     return 1;
  //   } 
  //   if (a.price === b.price) {
  //     return a.title.localeCompare(b.title)
  //   }
  // });

  return ads.sort((a, b): any => {
    if (a.price === b.price) {
      return a.title.localeCompare(b.title)
    }
    return a.price - b.price
  })


  // return ads.sort((a, b) => a.price - b.price) // Non suffisant


}



console.log('teeeest');


// used interfaces, do not touch
export interface Ad {
  title: string;
  price: number;
  tags: string[];
}
