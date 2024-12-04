import { Image, Text, TouchableOpacity, View } from "react-native"
import {locales} from '../../../config/locales';
import { styles } from "./styles";
import { BarCode } from "../util";

interface IPortraitProps {
  cardNumber: string;
  confirmLogout: () => void;
  holderName?: string;
  isTimeout: boolean;
}

const LibraryCardPortrait = ({cardNumber, confirmLogout, holderName, isTimeout}: IPortraitProps) => {
  return (
    <View
      style={styles.libraryCardContainer}
      importantForAccessibility={isTimeout ? "no-hide-descendants" : "yes"}
    >             
      <View style={styles.libraryCard}>
        <Text style={styles.holderName}>{holderName}</Text>
        <View accessibilityLabel={locales.libraryBarCode.fi} accessibilityRole={'image'}>
        <BarCode
          text={cardNumber}
          width={1.65}
          height={20}
          bcid={'code39'}
        />
        </View>
        <Text style={styles.libraryCardDescription} accessible accessibilityRole={'text'}>
          {locales.libraryCardDescription.fi}
        </Text>
      </View>
      <View style={styles.imageContainer}>
          <Image
            style={styles.libraryCardImage} 
            accessibilityRole={'image'}
            resizeMode={'contain'}
            source={require('../../../assets/img/villirilli.png')}
          />
      </View>
      <View style={styles.logoutContainer}>
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
  </View>
  )
}

export default LibraryCardPortrait;
