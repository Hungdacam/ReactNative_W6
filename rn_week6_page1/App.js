import React from 'react';
import { View, Text, Image,SafeAreaView,  Button, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
const DATA =[
  {
    id:1,
    productName:"Ca nấu lẩu, nấu mì mini...",
    shopName: "Devang",
    image: require('./ca_nau_lau.png')
  },
  {
    id:2,
    productName:"1KG KHÔ GÀ BƠ TỎI...",
    shopName: "LTD Food",
    image: require('./ga_bo_toi.png')
  },
  {
    id:3,
    productName:"Xe cần cẩu đa năng",
    shopName: "Thế giới đồ chơi",
    image: require('./xa_can_cau.png')
  },
  {
    id:4,
    productName:"Đồ chơi dạng mô hình",
    shopName: "Thế giới đồ chơi",
    image: require('./do_choi_dang_mo_hinh.png')
  },
  {
    id:5,
    productName:"Lãnh đạo giản đơn",
    shopName: "Minh Long Book",
    image: require('./lanh_dao_gian_don.png')
  },
  {
    id:6,
    productName:"Hiểu lòng con trẻ",
    shopName: "Minh Long Book",
    image: require('./hieu_long_con_tre.png')
  },
  {
    id:7,
    productName:"Donal Trump Thiên tài lãnh đạo",
    shopName: "Minh Long Book",
    image: require('./trump.png')
  },
];
const Product = ({item})=>(
  <View style={styles.product}>
    <Image source={item.image} style={styles.productImage}/>
    <View style={styles.infoContainer}>
      <Text style={styles.productName}> {item.productName}
      </Text>
      <Text style={styles.shopName}>
        Shop <Text style={styles.shopHighlight}>{item.shopName} </Text>
      </Text>
    </View>
    <TouchableOpacity style={styles.chatButton}>
      <Text style={styles.chatButtonText}> Chat </Text>
    </TouchableOpacity>
  </View>
);
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    {/*header */}
      <View style={styles.header}>
          {/* Icon mũi tên trái */}
        <TouchableOpacity style={styles.iconContainer}>
          <Image
            source={{uri: 'https://img.icons8.com/ios-filled/50/000000/left.png'}}
            style={styles.icon}
          />
        </TouchableOpacity>
        
        {/* Tiêu đề ở giữa */}
        <Text style={styles.title}>Chat</Text>

        {/* Icon giỏ hàng */}
        <TouchableOpacity style={styles.iconContainer}>
          <Image
            source={{uri: 'https://img.icons8.com/ios-filled/50/000000/shopping-cart.png'}}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      {/*title */}
      <View style={styles.titlePage}>
        <Text style={styles.textTitlePage}>
          Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!
        </Text>
      </View>
      {/*Danh sách sản phẩm */}      
      <View style={styles.listProduct}>
          <FlatList 
            data={DATA}
            renderItem= {Product}
            keyExtractor={(item)=> item.id.toString()}
          />
      </View>

      <View style={styles.footer}>
        <TouchableOpacity>
        <MaterialIcons name="menu" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialIcons name="home" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialIcons name="undo" size={24} color="black" />
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    backgroundColor: '#1BA9FF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#00aaff',  // 
    padding:5
  },
  iconContainer: {
    padding: 5,
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: 'white',
  },
  title: {
    color: 'white',
    fontSize: 20,
  },
  titlePage:{
    height:60,
    backgroundColor: '#E5E5E5',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30
  },
  // Danh sách san rphaamr
  listProduct: {
    flex:7,
    backgroundColor: 'white'
  },
  product:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
  },
  productImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginRight: 10,
  },
  infoContainer: {
    flex: 2,
    justifyContent: 'center',
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
  shopName: {
    fontSize: 14,
    color: '#666',
  },
  shopHighlight: {
    color: 'red',
  },
  chatButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  chatButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#1BA9FF', 
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  }


});
