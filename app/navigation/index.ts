import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined
  Settings: undefined
  VehicleDetail: {
    id: number
  }
  MapPage: {
    address?: object
    car_id: string
    driver: string
  }
}

export type StackScreenProps = NativeStackScreenProps<RootStackParamList>


export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, T>