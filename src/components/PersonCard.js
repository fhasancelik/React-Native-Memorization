import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {memo} from 'react';

const PersonCard = ({personInfo, setTitle, setAge}) => {
  //console.log('Person Card Rendered');

  const {email, first_name, gender, id, last_name, photo} = personInfo;

  const tryImage =
    'https://plus.unsplash.com/premium_photo-1675063046924-f55e20ef5ab3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60';
  return (
    <TouchableOpacity
      testID="personContainer"
      style={styles.mainContainer}
      onPress={() => setAge(id + 10)}>
      <View style={styles.lefttSide}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: photo}} />
        </View>

        <View style={styles.infoContainer}>
          <Text
            testID="nameBar"
            onPress={() => setTitle(first_name)}
            style={styles.name}>
            {first_name + '    ' + last_name}
          </Text>
          <Text style={styles.job}>{email}</Text>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.name}>{gender}</Text>
        <Text style={styles.job}>{id + 10}</Text>
      </View>
    </TouchableOpacity>
  );
};
//Component memo hooksu kullanımadan export edildiğinde öain state her değiştiğinde alt componentte değişklik olmasa bile render olur
//Ancak memo kullanılarak export edilidği zaman sadece ilgili componentin propslarında bir değişiklik olduğu zaman render olur
export default memo(PersonCard);

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingHorizontal: 15,
    paddingVertical: 10,
    margin: 15,
    borderRadius: 15,
  },

  lefttSide: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  infoContainer: {
    marginBottom: 40,
    marginRight: 20,
  },

  name: {
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 10,
    color: 'white',
  },

  job: {
    color: 'white',
    fontSize: 13,
    fontWeight: '800',
    color: '#6b7280',
  },

  imageContainer: {
    width: 100,
    height: 100,
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    objectFit: 'cover',
  },
});
