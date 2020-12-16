const data = [
  {
    id: 1,
    name: 'BECKS',
    category: 'spirit',
    type: 'beer',
    flavor: 'plain',
    price: 199,
    volume: 12,
    inStock: 34,
    image:
      'https://2rowdistributing.com/wp-content/uploads/2018/08/Becks_Blue.png',
    createdAt: '2020-12-16T06:20:10.861Z',
    updatedAt: '2020-12-16T06:20:10.861Z'
  },
  {
    id: 2,
    name: 'BITTER UNION',
    category: 'bitter',
    type: null,
    flavor: 'rhurbarb-hibiscus',
    price: 1199,
    volume: 3,
    inStock: 20,
    image:
      'https://images.squarespace-cdn.com/content/v1/58457bca8419c26ae09f8436/1572278549818-OGG9MMAE1M22CILQUMWD/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0topjEaZcWjtmMYdCWL4dkGbxs35J-ZjFa9s1e3LsxrX8g4qcOj2k2AL08mW_Htcgg/BU+Rhubarb+100ml.png?format=2500w',
    createdAt: '2020-12-16T06:20:10.866Z',
    updatedAt: '2020-12-16T06:20:10.866Z'
  },
  {
    id: 3,
    name: 'Corona',
    category: 'spirit',
    type: 'beer',
    flavor: 'extra',
    price: 199,
    volume: 13,
    inStock: 30,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/0/04/Corona_Extra_beer_bottle_%282019%29.png',
    createdAt: '2020-12-16T06:20:10.870Z',
    updatedAt: '2020-12-16T06:50:22.661Z'
  },
  {
    id: 4,
    name: 'Cranberry Juice Cons',
    category: 'non-alcoholic',
    type: 'Juice',
    flavor: null,
    price: 299,
    volume: 16,
    inStock: 97,
    image:
      'https://www.totalwine.com/dynamic/x490,sq/media/sys_master/twmmedia/hb9/h7a/10987886280734.png',
    createdAt: '2020-12-16T06:20:10.874Z',
    updatedAt: '2020-12-16T06:20:10.874Z'
  },
  {
    id: 5,
    name: "Dr. Shade's",
    category: 'bitter',
    type: null,
    flavor: null,
    price: 899,
    volume: 2,
    inStock: 0,
    image:
      'https://www.quicksilverscientific.com/wp-content/uploads/2020/04/Bitter9-Render.png',
    createdAt: '2020-12-16T06:20:10.878Z',
    updatedAt: '2020-12-16T06:20:10.878Z'
  },
  {
    id: 9,
    name: 'FEVER-TREE',
    category: 'non-alcoholic',
    type: 'soda',
    flavor: 'plain',
    price: 199,
    volume: 5,
    inStock: 200,
    image: 'https://www.allmart.ca/images/large/FEV500SW_LRG.png',
    createdAt: '2020-12-16T06:20:10.897Z',
    updatedAt: '2020-12-16T06:20:10.897Z'
  },
  {
    id: 10,
    name: 'FEVER-TREE',
    category: 'non-alcoholic',
    type: 'soda',
    flavor: 'ginger',
    price: 199,
    volume: 5,
    inStock: 70,
    image:
      'https://cdn.shopify.com/s/files/1/0403/4629/products/FT1_GingerBeer_200ml_1024x1024.png?v=1588333228',
    createdAt: '2020-12-16T06:20:10.899Z',
    updatedAt: '2020-12-16T06:20:10.899Z'
  },
  {
    id: 11,
    name: 'FEVER-TREE',
    category: 'non-alcoholic',
    type: 'soda',
    flavor: 'cola',
    price: 199,
    volume: 5,
    inStock: 35,
    image: 'https://media.danmurphys.com.au/dmo/product/457077-1.png',
    createdAt: '2020-12-16T06:20:10.901Z',
    updatedAt: '2020-12-16T06:20:10.901Z'
  },
  {
    id: 12,
    name: 'FEVER-TREE',
    category: 'non-alcoholic',
    type: 'soda',
    flavor: 'lemon',
    price: 199,
    volume: 5,
    inStock: 140,
    image:
      'https://fevertree.s3.eu-west-2.amazonaws.com/thumbs/500x1200e/6907aa78ac454dc329692bbbbfc31a83.png',
    createdAt: '2020-12-16T06:20:10.904Z',
    updatedAt: '2020-12-16T06:20:10.904Z'
  },
  {
    id: 7,
    name: 'FEVER-TREE',
    category: 'non-alcoholic',
    type: 'soda',
    flavor: 'pink-grapefruit',
    price: 199,
    volume: 5,
    inStock: 150,
    image:
      'https://fevertree.s3.eu-west-2.amazonaws.com/thumbs/500x1200e/c060ee379822fb5c306465334bd8bb38.png',
    createdAt: '2020-12-16T06:20:10.889Z',
    updatedAt: '2020-12-16T06:20:10.889Z'
  },
  {
    id: 6,
    name: 'FEVER-TREE',
    category: 'non-alcoholic',
    type: 'soda',
    flavor: 'plain',
    price: 199,
    volume: 5,
    inStock: 50,
    image:
      'https://cdn.shopify.com/s/files/1/0575/7329/products/FeverTree_Tonic_500_2048x2048.png?v=1591329728',
    createdAt: '2020-12-16T06:20:10.886Z',
    updatedAt: '2020-12-16T06:20:10.886Z'
  },
  {
    id: 8,
    name: 'FEVER-TREE',
    category: 'non-alcoholic',
    type: 'soda',
    flavor: 'mexican-lime',
    price: 199,
    volume: 5,
    inStock: 120,
    image:
      'https://www.drinkwarehouseuk.co.uk/bmz_cache/b/b38f5287badf0367c5b3235f0ab740c1.image.207x750.png',
    createdAt: '2020-12-16T06:20:10.894Z',
    updatedAt: '2020-12-16T06:20:10.894Z'
  },
  {
    id: 16,
    name: 'GRAY GOOSE',
    category: 'spirit',
    type: 'vodka',
    flavor: 'la-poire',
    price: 2599,
    volume: 26,
    inStock: 67,
    image:
      'https://www.greygoose.com/binaries/content/gallery/greygoose/products/la-poire/portfolio.png',
    createdAt: '2020-12-16T06:20:10.917Z',
    updatedAt: '2020-12-16T06:51:06.746Z'
  },
  {
    id: 13,
    name: 'GRAY GOOSE',
    category: 'spirit',
    type: 'vodka',
    flavor: 'la-vanille',
    price: 3399,
    volume: 26,
    inStock: 50,
    image:
      'https://www.greygoose.com/binaries/largeretina/content/gallery/greygoose/products/la-vanille/bottle.png',
    createdAt: '2020-12-16T06:20:10.907Z',
    updatedAt: '2020-12-16T06:20:10.907Z'
  },
  {
    id: 14,
    name: 'GRAY GOOSE',
    category: 'spirit',
    type: 'vodka',
    flavor: 'cherry-noir',
    price: 3599,
    volume: 26,
    inStock: 35,
    image:
      'https://www.greygoose.com/binaries/largeretina/content/gallery/greygoose/products/cherry-noir/bottle.png',
    createdAt: '2020-12-16T06:20:10.909Z',
    updatedAt: '2020-12-16T06:20:10.909Z'
  },
  {
    id: 15,
    name: 'GRAY GOOSE',
    category: 'spirit',
    type: 'vodka',
    flavor: 'le-citron',
    price: 399,
    volume: 26,
    inStock: 25,
    image:
      'https://www.greygoose.com/binaries/largeretina/content/gallery/greygoose/products/le-citron/bottle.png',
    createdAt: '2020-12-16T06:20:10.913Z',
    updatedAt: '2020-12-16T06:20:10.913Z'
  },
  {
    id: 17,
    name: 'GRAY GOOSE',
    category: 'spirit',
    type: 'vodka',
    flavor: 'le-melon',
    price: 3199,
    volume: 26,
    inStock: 20,
    image:
      'https://www.greygoose.com/binaries/largeretina/content/gallery/greygoose/products/le-melon/bottle.png',
    createdAt: '2020-12-16T06:20:10.921Z',
    updatedAt: '2020-12-16T06:20:10.921Z'
  },
  {
    id: 18,
    name: 'GRAY GOOSE',
    category: 'spirit',
    type: 'vodka',
    flavor: 'plain',
    price: 3999,
    volume: 26,
    inStock: 45,
    image:
      'https://www.greygoose.com/binaries/largeretina/content/gallery/greygoose/products/grey-goose-vodka/bottle.png',
    createdAt: '2020-12-16T06:20:10.924Z',
    updatedAt: '2020-12-16T06:20:10.924Z'
  },
  {
    id: 19,
    name: 'GREY GOOSE',
    category: 'spirit',
    type: 'vodka',
    flavor: "l'orange",
    price: 2799,
    volume: 26,
    inStock: 47,
    image:
      'https://www.greygoose.com/binaries/largeretina/content/gallery/greygoose/products/l-oran/bottle.png',
    createdAt: '2020-12-16T06:20:10.929Z',
    updatedAt: '2020-12-16T06:20:10.929Z'
  },
  {
    id: 20,
    name: 'Guinness',
    category: 'spirit',
    type: 'beer',
    flavor: 'plain',
    price: 299,
    volume: 12,
    inStock: 77,
    image:
      'https://d3czfiwbzom72b.cloudfront.net/wp-content/uploads/2018/10/133-GUINNESS-DRAUGHT.png',
    createdAt: '2020-12-16T06:20:10.948Z',
    updatedAt: '2020-12-16T06:20:10.948Z'
  },
  {
    id: 21,
    name: 'HIBIKI ',
    category: 'spirit',
    type: 'whisky',
    flavor: 'honey-rose',
    price: 12599,
    volume: 26,
    inStock: 20,
    image:
      'https://whisky.suntory.com/sites/default/files/2019-01/product-hibiki-thumb1_us_0.png',
    createdAt: '2020-12-16T06:20:10.977Z',
    updatedAt: '2020-12-16T06:20:10.977Z'
  },
  {
    id: 22,
    name: "Jack Daniel's",
    category: 'bitter',
    type: null,
    flavor: null,
    price: 999,
    volume: 3,
    inStock: 35,
    image:
      'https://www.totalwine.com/dynamic/490x/media/sys_master/twmmedia/h19/he2/12671230967838.png',
    createdAt: '2020-12-16T06:20:10.989Z',
    updatedAt: '2020-12-16T06:20:10.989Z'
  },
  {
    id: 23,
    name: 'Jim Beam',
    category: 'spirit',
    type: 'bourbon',
    flavor: 'rye',
    price: 2599,
    volume: 26,
    inStock: 50,
    image:
      'https://www.jimbeam.com/sites/default/files/2019-01/Jim-Beam-Rye_240x600.jpg',
    createdAt: '2020-12-16T06:20:11.000Z',
    updatedAt: '2020-12-16T06:20:11.000Z'
  },
  {
    id: 24,
    name: 'Lakewood',
    category: 'non-alcoholic',
    type: 'juice',
    flavor: 'orange',
    price: 399,
    volume: 12,
    inStock: 50,
    image:
      'https://cdn.shopify.com/s/files/1/0830/1819/products/ORGNFCPureOrange32_45946_1563x.png?v=1582648584',
    createdAt: '2020-12-16T06:20:11.002Z',
    updatedAt: '2020-12-16T06:20:11.002Z'
  },
  {
    id: 25,
    name: 'Lakewood',
    category: 'non-alcoholic',
    type: 'juice',
    flavor: 'pomegranate',
    price: 1199,
    volume: 26,
    inStock: 50,
    image:
      'https://cdn.shopify.com/s/files/1/0830/1819/products/PurePomegranate32BottleN8_1563x.png?v=1582568399',
    createdAt: '2020-12-16T06:20:11.005Z',
    updatedAt: '2020-12-16T06:20:11.005Z'
  },
  {
    id: 26,
    name: 'MACALLAN',
    category: 'spirit',
    type: 'whisky',
    flavor: 'sherry-oak',
    price: 8999,
    volume: 26,
    inStock: 30,
    image:
      'https://www.themacallan.com/sites/g/files/jrulke166/files/styles/product_page_image/public/2018-09/sherry-oak-bottle.png?itok=vuzNM2fZ',
    createdAt: '2020-12-16T06:20:11.007Z',
    updatedAt: '2020-12-16T06:20:11.007Z'
  },
  {
    id: 27,
    name: 'Michelob ULTRA',
    category: 'spirit',
    type: 'beer',
    flavor: 'plain',
    price: 169,
    volume: 12,
    inStock: 50,
    image:
      'https://lh3.googleusercontent.com/proxy/G23UIh9XyZMLzRCvg9YJWF_pko0R0xq440EAzLSbxmO5QNEAMzSIEOq_Dsy30PfmznYOq_i59_HbRE7tW1xr50TvRR3IeY_hGMERlb75th0Df01omd0AP-dTTcizs6yp_f0',
    createdAt: '2020-12-16T06:20:11.010Z',
    updatedAt: '2020-12-16T06:20:11.010Z'
  },
  {
    id: 28,
    name: 'Modelo',
    category: 'spirit',
    type: 'beer',
    flavor: 'espacial',
    price: 199,
    volume: 12,
    inStock: 10,
    image:
      'https://www.kingdomliquor.com/wp-content/uploads/2014/10/Modelo-Especial-Bottle.png',
    createdAt: '2020-12-16T06:20:11.012Z',
    updatedAt: '2020-12-16T06:20:11.012Z'
  },
  {
    id: 29,
    name: 'Negra Modelo',
    category: 'spirit',
    type: 'beer',
    flavor: 'cerveza',
    price: 199,
    volume: 12,
    inStock: 25,
    image:
      'https://www.kingdomliquor.com/wp-content/uploads/2014/10/Negra-Modelo-Bottle.png',
    createdAt: '2020-12-16T06:20:11.017Z',
    updatedAt: '2020-12-16T06:20:11.017Z'
  },
  {
    id: 30,
    name: 'SANTA CRUZ',
    category: 'non-alcoholic',
    type: 'soda',
    flavor: 'fresca',
    price: 299,
    volume: 26,
    inStock: 30,
    image:
      'https://s3.us-east-2.amazonaws.com/jms-s3-mkt-consumer-p-pmc6/tmp/image-thumbnails/santacruzorganic/products/agua-fresca/image-thumb__3767__auto_fa68343f5007a86f2d6840001181fd80/Grapefruit_AguaFresca.png',
    createdAt: '2020-12-16T06:20:11.020Z',
    updatedAt: '2020-12-16T06:20:11.020Z'
  },
  {
    id: 31,
    name: 'SAPPORO',
    category: 'spirit',
    type: 'beer',
    flavor: 'plain',
    price: 299,
    volume: 16,
    inStock: 20,
    image:
      'https://www.totalwine.com/dynamic/490x/media/sys_master/twmmedia/h85/he4/9770786848798.png',
    createdAt: '2020-12-16T06:20:11.029Z',
    updatedAt: '2020-12-16T06:20:11.029Z'
  },
  {
    id: 32,
    name: "SCRAPPY'S BITTERS",
    category: 'bitter',
    type: null,
    flavor: 'orange',
    price: 1099,
    volume: 1,
    inStock: 4,
    image:
      'https://www.totalwine.com/dynamic/490x/media/sys_master/twmmedia/h39/h47/10678705586206.png',
    createdAt: '2020-12-16T06:20:11.037Z',
    updatedAt: '2020-12-16T06:20:11.037Z'
  },
  {
    id: 33,
    name: 'SIANT JAMES',
    category: 'bitter',
    type: null,
    flavor: 'caribean-aromatic',
    price: 299,
    volume: 1,
    inStock: 35,
    image:
      'https://www.vinatis.co.uk/40665-detail_default/saint-james-aromatic-cocktail-bitters.png',
    createdAt: '2020-12-16T06:20:11.040Z',
    updatedAt: '2020-12-16T06:20:11.040Z'
  },
  {
    id: 34,
    name: 'SICILIA',
    category: 'non-alcoholic',
    type: 'juice',
    flavor: 'lime',
    price: 199,
    volume: 3,
    inStock: 300,
    image:
      'https://s3.pricemestatic.com/Images/RetailerProductImages/StRetailer2364/rp_24798779_0079822016.png',
    createdAt: '2020-12-16T06:20:11.042Z',
    updatedAt: '2020-12-16T06:20:11.042Z'
  },
  {
    id: 35,
    name: 'SICILIA',
    category: 'non-alcoholic',
    type: 'juice',
    flavor: 'lemon',
    price: 199,
    volume: 3,
    inStock: 200,
    image:
      'https://cdn.shopify.com/s/files/1/0046/2730/0455/products/000_Sicilia_7oz_Lemon_Juice_Squeezed_USA_432x432.png?v=1601073978',
    createdAt: '2020-12-16T06:20:11.045Z',
    updatedAt: '2020-12-16T06:20:11.045Z'
  },
  {
    id: 36,
    name: 'STELLA ARTOIS',
    category: 'spirit',
    type: 'beer',
    flavor: 'belgian',
    price: 149,
    volume: 12,
    inStock: 10,
    image: 'https://media.danmurphys.com.au/dmo/product/72869-1.png',
    createdAt: '2020-12-16T06:20:11.047Z',
    updatedAt: '2020-12-16T06:20:11.047Z'
  },
  {
    id: 39,
    name: 'The Bitter Housewife',
    category: 'bitter',
    type: null,
    flavor: 'barrel-aged',
    price: 589,
    volume: 3,
    inStock: 0,
    image:
      'https://cdn.shopify.com/s/files/1/0141/7320/8630/products/BR100-CX-PX-EDIT-1024x1024-bitters_product_photo_1024x.png?v=1589600826',
    createdAt: '2020-12-16T06:20:11.055Z',
    updatedAt: '2020-12-16T06:20:11.055Z'
  },
  {
    id: 37,
    name: 'The Bitter Housewife',
    category: 'bitter',
    type: null,
    flavor: 'orange',
    price: 989,
    volume: 3,
    inStock: 20,
    image:
      'https://cdn.shopify.com/s/files/1/0141/7320/8630/products/OR100-CX-PX-EDIT-1024x1024-bitters_product_photo_1024x.png?v=1590181018',
    createdAt: '2020-12-16T06:20:11.050Z',
    updatedAt: '2020-12-16T06:20:11.050Z'
  },
  {
    id: 38,
    name: 'The Bitter Housewife',
    category: 'bitter',
    type: null,
    flavor: 'old-fashion',
    price: 889,
    volume: 3,
    inStock: 35,
    image:
      'https://cdn.shopify.com/s/files/1/0141/7320/8630/products/AB100-CX-PX-EDIT-1024x1024-bitters_product_photo_1024x.png?v=1589601177',
    createdAt: '2020-12-16T06:20:11.052Z',
    updatedAt: '2020-12-16T06:20:11.052Z'
  },
  {
    id: 41,
    name: 'The Bitter Housewife',
    category: 'bitter',
    type: null,
    flavor: 'cardamom',
    price: 899,
    volume: 3,
    inStock: 10,
    image:
      'https://cdn.shopify.com/s/files/1/0141/7320/8630/products/CB100-CX-PX-EDIT-1024x1024-bitters_product_photo_1024x.png?v=1590180741',
    createdAt: '2020-12-16T06:20:11.061Z',
    updatedAt: '2020-12-16T06:20:11.061Z'
  },
  {
    id: 40,
    name: 'The Bitter Housewife',
    category: 'bitter',
    type: null,
    flavor: 'grapefruit',
    price: 799,
    volume: 3,
    inStock: 25,
    image:
      'https://cdn.shopify.com/s/files/1/0141/7320/8630/products/GF100-CX-PX-EDIT-1024x1024-bitters_product_photo_1024x.png?v=1589601007',
    createdAt: '2020-12-16T06:20:11.058Z',
    updatedAt: '2020-12-16T06:20:11.058Z'
  },
  {
    id: 42,
    name: 'The MACALLAN',
    category: 'spirit',
    type: 'whisky',
    flavor: 'sherry-oak-vanilla',
    price: 10099,
    volume: 26,
    inStock: 50,
    image:
      'https://www.themacallan.com/sites/g/files/jrulke166/files/styles/product_page_image/public/MAC2019_18YO_Double_Cask_700ml_Bottle_1024x1024_no_reflection_0.png?itok=u53IRUwS',
    createdAt: '2020-12-16T06:20:11.064Z',
    updatedAt: '2020-12-16T06:20:11.064Z'
  }
]

module.exports = data
