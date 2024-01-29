"use strict";
/**
 * In this challenge, you must sort all ads by their price (cheapest first). If some of them
 * have the same price, you should sort by their title alphabetically (A to Z)
 *
 * @param ads Unsorted list of ads
 * @returns Sorted list of ads
 */
Object.defineProperty(exports, "__esModule", { value: true });

let array = [
  { title: "Vélo de course", price: 100, tags: ["Bleu", "Rouge", "Course"] },
  { title: "Robot mélangeur", price: 10, tags: ["Cuisine", "Robot"] },
  { title: "Vélo de ville", price: 50, tags: ["Vert", "Rouge", "Ville"] },
  { title: "Chaussures (41)", price: 5, tags: ["Bleu", "Rouge"] },
  { title: "Tapis", price: 150, tags: ["Blanc", "Décoration"] },
  { title: "Armoire", price: 400, tags: ["Décoration", "Meubles"] },
  { title: "Scooter électrique", price: 1000, tags: ["Blanc", "Scooter"] },
  { title: "Pots de peinture (don)", price: 0, tags: [] },
  { title: "Boîtes à thé", price: 5, tags: ["Rangements"] },
]

// ↓ uncomment bellow lines and add your response!
function default_1(_a) {
  var ads = _a;
  return ads.sort(function (a, b) {
    if (a.price < b.price) {
      return -1;
    }
    else if (a.price > b.price) {
      return 1;
    }
    if (a.price === b.price) {
      return a.title.localeCompare(b.title);
    }
  });
}

console.log(default_1(array));

exports.default = default_1;
console.log('teeeest');


