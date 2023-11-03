export type CategoryCardProps = {
   id: number;
   name: string;
}

export type AdCardProps = {
   id: number;
   title: string;
   imgUrl: string;
   price: number;
   link: string;
   description: string;
   owner: string;
   location: string;
   category: {
      id: number;
      name: string;
   };
};

export type DisplayAdsType = {
   ads: AdCardProps[];
   setAds?: any;
   title?: string;
}


// route ad/edit/[id]
export type Inputs = {
   title: string;
   price: number;
   description: string;
   owner: string;
   imgUrl: string;
   location: string;
   category: number;
 }

// route ad/new
 export type category = {
   id: number;
   name: string;
}