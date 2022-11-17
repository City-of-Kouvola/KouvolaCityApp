import React, {useState} from 'react';
import { View, TouchableOpacity, Text, LayoutAnimation, Animated, Easing, Platform} from 'react-native'
import { styles } from './../styles';
import { category } from './../NewsContainer';
import Icon from 'react-native-vector-icons/FontAwesome5'

const translationData = require('config/locales.json');
interface Props {
    data: category[]
    setData: React.Dispatch<React.SetStateAction<category[]>>
    changeCategory: (category: category) => void
    returnToTop: () => void
}   

const NavBar: React.FC<Props> = (props) => {     

  const [isOpen, setIsOpen] = useState(false)
  const [showMore, setShowMore] = useState(false)
  const [openButtonText, setOpenButtonText] = useState(translationData.Labels.finnish.Screens.Home.ChooseCategory)  
  const [showMoreButtonText, setShowMoreButtonText] = useState("")  

  const handleCategoryPress = (category: category, index: number) => {
    props.changeCategory(category)
    updateCategories(index)
  }  

  const updateCategories = (index: number) => {
    let newCategories = props.data;
    let editedCategory = props.data[index];
    let newIsActive = !editedCategory.isActive;
    editedCategory.isActive = newIsActive;
    newCategories[index] = editedCategory;
    props.setData(newCategories)
  }

  const handleOpenAndClose = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    const openText = translationData.Labels.finnish.Screens.Home.Close
    const closeText = translationData.Labels.finnish.Screens.Home.ChooseCategory
    let text = (!isOpen) ? openText : closeText
    if (showMoreButtonText === "") {      
      setShowMoreButtonText(`${translationData.Labels.finnish.Screens.Home.ShowMore} (${props.data.length - 5})`)
    }
    setOpenButtonText(text)
    setIsOpen(!isOpen)
  }   

  const handleShowMore = () => {    
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    const openText = translationData.Labels.finnish.Screens.Home.ShowLess
    const closeText = `${translationData.Labels.finnish.Screens.Home.ShowMore} (${props.data.length - 5})`
    const text = (!showMore) ? openText : closeText    
    if (showMore) {
      props.returnToTop()
    }
    setShowMoreButtonText(text)
    setShowMore(!showMore)
  }

  const renderCategories = (categories: category[], offset: number) => {
    return (
      categories.map((category: category, index) => {
        return (
          <TouchableOpacity
            accessibilityRole='togglebutton'
            key={category.id}
            style={styles.categoryButton}
            onPress={() => handleCategoryPress(category, index + offset)}>
              <Icon 
                style={styles.toggleButton} 
                name={category.isActive ? "check-square" : "square"} 
              />
            <Text style={styles.categoryText}>
              {category.name} ({category.newsCount})
            </Text>
          </TouchableOpacity>          
        )
      })
    )
  }

  const spinValue = new Animated.Value(0);
  Animated.timing(
    spinValue,
    {
      toValue: 1,
      duration: 150,
      easing: Easing.linear,
      useNativeDriver: true 
    }
  ).start()

  const openingRotate = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '45deg']
  })
  const closingRotate = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['45deg', '90deg']
  })

  return (
    <View style={styles.navBarContainer}>
      <TouchableOpacity
        accessibilityRole='button'
        onPress={handleOpenAndClose} 
        style={styles.navBarButton}>
          <Text style={styles.navBarOpenButtonText}>{openButtonText}</Text>   
          <Animated.View 
            style={isOpen ? 
              {transform: [{rotate: openingRotate}] } :
              {transform: [{rotate: closingRotate}] }
            }>
            <Icon name='plus-circle' style={styles.menuIcon} />
          </Animated.View>         
      </TouchableOpacity>    
      <View>
        {isOpen &&         
          <>
            {renderCategories(props.data.slice(0, 5), 0)}
            {showMore && renderCategories(props.data.slice(5), 5)}        
            <View
              style={[
                styles.navBarShowMoreButton,                  
                Platform.OS === 'ios' ? styles.skew : {}
              ]}  
            >
              <TouchableOpacity                              
                accessibilityRole='button'
                onPress={handleShowMore}
              >
                <Text style={styles.showMoreText}>{showMoreButtonText}</Text>
              </TouchableOpacity>
            </View>             
          </>
        }        
      </View> 
    </View>
  )
}

export default NavBar;