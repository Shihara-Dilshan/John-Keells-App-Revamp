import CategoryModel from './categoryModel';
import ItemModel from './itemModel';

//TODO :: add images form this website
//https://cargillsonline.com/Web/ProductDetails?ID=SHPx2rg2P0lzXc6rCQNL+Q==
export default dummyData = [
  new CategoryModel(1, 'vegitables', [
    new ItemModel(
      1,
      'https://cargillsonline.com/VendorItems/MenuItems/VGE0241_1.png',
      'Red Onion',
      '250.00 g',
      35.0,
    ),
    new ItemModel(
      2,
      'https://cargillsonline.com/VendorItems/MenuItems/VGE0242_1.png',
      'Pumpkin',
      '500.00 g',
      40.00,
    ),
    new ItemModel(
      3,
      'https://cargillsonline.com/VendorItems/MenuItems/VGE0249_1.png',
      'Spring Onion',
      '300.00 g',
      85.00,
    ),
  ]),
  new CategoryModel(2, 'Fruits', [
    new ItemModel(
      1,
      'https://cargillsonline.com/VendorItems/MenuItems/FTE0089_1.png',
      'King Coconut',
      '1 pc',
      87.00,
    ),
    new ItemModel(
      2,
      'https://cargillsonline.com/VendorItems/MenuItems/FTE0056_1.png',
      'Imported Orange',
      '600.00 g',
      450.00,
    ),
    new ItemModel(
      3,
      'https://cargillsonline.com/VendorItems/MenuItems/FTE0062_1.png',
      'Imported Pomegranate',
      '500.00 g',
      690.00,
    ),
  ]),
  new CategoryModel(3, 'Other', [
    new ItemModel(
      1,
      'https://cargillsonline.com/VendorItems/MenuItems/FTE0084_1.png',
      'Ambul Dodan',
      '1 pc',
      53.00,
    ),
    new ItemModel(
      2,
      'https://cargillsonline.com/VendorItems/MenuItems/FTE0063_1.png',
      'Kiwi Fruit',
      '500.00 g',
      900.00,
    ),
    new ItemModel(
      3,
      'https://cargillsonline.com/VendorItems/MenuItems/VGE0246_1.png',
      'Bell Pepper Red',
      '500.00 g',
      745.00,
    ),
  ]),
];
