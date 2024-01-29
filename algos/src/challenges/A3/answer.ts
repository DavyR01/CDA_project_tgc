/**
 * In this challenge, you must find and attach to each ad the ad (or ads)
 * with which the current ad has the most tags in common. This algo will
 * be very useful to get similar products of a given product.
 * Attached ads must be sorted by their title (A to Z).
 * You must not change the order of the main list of ads.
 *
 * @param ads List of ads without closestAds
 * @returns The same list but with a new closestAds prop on each
 */

// ↓ uncomment bellow lines and add your response!

export default function ({
  ads,
}: {
  ads: AdWithTags[];
}): AdWithTagsAndClosestAds[] {

  // console.log("ADS : ", ads)
  const transformedAds: AdWithTagsAndClosestAds[] = [];

  ads.forEach((ad) => {
    // console.log("ad : ", ad)

    const closestAds: AdWithTags[] = [];

    ads.forEach(otherAd => {
      // console.log("otherAd : ", otherAd)

      if (otherAd !== ad) {

        const commonTags = ad.tags.filter((tag) => otherAd.tags.includes(tag))

        if (commonTags.length > 0) {
          closestAds.push(otherAd)
          // console.log("commonTags : ", commonTags)
          // console.log("closestAds : ", closestAds)
        }
      }
    })

    const transformedAd: AdWithTagsAndClosestAds = {
      ...ad,
      closestAds
    }

    // console.log("TRANSFORM AD : ", transformedAd)
    transformedAds.push(transformedAd)
  })

  // console.log("TRANSFORM ADS : ", transformedAds)
  return transformedAds;
}


// used interfaces, do not touch
export interface AdWithTags {
  title: string;
  price: number;
  tags: string[];
}

export interface AdWithTagsAndClosestAds extends AdWithTags {
  closestAds: AdWithTags[];
}
