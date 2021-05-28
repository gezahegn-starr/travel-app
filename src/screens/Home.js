import React,{useState} from "react";
import { View, ActivityIndicator, Text, TextInput,Image,StyleSheet, ScrollView ,TouchableOpacity} from "react-native";
import {colors,shadow} from '../shared/global'

export default function Home(props) {
  const [selected, setSelected] = useState('UPCOMING')
  return (
    <View style={styles.welcome}>
      <View style={styles.welcomeMessage}>
        <Text style={styles.text}>Descover</Text>
        <Text style={styles.text}>A new world</Text>
      </View>

      <View style={styles.searchBox}>
        <TextInput
        placeholder={'search...'}
        style={styles.searchInput}/>
        <View style={styles.line}></View>
        <Image
        style={styles.searchIcon}
        source={require('../../assets/icons/search.png')}
        />
      </View>

      <View style={styles.locations}>
        <Text style={styles.popularText}>Popular</Text>
        <ScrollView
        style={styles.tileScrollArea}
        horizontal={true}
        snapToAlignment={"start"}
        showsHorizontalScrollIndicator={false}
        >
          <View style={styles.tile}>
            <Image
            style={styles.tileImage}
            source={require('../../assets/images/mountains.png')}
            />
            <Text style={styles.tileTitle}>Mountains</Text>
          </View>

          <View style={styles.tile}>
            <Image
            style={styles.tileImage}
            source={require('../../assets/images/beach.png')}
            />
            <Text style={styles.tileTitle}>beach</Text>
          </View>

          <View style={styles.tile}>
            <Image
            style={styles.tileImage}
            source={require('../../assets/images/city.png')}
            />
            <Text style={styles.tileTitle}>City</Text>
          </View>

        </ScrollView>
      </View>

      <View style={styles.countriesContainer}>
        <View style={styles.selceted}>
          <TouchableOpacity
          onPress={()=>{
            setSelected("UPCOMING")
          }}
          >
          <Text style={selected === 'UPCOMING' ? styles.selcetedText : styles.notSelected }>Upcoming</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=>{
              setSelected("RECENT")
            }}
          >
          <Text style={selected === 'RECENT' ? styles.selcetedText : styles.notSelected }>Recent</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
        style={styles.counteries}
        horizontal={true}
        snapToAlignment={"start"}
        showsHorizontalScrollIndicator={false}
        >
          <View
            style={styles.countryTile}
          >
            <Image
            source={require('../../assets/images/image1.png')}
            style={styles.countryImage}/>
            <View style={styles.desc}>
              <View>
                <Text>Canada </Text>
                <Text>30 March</Text>
              </View>
              <Text>></Text>
            </View>
          </View>

          <View
            style={styles.countryTile}
          >
            <Image
            source={require('../../assets/images/image2.png')}
            style={styles.countryImage}/>
            <View style={styles.desc}>
              <View>
                <Text>Seychelles </Text>
                <Text>8 April</Text>
              </View>
              <Text>></Text>
            </View>
          </View>

        <View
            style={styles.countryTile}
          >
            <Image
            source={require('../../assets/images/image2.png')}
            style={styles.countryImage}/>
            <View style={styles.desc}>
              <View>
                <Text>Seychelles </Text>
                <Text>30 April</Text>
              </View>
              <Text>></Text>
            </View>
          </View>
        </ScrollView>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  welcome: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: colors.background
  },
  welcomeMessage:{
    width: '90%',
    // backgroundColor:'lightgrey',
    height: 100,
    justifyContent: 'center',
    marginTop: 50
  },
  text:{
    fontSize: 40,
    fontWeight: '500'
  },
  searchBox:{
    height: 50,
    width:'90%',
    backgroundColor:'white',
    ...shadow,
    borderRadius: 20,
    marginTop: 20,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly'
  },
  line:{
    height:'100%',
    width: 1,
    backgroundColor:'lightgrey'
  },
  searchInput:{
    height: 30,
    width: '70%',
  },
  searchIcon:{
    height: 25,
    width: 25
  },
  locations:{
    width:'100%',
    height: 150,
    marginTop: 30,
    marginLeft: 'auto'
  },
  tileScrollArea:{
    width: '100%'
  },
  popularText:{
    fontSize: 25,
    marginLeft: 20,
    marginBottom: 20
  },
  tile:{
    height: 60,
    paddingRight: 10,
    backgroundColor:'#FFFFFF',
    borderRadius: 15,
    flexDirection:'row',
    alignItems:'center',
    marginLeft: 20,
    padding: 5,
    ...shadow
  },
  tileImage:{
    height: 50,
    width: 50,
    backgroundColor:'lightgrey',
    borderRadius: 15
  },
  tileTitle:{
    fontSize: 16,
    marginLeft: 10
  },
  countriesContainer:{
    width: '100%',
    flex: 1
  },
  selceted:{
    width:'60%',
    flexDirection:'row',
    justifyContent: 'space-between',
    marginLeft: '5%'
  },
  selcetedText:{
    fontSize: 22,
    fontWeight: '600'
  },
  notSelected:{
    color:'lightgrey',
    fontSize: 22,
    fontWeight: '600'
  },
  counteries:{
    marginTop: 15,
  },
  countryTile:{
    height: 180,
    width: 140,
    backgroundColor: 'white',
    borderRadius: 20,
    marginLeft: 25,
    alignItems:'center',
    ...shadow
  },
  countryImage:{
    width:'90%',
    height: '65%',
    marginTop: '5%',
    borderRadius: 20
  },
  desc:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:'80%',
    alignContent:'space-around',
    marginTop: 'auto',
    marginBottom:'auto',
  }
});
