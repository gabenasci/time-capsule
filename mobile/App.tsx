import { styled } from 'nativewind'
import { StatusBar } from 'expo-status-bar'
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  Linking,
  Alert,
} from 'react-native'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'

import blurBg from './src/assets/bg-blur.png'
import Stripes from './src/assets/stripes.svg'
import NLWLogo from './src/assets/nlw-spacetime-logo.svg'
import { useCallback } from 'react'

const StyledStripes = styled(Stripes)

const githubURL = 'https://github.com/gabenasci'

type OpenURLButtonProps = {
  url: string
  children: string
}

const OpenURLButton = ({ url, children }: OpenURLButtonProps) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url)

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url)
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`)
    }
  }, [url])
  return (
    <Text
      className="font-body-text-sm text-center leading-relaxed text-gray-200 underline hover:text-gray-300"
      onPress={handlePress}
      children={children}
    />
  )
}

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  })

  if (!hasLoadedFonts) {
    return null
  }

  return (
    <ImageBackground
      source={blurBg}
      className="relative flex-1 items-center bg-gray-900 px-8 py-10"
      imageStyle={{ position: 'absolute', left: '-100%' }}
    >
      <StyledStripes className="absolute left-2" />

      <View className="flex-1 items-center justify-center gap-6">
        <NLWLogo />

        <View className="space-y-2">
          <Text className="text-center font-title text-2xl leading-tight text-gray-50">
            Your time capsule
          </Text>
          <Text className="text-center font-body text-base leading-relaxed text-gray-100">
            Collect memorable moments of your journey and share them with the
            world!
          </Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          className="rounded-full bg-green-500 px-5 py-3"
        >
          <Text className="font-alt text-sm uppercase text-black">
            Register a new memory
          </Text>
        </TouchableOpacity>
      </View>

      <Text className="font-body-text-sm text-center leading-relaxed text-gray-200">
        Built by{' '}
        <OpenURLButton url={githubURL}>Gabriel Nascimento</OpenURLButton>
      </Text>

      <StatusBar style="light" translucent />
    </ImageBackground>
  )
}
