import CategoryModel from './categoryModel';
import ItemModel from './itemModel';

//TODO :: add images form this website
//https://cargillsonline.com/Web/ProductDetails?ID=SHPx2rg2P0lzXc6rCQNL+Q==
export default dummyData = [
  new CategoryModel(1, 'Foods', [
    new ItemModel(
      1,
      'https://cargillsonline.com/VendorItems/MenuItems/VGE0237_1.png',
      'Avacardo',
      '1 Kg',
      200.0,
    ),
    new ItemModel(
      2,
      'https://cargillsonline.com/VendorItems/MenuItems/VGE0241_1.png',
      'Avacardo',
      '1 Kg',
      200.0,
    ),
    new ItemModel(
      3,
      'https://cargillsonline.com/VendorItems/MenuItems/VGE0206_1.png',
      'Avacardo',
      '1 Kg',
      200.0,
    ),
  ]),
  new CategoryModel(2, 'Foods2', [
    new ItemModel(
      1,
      'https://cargillsonline.com/VendorItems/MenuItems/VGE0206_1.png',
      'Avacardo sas',
      '1 Kg',
      100.0,
    ),
    new ItemModel(
      2,
      'https://cargillsonline.com/VendorItems/MenuItems/VGE0241_1.png',
      'Avacardo sas',
      '1 Kg',
      100.0,
    ),
    new ItemModel(
      3,
      'https://cargillsonline.com/VendorItems/MenuItems/VGE0237_1.png',
      'Avacardo sas',
      '1 Kg',
      100.0,
    ),
  ]),
  new CategoryModel(3, 'Foods222', [
    new ItemModel(
      1,
      'https://cargillsonline.com/VendorItems/MenuItems/VGE0206_1.png',
      'Avacardo sas',
      '1 Kg',
      100.0,
    ),
    new ItemModel(
      2,
      'https://cargillsonline.com/VendorItems/MenuItems/VGE0241_1.png',
      'Avacardo sas',
      '1 Kg',
      100.0,
    ),
    new ItemModel(
      3,
      'https://cargillsonline.com/VendorItems/MenuItems/VGE0237_1.png',
      'Avacardo sas',
      '1 Kg',
      100.0,
    ),
  ]),
];
