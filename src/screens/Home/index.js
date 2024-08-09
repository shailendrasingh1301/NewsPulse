import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import SafeScreen from '../../components/SafeScreen.js';
import useHomeController from './HomeController.js';
import {navigationRef} from '../../navigators/helper.js';
import {ROUTES} from '../../utils/routes.js';
import CustomTextInput from '../../components/CustomTextInput.js';
import {Images} from '../../assets/images/index.js';
import {styles} from './styles.js';

const Home = () => {
  const {
    filteredNews,
    searchValue,
    setSearchValue,
    toggleSortOrder,
    refreshing,
    onRefresh,
  } = useHomeController();

  const NewsItem = ({item}) => {
    const {urlToImage, title, description} = item;

    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => navigationRef.navigate(ROUTES.DETAIL, {item})}>
        <Image source={{uri: urlToImage}} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
            {title}
          </Text>
          <Text
            style={styles.description}
            numberOfLines={3}
            ellipsizeMode="tail">
            {description}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  return (
    <SafeScreen>
      <View style={styles.searchWrapper}>
        <CustomTextInput
          placeholder="Search news..."
          containerStyle={styles.searchContainer}
          placeholderTextColor={'rgba(15, 105, 241, 0.5)'}
          inputStyle={styles.searchInput}
          value={searchValue}
          keyboardType="default"
          onChangeText={setSearchValue}
          leftComponent={
            <Image source={Images.SearchIcon} style={styles.searchIcon} />
          }
          errorText="Please enter a valid search term"
        />
        <TouchableOpacity
          onPress={toggleSortOrder}
          style={styles.filterIconWrapper}>
          <Image source={Images.FilterIcon} style={styles.filterIcon} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredNews}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => <NewsItem item={item} />}
        ItemSeparatorComponent={renderSeparator}
        contentContainerStyle={styles.listContainer}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    </SafeScreen>
  );
};

export default Home;
