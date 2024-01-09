import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  View,
  ActivityIndicator,
  Text,
  TouchableOpacity,
} from 'react-native';
import { RefreshControl } from 'react-native-gesture-handler';
import { Category, NewsArticle } from 'modules/news/Types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fetchNews } from 'modules/news/RequestService';
import NavBar from 'modules/news/components/NavBar';
import { ArticleTitle } from 'modules/news/components';
const transparentBg = require('../assets/img/Pohjoiseen_laajakuva_vaaka.jpg');
const translationData = require('config/locales.json');

const Home = ({ navigation }: any): JSX.Element => {

  const [isScrolling, setIsScrolling] = useState(false)
  
  const returnToTop = () => {
    scrollViewRef.current?.scrollTo({
      y: imageHeight,      
    })
  }
  const scrollViewRef = useRef<ScrollView>(null)

  const [refreshing, setRefreshing] = useState(false);

  const [categories, setCategories] = useState<Category[]>([])  
  const [activeCategories, setActiveCategories] = useState<Category[]>([])
  const [newsList, setNewsList] = useState<NewsArticle[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [newsCount, setNewsCount] = useState(0)  

  useEffect(() => {
    getCategoryData();
  }, [])

  const getCategoryData = async () => {
    let activeCategoryIDs: number[] = []
    let newCategories: Category[] = []
    let newActiveCategories: Category[] = []

    const url: string = 'https://www.kouvola.fi/wp-json/wp/v2/categories/?per_page=100&orderby=count&order=desc';

    let response: Response | null = null;
    try {
      response = await fetch(url)
    } catch {
      response = null;
      setErrorMessage(translationData.Labels.finnish.ErrorMessages.ErrorLoadingCategories)
      setIsLoading(false)
    }

    let savedCategories = await AsyncStorage.getItem("activeCategoryIDs")
    activeCategoryIDs = (savedCategories && savedCategories.length !== 0) ? JSON.parse(savedCategories) : [17]


    if (response) {
      const json = await response.json()
      json.forEach((field: any) => {
        if (field.count > 0) {
          let category: Category = {name: field.name, id: field.id, newsCount: field.count, isActive: false}
          if (activeCategoryIDs.includes(category.id)) {
            category.isActive = true          
            newActiveCategories.push(category)
          }
          newCategories.push(category)
        }
      });

      if (newActiveCategories.length === 0) {
        newCategories[0].isActive = true;
        newActiveCategories.push(newCategories[0])
      }
    }      

    updateNewsCount(newActiveCategories)
    setActiveCategories(newActiveCategories)         
    updateData(newActiveCategories)
    setCategories(newCategories)
  }

  const updateNewsCount = (categories: Category[]) => {
    let newNewsCount = 0;
    if (categories.length > 0) {
      categories.forEach((category: Category) => {
        newNewsCount += category.newsCount
      })
    }
    setNewsCount(newNewsCount)
  }

  const getIdsUrl = (categories: Category[]): string => {
    let ids: string = ""
    categories.forEach((category: Category) => {
      ids += `${category.id},`
    })
    if (ids.length === 0) { ids = '0' }
    return ids;
  }

  const updateData = async (categories: Category[]) => {
    const ids = getIdsUrl(categories)
    const url = `https://www.kouvola.fi/wp-json/wp/v2/posts?categories=${ids}&per_page=10`;
    setIsLoading(true)
    const [data, err] = await fetchNews(url, 1);

    if (err) {
      setErrorMessage(
        translationData.Labels.finnish.ErrorMessages.ErrorLoadingNews,
      );
    } else {
      setNewsList(data);
      setCurrentPage(1)
    }            
    setIsLoading(false);     
  };

   const loadMore = async () => {
    const ids = getIdsUrl(activeCategories);
    const newPageToLoad = currentPage + 1;    
    const url = `https://www.kouvola.fi/wp-json/wp/v2/posts?categories=${ids}&per_page=10`;
    setIsLoading(true);
    const [data, err] = await fetchNews(url, newPageToLoad);

    if (err) {
      setErrorMessage(
        translationData.Labels.finnish.ErrorMessages.ErrorLoadingNews,
      );
      setIsLoading(false);
    }

    setNewsList([...newsList, ...data])
    setCurrentPage(newPageToLoad);
    setIsLoading(false);
  };

  const editActiveCategories = async (category: Category) => { 
    let index = activeCategories.indexOf(category);
    let newCategories = activeCategories;
    if (index !== -1) {  
      index === 0 ? newCategories.shift() : newCategories.splice(index, 1)            
    } else {
      newCategories = [...activeCategories, category];
    }

    let activeCategoryIDs: number[] = newCategories.map((cat) => {
      return cat.id
    })
    await AsyncStorage.setItem("activeCategoryIDs", JSON.stringify(activeCategoryIDs))
    setActiveCategories(newCategories)
    updateNewsCount(newCategories)    
    setNewsList([])
    updateData(newCategories)        
  }


  const NewsArticles = ({}) => (
    (newsCount > 0) ? 
      newsList.map(article => (
        <ArticleTitle key={article.id} isScrolling={isScrolling} article={article} navigation={navigation} />        
      )) : (
      <View style={styles.noneSelectedContainer} accessible={true}>
        <Text style={styles.noneSelectedText}>{translationData.Labels.finnish.ErrorMessages.NoneSelected}</Text>
      </View>
    )
  );

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    setNewsList([]);
    await updateData(categories);
    setRefreshing(false);
  }, [categories]);
  
  return (
    <ScrollView 
      style={styles.container} 
      ref={scrollViewRef} 
      onScrollBeginDrag={() => {
        if (!isScrolling) setIsScrolling(true)
      }}
      onMomentumScrollEnd={() => {
        if (isScrolling) setIsScrolling(false)
      }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <Image
        source={transparentBg}
        resizeMode='contain'
        style={styles.transbg}
      />
      <View style={styles.newsContainer}>
      <NavBar
        data={categories} 
        setData={setCategories} 
        changeCategory={editActiveCategories} 
        returnToTop={returnToTop} 
        isScrolling={isScrolling}
      />
      <NewsArticles />   
      {isLoading ? ( 
        <ActivityIndicator
          style={styles.loaderStyle}
          size='large'
          color='gray'
        />
      ) : (
        <>
          {errorMessage !== '' ? (
            <View style={styles.errorContainer}>
              <Text style={styles.errorMessage}>{errorMessage}</Text>
            </View>
            ) : ( newsCount > currentPage * 10) && (            
              <View>
                <TouchableOpacity
                  accessibilityRole='button'
                  style={styles.fetchMoreButton}
                  onPress={loadMore}>
                  <Text style={styles.buttonText}  accessible={false}>
                    {translationData.Labels.finnish.Screens.Home.LoadMore}
                  </Text>
                </TouchableOpacity>
              </View>
          )}
        </>
      )}
    </View>
    </ScrollView>
  );
};

const dimensions = Dimensions.get('window');
const imageHeight = Math.round((dimensions.width * 6) / 16);
const imageTopMargin = -Math.round((dimensions.width * 0.1) / 16);
const imageWidth = dimensions.width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  transbg: {
    width: imageWidth,
    maxHeight: imageHeight,
    marginTop: imageTopMargin,
    marginBottom: 25,
  },
  text: { fontSize: 17, marginBottom: 10, paddingLeft: 15, paddingRight: 15 },
  newsContainer: {
    flex: 1,
  },
  loaderStyle: {
    marginTop: 30,
  },
  errorContainer: {
    margin: 15,
  },
  errorMessage: {
    fontFamily: "Roboto",
    fontSize: 18,
    color: '#a75042',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  articleTitle: {
    fontFamily: "Roboto",
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonText: {
    fontFamily: "Roboto",
    fontSize: 19,
    fontWeight: 'bold',
    color: '#fff',
  },
  fetchMoreButton: {
    width: 250,
    padding: 15,
    alignSelf: 'center',
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#212121',
    marginTop: 25,
  },  
  noneSelectedContainer: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  noneSelectedText: {
    fontSize: 15,    
  },    
  skew: {    
    transform: [{ skewX: '-4deg' }],
  },
});

export default Home;
