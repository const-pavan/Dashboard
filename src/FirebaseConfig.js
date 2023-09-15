import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCTjb4C2o2kMb4o1w-Tvi084qa1AmxcjFk',
  authDomain: 'openinapp-pavan.firebaseapp.com',
  projectId: 'openinapp-pavan',
  storageBucket: 'openinapp-pavan.appspot.com',
  messagingSenderId: '406226478274',
  appId: '1:406226478274:web:fea4dda147e953d16dc75b',
}

const app = initializeApp(firebaseConfig)
export const database = getAuth(app)
