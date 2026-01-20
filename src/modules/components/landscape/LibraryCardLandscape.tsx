import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { locales } from "../../../config/locales";
import { BarCode } from "../util";


interface ILandscapeProps {
  cardNumber: string;
  confirmLogout: () => void;
  holderName?: string;
  isTimeout: boolean;
}

const LibraryCardLandscape = ({cardNumber, confirmLogout, holderName, isTimeout}: ILandscapeProps) => {
  return (
    <View
      style={styles.libraryCardContainer}
      importantForAccessibility={isTimeout ? "no-hide-descendants" : "yes"}>  
      <View style={styles.rotatedContainer}>
      <View style={styles.libraryNameContainer}>
        <Text style={styles.libraryName}>{locales.libraryName.fi}</Text>
      </View>
        <View style={styles.libraryCard}>
          <Text accessible={true} style={styles.holderName}>{holderName}</Text>
          <View accessible={true} accessibilityLabel={locales.libraryBarCode.fi} accessibilityRole={'image'}>
            <BarCode
                text={cardNumber}
                width={100}
                height={20}
                bcid={'code39'}
            />
          </View>
        </View>
        <Text style={styles.libraryCardDescription} accessible accessibilityRole={'text'}>
          {locales.libraryCardDescription.fi}
        </Text>
        <TouchableOpacity
          accessible
          accessibilityLabel={locales.pressLogout.fi}
          style={styles.logoutButton}
          accessibilityRole={'button'}
          onPress={confirmLogout}
          activeOpacity={0.6}>
          <Text accessible={false} style={styles.buttonText}>
            {locales.logoutButton.fi}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.libraryCardImage}
          accessibilityRole={'image'}
          resizeMode={'contain'}
          source={require('../../../assets/img/villirilli.png')}
        />
      </View>
    </View>
  )
}

export default LibraryCardLandscape;