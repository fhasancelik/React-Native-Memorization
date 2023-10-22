import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState, useCallback, useMemo} from 'react';
import PersonCard from '../components/PersonCard';
import {data} from '../utils/Constants';

const HomeScreen = () => {
  const [isGreen, setIsGreen] = useState(false);
  const [title, setTitle] = useState('Kişi Listesi');
  const [age, setAge] = useState(0);

  //Bu fonksiyon prop olarak PersonCarda geçildiği için tıklanmasa bile PersonCard Render olur

  // const setAppTitle = willSetTitle => {

  //   console.log('Fonksiyon Çalıştı')
  //   for (let i = 0; i < 10000000; i++) {}

  //   setTitle(willSetTitle);
  // };

  //ama useCallBavk yada useMemo gibi fonskiyon cachleyen hookslarla bu fonksiyonlar kullanılırsa bu durum ortadan kalkar

  //useCallBack içerisinde fonskiyon çalıştırır const deneme=useCallBack((paramatre)=>{fonksiyon buraya yazılır},[])

  const cachedSetAppTitle = useCallback(willSetTitle => {
    for (let i = 0; i < 100000000; i++) {}

    setTitle(willSetTitle);
  }, []);

  const handleSetAge = () => {
   // console.log('Yaş Bilgisi Fonksiyonu Çalıştı');
    for (let i = 0; i < 100000000; i++) {}

    return age;
  };

  //useMemo ise fonksiyonu çağırır const deneme =useMemo(()=>cagrılacakFonskiyon,[fonksiyonun ne zaman çağrılacağının belirtisi])
  const cachedSetAge = useMemo(() => handleSetAge(), [age]);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text
        testID='appTitle'
          style={[styles.title, {color: isGreen ? '#16c784' : 'white'}]}
          onPress={() => setIsGreen(!isGreen)}>
          {title}
        </Text>
        <Text style={styles.title}>Yaşı : {cachedSetAge}</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <PersonCard
            setTitle={cachedSetAppTitle}
            setAge={setAge}
            personInfo={item}
          />
        )}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#6b7280',
  },

  headerContainer: {
    backgroundColor: 'black',
    paddingHorizontal: 35,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: 'white',
  },
});
