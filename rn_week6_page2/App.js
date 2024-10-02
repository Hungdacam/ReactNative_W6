import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity
} from 'react-native';

const DATA = [
  {
    id: 1,
    name: "Cáp chuyển từ Cổng USB sang PS2...",
    price: "69.900 đ",
    discount: "-39%",
    image: require('./anh1.png'),
    rating: 4.5,
    reviews: 15
  },
  {
    id: 2,
    name: "Cáp chuyển từ Cổng USB sang PS2...",
    price: "69.900 đ",
    discount: "-39%",
    image: require('./anh2.png'),
    rating: 4.5,
    reviews: 15
  },
  {
    id: 3,
    name: "Cáp chuyển từ Cổng USB sang PS2...",
    price: "69.900 đ",
    discount: "-39%",
    image: require('./anh3.png'),
    rating: 4.5,
    reviews: 15
  },
  {
    id: 4,
    name: "Cáp chuyển từ Cổng USB sang PS2...",
    price: "69.900 đ",
    discount: "-39%",
    image: require('./anh4.png'),
    rating: 4.5,
    reviews: 15
  },
  {
    id: 5,
    name: "Cáp chuyển từ Cổng USB sang PS2...",
    price: "69.900 đ",
    discount: "-39%",
    image: require('./anh5.png'),
    rating: 4.5,
    reviews: 15
  },
  {
    id: 6,
    name: "Cáp chuyển từ Cổng USB sang PS2...",
    price: "69.900 đ",
    discount: "-39%",
    image: require('./anh6.png'),
    rating: 4.5,
    reviews: 15
  },
  
];

const ProductItem = ({ item }) => (
  <View style={styles.product}>
    <Image source={item.image} style={styles.productImage} />
    <Text style={styles.productName}>{item.name}</Text>
    <View style={styles.ratingContainer}>
      <Text style={styles.starRating}>★★★★☆</Text>
      <Text style={styles.reviewCount}>({item.reviews})</Text>
    </View>
    <View style={styles.priceContainer}>
      <Text style={styles.productPrice}>{item.price}</Text>
      <Text style={styles.productDiscount}>{item.discount}</Text>
    </View>
    
  </View>
);

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/left.png' }}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder="Dây cáp usb"
        />
        <TouchableOpacity>
          <Image
            source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/shopping-cart.png' }}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/menu.png' }}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      {/* Product Grid */}
      <FlatList
        data={DATA}
        renderItem={({ item }) => <ProductItem item={item} />}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        style={styles.productList}
      />

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity>
          <Image
            source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/home.png' }}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/back.png' }}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1BA9FF',
    padding: 10,
  },
  searchInput: {
    flex: 1,
    backgroundColor: 'white',
    padding: 8,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: 'white',
    marginHorizontal:5
  },
  productList: {
    padding: 10,
  },
  product: {
    flex: 1,
    backgroundColor: 'white',
    margin: 5,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starRating: {
    color: '#FFD700',  // Gold color for stars
    fontSize: 12,
  },
  reviewCount: {
    fontSize: 12,
    marginLeft: 5,
  },
  priceContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop: 5,
    width:'100%',
    paddingHorizontal:10
  },
  productPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  productDiscount: {
    fontSize: 12,
    color: 'red',
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#1BA9FF',
    padding: 10,
  }
});
