
import React from 'react';
import {
 
  FlatList,
 TouchableOpacity,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { useGetAllProductsQuery } from '../../redux/query';
import ProductCard from '../../components/ProductCard/ProductCard';
import {getResponsiveFontSize } from '../../../global/constants';
import TouchableResize from '../../components/TouchableResize/TouchableResize';
import { Colors } from '../../../global';
import { globalStyles } from '../../../global/globalStyles';
import { TextInput } from 'react-native';
import SearchSvg from '../../../assets/svg/Search_Icon.svg'
import FocusAwareStatusBar from '../../components/FocusAwareStausBar/FocusAwareStatusBars';
import { styles } from './ProductScreenStyles';
const ProductsScreen=({userName,dispatch}) =>{
  
const {data}=useGetAllProductsQuery()


const [productsData, setProductsData] = React.useState([]);
const [loading,setLoading]=React.useState(false)
const toggleLoading=()=>setLoading(!loading)
const loadMoreData = () => {
  setLoading(true)
  setTimeout(() => {
    const newData = data?.products?.slice(productsData?.length, productsData?.length + 10);
    setProductsData((prevData) => [...prevData, ...newData]);
    setLoading(false);
  }, 1000);

};
const renderProducts=React.useCallback(({item,index})=>{
  return(
    <ProductCard
    imageUri={item?.thumbnail}
    productName={item?.title}
    productPrice={item?.price}
productId={item?.id}
    />
  )
},[data?.products])
React.useEffect(()=>{
  setProductsData( data?.products?.slice(0, 10))
},[data])
const flatListRef=React.useRef(null)
const [searchText,setSearchText]=React.useState("")
const [filteredData ,setFilteredData]=React.useState([])

React.useEffect(()=>{
    setFilteredData(
        data?.products?.filter((product) =>
        product.title.toLowerCase().includes(searchText.toLowerCase())
        )
    )
},[searchText])

  return (
    
     <View style={{...globalStyles.screenView,justifyContent:"center",alignItems:"center",}}>
        <FocusAwareStatusBar isTopSpace={true} isTransparent={true}/>
        <View style={styles.searchCON}>
            <TouchableOpacity  hitSlop={{top:20,right:20,left:20,bottom:20}} style={{alignItems:"center",justifyContent:"center"}}>
            <SearchSvg style={{marginLeft:10}}/>
                </TouchableOpacity>
        <TextInput 
placeholder='Search here...'
onChangeText={(txt)=>setSearchText(txt)}
style={styles.textInput}
/>
<View/>

        </View>

     <FlatList
     ref={flatListRef}
     data={filteredData?.length>0?filteredData:productsData}
     renderItem={renderProducts}
     keyExtractor={(item,index)=>index.toString()}
     numColumns={2}
     showsVerticalScrollIndicator={false}
     scrollEnabled={true}
     style={globalStyles.marginTop(15)}
     ListFooterComponent={
        productsData?.length!==data?.products?.length &&
   
      <View style={{  marginTop: 16,
        alignItems: 'center',}}>
      
      <TouchableResize 
      name={"Load More"}
      loading={loading}
      onPress={loadMoreData}
      textStyle={{  textAlign:"center",
      fontSize:getResponsiveFontSize(13),
      lineHeight:15,
      fontWeight:"500",color:Colors.BLACK}}
      style={styles.touchableResize}
      />

    
       
      </View>
    }
     />

     </View>
   
  );
}
const mapStateToProps=(state)=>({
  userName:state?.user?.userName
})
const mapDispatchToProps=(dispatch)=>({
  dispatch
})
export default connect(mapStateToProps,mapDispatchToProps)( ProductsScreen);
