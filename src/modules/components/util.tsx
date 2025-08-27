import bwipjs, { toDataURL } from '@bwip-js/react-native';
import { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './landscape/styles';

export const BarCode = (options: bwipjs.RenderOptions) => {
    const [barCode, setBarCode] = useState<React.JSX.Element>();


    useEffect(() => {

        const generateBarCode = async () => {
            let img = null;

            try {
                img = await toDataURL({...options});
            } catch (e) {
                console.log(e)
                // `e` may be a string or Error object
            }

            if (img) {
                setBarCode(
                    <Image
                        style={{ height:img.height, width:img.width }}
                        source={{ uri:img.uri }}
                    />
                )
            }
        }

        if (options.text) generateBarCode()
    },[options.text, options.width, options.height])
    

    if(barCode) {
        return (
            <View>
                {barCode}
                <Text style={styles.holderName}>{options.text}</Text>
            </View>
        )
    } else return <></>
};