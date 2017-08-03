(function() {
  'use strict';

  angular
    .module('taparoo')
    .controller('selectBeersController', selectBeersController)

    function selectBeersController(){
      const vm = this
      console.log('Whats up says selectBeer Controller');
      ///////////////////////////////
      // LOAD SEED CONTENT AT LOAD //
      ///////////////////////////////
      vm.$onInit = function(){
          vm.beerInventory = [
        {
          "name": "Tower E.S.B.",
          "type": "Extra Special Bitter",
          "brewery": "Bull & Bush",
          "abv": 6.8,
          "bar": "Very Good",
          "user_id": null,
          "description": "Ruby marmalade color. It is distinctive enough to like your first go at it, but also nicely balanced and drinkable enough to ensure its staying power. Its most notable flavor notes are caramel malt, finishing with a dry, somewhat tongue-coating hoppy finish.",
          "image_url": "https://cdn.shopify.com/s/files/1/0272/0957/files/Tower_ESB_2015.jpg?7412647295741330827"
        }, {
          "name": "AllGood Amber",
          "type": "Amber Ale",
          "brewery": "Bull & Bush",
          "abv": 6,
          "bar": "Good",
          "user_id": null,
          "description": "Antique amber color. Allgood Amber Ale® becomes more appreciated the more you get acquainted with it. It doesn’t slap you in the face with hops or alcohol on the first sip or two. Rather, its satisfying balance of flavors, along with its ability to be both flavorful and very drinkable, makes this beer universally appealing regardless of mood or situation.",
          "image_url": "https://cdn.shopify.com/s/files/1/0272/0957/files/Allgood_2015.jpg?3008890982502804742"
        }, {
          "name": "4.0 GPA",
          "type": "Grapefruit",
          "brewery": "Bull & Bush",
          "abv": 4,
          "bar": "Very Good",
          "user_id": null,
          "description": "At the confluence of grapefruit and hops, there exists the perfect summertime ale. Whole grapefruit are each lovingly caressed, peeled and juiced by the hands of our meticulous brewers while they whistle and dream of warm summer nights yet to come. Enjoy the fruits of their labor.  Finally, you too can have a 4.0 GPA.  Your Mom will be proud.",
          "image_url": "https://cdn.shopify.com/s/files/1/0272/0957/files/GPA_2015.jpg?11807025853315381311"
        }, {
          "name": "Happy Hop Pilsner",
          "type": "Bohemian Pilsner",
          "brewery": "Bull & Bush",
          "abv": 5.2,
          "bar": "Very Good",
          "user_id": null,
          "description": "Brilliant gold color. Soft, dry, malty aroma with a delicate hop presence. Light in body. Soft, clean, delicately malty flavors becoming gently dry on the finish. A lager should be thirst quenching and it should have character too. This beer accomplishes both– and with style!",
          "image_url": ""
        }, {
          "name": "Big Ben Brown",
          "type": "Brown Ale",
          "brewery": "Bull & Bush",
          "abv": 6.5,
          "bar": "Very Good",
          "user_id": null,
          "description": "Deep dark mahogany color. Big Ben Brown Ale® has rich, seductive flavors of molasses, chewy toffee, and dark pit fruit, all leading to a roasted malty finish.  A great beer with a burger or a steak.",
          "image_url": "https://cdn.shopify.com/s/files/1/0272/0957/files/BigBen_2015.jpg?4545272721637645871"
        }, {
          "name": "Wit Beer",
          "type": "Belgian-Style Ale",
          "brewery": "Epic",
          "abv": 5.1,
          "bar": "Very Good",
          "user_id": null,
          "description": "Slightly higher in alcohol content than traditional Wits, ours is brewed using wheat, oats, authentic Belgian yeast, malts and just a sprinkle of hops. Spices include coriander, sweet and bitter orange peel and grains of paradise.",
          "image_url": "http://www.epicbrewing.com/media/k2/items/cache/97d1d3d17841d6d3353ed857f6573ac4_S.jpg"
        }, {
          "name": "Blue Ski",
          "type": "Lager",
          "brewery": "Epic",
          "abv": 5.3,
          "bar": "Good",
          "user_id": null,
          "description": "A refreshing Colorado Rockies lager with a German Pilsner Malt backbone. The subtle malt flavor is balanced with spicy and herbal noble hops and the finish is crisp and clean",
          "image_url": "http://www.epicbrewing.com/media/k2/items/cache/f3051eb70b962b646ad926757115bce0_S.jpg"
        }, {
          "name": "Brainless Raspberries",
          "type": "Raspberry Strong Pale Ale",
          "brewery": "Epic",
          "abv": 9.7,
          "bar": "Good",
          "user_id": null,
          "description": "Hints of raspberry bubble gum flavors from the Belgian yeast and fresh raspberries tease the pallet in this Brainless® offering.",
          "image_url": "http://www.epicbrewing.com/media/k2/items/cache/24fae0cf4e190078d5b9896e00870cd9_S.jpg"
        },
      ]
    }
    vm.data = {
          "Tower E.S.B.": "Tower E.S.B.",
          "AllGood Amber": "AllGood Amber",
          "4.0 GPA:": "4.0 GPA",
          "Happy Hop Pilsner": "Happy Hop Pilsner",
          "Big Ben Brown": "Big Ben Brown",
          "Wit Beer": "Wit Beer",
          "Blue Ski": "Blue Ski",
          "Brainless Raspberries": "Brainless Raspberries"
          };
        }
}());
