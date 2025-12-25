import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import EmptyComponent from '../../components/empty';
import {getTemp, urlIcon} from '../../helps/string';
import {updateFavoriteAction} from '../../redux/favorite/actions';
import {getFavoriteState} from '../../redux/favorite/selector';
import FavoriteItem from './components/favoriteItem';
import styles from './style';

const FavoriteScreen = () => {
  const dispatch = useDispatch();
  const favoriteSelector = useSelector(getFavoriteState);

  const onRemove = item => {
    dispatch(updateFavoriteAction(item));
  };

  const renderItem = ({item}) => {
    return (
      <FavoriteItem
        location={item?.name || ''}
        temperature={getTemp(item?.main?.temp || '')}
        description={item?.weather?.[0]?.description || ''}
        iconUrl={urlIcon(item?.weather?.[0]?.icon || '')}
        humidity={item?.main?.humidity || ''}
        windSpeed={item?.wind?.speed || ''}
        onRemove={() => onRemove(item)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text>FavoriteScreen</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={favoriteSelector}
        renderItem={renderItem}
        contentContainerStyle={styles.contentContainerStyle}
        ListEmptyComponent={
          <EmptyComponent description={'No favorites weather here !!'} />
        }
      />
    </View>
  );
};

export default FavoriteScreen;
