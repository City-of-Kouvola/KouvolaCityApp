import React, {useMemo, useState} from 'react';
import { View, TouchableOpacity, Text, LayoutAnimation, Animated, Easing, Platform, AccessibilityInfo} from 'react-native'
import { styles } from './../styles';
import { category } from './../NewsContainer';
import Icon from 'react-native-vector-icons/FontAwesome5'

const translationData = require('config/locales.json');
interface Props {
    data: category[]
    setData: React.Dispatch<React.SetStateAction<category[]>>
    changeCategory: (category: category) => void
    returnToTop: () => void
    isScrolling: boolean
}   

const NavBar: React.FC<Props> = (props) => {     

  const [isOpen, setIsOpen] = useState(false)
  const [showMore, setShowMore] = useState(false)

  const openButtonText = useMemo(() => (
    isOpen ? translationData.Labels.finnish.Screens.Home.Close : translationData.Labels.finnish.Screens.Home.ChooseCategory
  ), [isOpen])

  const openButtonAccessibilityText = useMemo(() => {
    const accessibilityText = isOpen ? translationData.Labels.finnish.Screens.Home.CloseAccessibility : translationData.Labels.finnish.Screens.Home.ChooseCategoryAccessibility
    AccessibilityInfo.announceForAccessibility(accessibilityText);
    return accessibilityText;
  }, [isOpen])

  const showMoreButtonText = useMemo(() => {
    const openText = translationData.Labels.finnish.Screens.Home.ShowLess;
    const closeText = `${translationData.Labels.finnish.Screens.Home.ShowMore} (${props.data.length - 5})`;
    return showMore ? openText : closeText;
  }, [showMore, props.data])

  const handleCategoryPress = async (category: category, index: number) => {
    await props.changeCategory(category)
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
    setIsOpen(!isOpen)
  }   

  const handleShowMore = () => {    
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut) 
    const openedText = translationData.Labels.finnish.Screens.Home.ShowingLess
    const closedText = translationData.Labels.finnish.Screens.Home.ShowingMore
    if (showMore) {
      props.returnToTop()
    }
    AccessibilityInfo.announceForAccessibility(showMore ? openedText : closedText)
    setShowMore(!showMore)
  }

  const renderCategories = (categories: category[], offset: number) => {
    return (
      categories.map((category: category, index) => {
        return (
          <TouchableOpacity
          accessible={true}
            importantForAccessibility={(props.isScrolling) ? "no-hide-descendants" : "yes"}
            accessibilityRole='togglebutton'
            accessibilityLabel={category.name}
            accessibilityState={{checked: category.isActive}}
            key={category.id}
            style={styles.categoryButton}
            onPress={() => handleCategoryPress(category, index + offset)}
            >
              <Icon 
                style={styles.toggleButton} 
                name={category.isActive ? "check-square" : "square"} 
                accessible={false}
              />
              <Text style={styles.categoryText} accessible={false}>
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
        accessibilityLabel={openButtonAccessibilityText}
        accessibilityHint={isOpen ?
          translationData.Accessibility.finnish.Navigation.CloseNavBar :
          translationData.Accessibility.finnish.Navigation.OpenNavBar
        }
        onPress={handleOpenAndClose} 
        style={styles.navBarButton}>
          <Text accessible={false}  style={styles.navBarOpenButtonText}>{openButtonText}</Text>   
          <Animated.View 
          accessible={false}
            style={isOpen ? 
              {transform: [{rotate: openingRotate}] } :
              {transform: [{rotate: closingRotate}] }
            }>
            <Icon name='plus-circle' style={styles.menuIcon} accessible={false}/>
          </Animated.View>         
      </TouchableOpacity>    
      <View>
        {isOpen &&         
          <>
            {renderCategories(props.data.slice(0, 5), 0)}
            {showMore && renderCategories(props.data.slice(5), 5)}  
            {props.data.length > 5 && (      
              <View style={Platform.OS === 'ios' ? styles.skew : {}}>                
                <TouchableOpacity                 
                  style={styles.navBarShowMoreButton}      
                  accessibilityLabel={showMoreButtonText}                   
                  accessibilityRole='button'
                  onPress={handleShowMore}
                >
                  <Text style={styles.showMoreText} accessible={false}>{showMoreButtonText}</Text>
                </TouchableOpacity>
              </View>             
            )}             
          </>
        }        
      </View> 
    </View>
  )
}

export default NavBar;