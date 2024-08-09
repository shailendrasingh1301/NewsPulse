import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';
import SafeScreen from '../../components/SafeScreen';
import {Images} from '../../assets/images';
import {navigationRef} from '../../navigators/helper';
import {styles} from './styles';

const Detail = ({route, navigation}) => {
  const {urlToImage, title, author, publishedAt, content, url} =
    route.params.item;

  return (
    <SafeScreen>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigationRef.goBack()}>
          <Image source={Images.BackButton} style={styles.backButton} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL(url)}
          style={styles.webSourceButton}>
          <Text style={styles.webSourceText}>Web Source</Text>
          <Image source={Images.WebSource} style={styles.webSourceIcon} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.container}>
        <Image source={{uri: urlToImage}} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <View style={styles.separator} />
        <View style={styles.metaData}>
          <Text style={styles.author}>By: {author}</Text>
          <Text style={styles.date}>
            Date: {new Date(publishedAt).toLocaleDateString()}
          </Text>
        </View>
        <View style={styles.separator} />
        <Text style={styles.content}>{content}</Text>
      </ScrollView>
    </SafeScreen>
  );
};

export default Detail;
