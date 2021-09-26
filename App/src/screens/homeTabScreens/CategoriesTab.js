import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  LayoutAnimation,
} from 'react-native';
import AppColors from '../../config/colors';

const CONTENT = [
  {
    isExpand: false,
    category_name: 'Grocery',
    subcategory: [
      {id: 1, val: 'All'},
      {id: 2, val: 'Pulses'},
      {id: 3, val: 'Sugar'},
      {id: 4, val: 'Flour'},
      {id: 5, val: 'Pasta/Noodles'},
    ],
  },
  {
    isExpand: false,
    category_name: 'Vegitables',
    subcategory: [
      {id: 6, val: 'All'},
      {id: 7, val: 'Pola'},
      {id: 8, val: 'Up Country'},
      {id: 9, val: 'Low Country'},
      {id: 10, val: 'Packed & Units'},
    ],
  },
  {
    isExpand: false,
    category_name: 'Fruits',
    subcategory: [
      {id: 11, val: 'All'},
      {id: 12, val: 'Inorganic'},
      {id: 13, val: 'Packed & Units'},
    ],
  },
  {
    isExpand: false,
    category_name: 'Meat',
    subcategory: [
      {id: 14, val: 'All'},
      {id: 15, val: 'Fresh Meat'},
      {id: 16, val: 'Frozen Meat'},
    ],
  },
  {
    isExpand: false,
    category_name: 'Fish',

    subcategory: [
      {id: 17, val: 'All'},
      {id: 18, val: 'Fresh Sea Food'},
    ],
  },
  {
    isExpand: false,
    category_name: 'Beverages',
    subcategory: [
      {id: 19, val: 'All'},
      {id: 20, val: 'Juices & Carbonates'},
      {id: 21, val: 'Malt Drinks'},
      {id: 22, val: 'Sports & Energy Drinks'},
      {id: 23, val: 'Water'},
      {id: 24, val: 'Cofee'},
    ],
  },
];

const ExpandableComponent = ({item, onclickFunction}) => {
  const [layoutHeight, setlayoutHeight] = useState(0);

  useEffect(() => {
    if (item.isExpand) {
      setlayoutHeight(null);
    } else {
      setlayoutHeight(0);
    }
  }, [item.isExpand]);

  return (
    <View>
      <TouchableOpacity style={style.item} onPress={onclickFunction}>
        <Text style={style.itemText}>{item.category_name}</Text>
      </TouchableOpacity>
      <View style={{height: layoutHeight, overflow: 'hidden'}}>
        {item.subcategory.map((item, key) => (
          <TouchableOpacity key={key} style={style.content}>
            <Text style={style.text}>{item.val}</Text>
            <View style={style.separator} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default function CategoriesTab() {
  const [multiSelect, setmultiSelect] = useState(false);
  const [listDateSource, setlistDateSource] = useState(CONTENT);
  const updateLayout = index => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...listDateSource];
    if (multiSelect) {
      array[index]['isExpand'] = !array[index]['isExpand'];
    } else {
      array.map((value, placeindex) =>
        placeindex === index
          ? (array[placeindex]['isExpand'] = !array[placeindex]['isExpand'])
          : (array[placeindex]['isExpand'] = false),
      );
    }
    setlistDateSource(array);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={style.container}>
        <View style={style.header}>
          <Text style={style.titleText}>Browse via Categories</Text>
          <TouchableOpacity onPress={() => setmultiSelect(!multiSelect)}>
            <Text style={style.headerButton}>
              {multiSelect
                ? 'Enable Single \n Expand'
                : 'Enable Multiple \n Expand'}
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          {listDateSource.map((item, key) => (
            <ExpandableComponent
              key={item.category_name}
              item={item}
              onclickFunction={() => {
                updateLayout(key);
              }}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    padding: 10,
  },
  titleText: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerButton: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 15,
  },
  item: {
    backgroundColor: 'white',
    padding: 20,
    borderBottomWidth: 0.5,
    borderColor: 'grey',
    elevation: 100,
    shadowOpacity: 220,
    shadowColor: 'grey',
  },
  itemText: {
    fontSize: 20,
    fontWeight: '500',
  },
  content: {
    paddingLeft: 30,
    paddingRight: 10,
    backgroundColor: '#77DD77',
  },
  text: {
    fontSize: 18,
    padding: 10,
  },
  separator: {
    height: 1,
    backgroundColor: 'white',
    width: '100%',
  },
});
