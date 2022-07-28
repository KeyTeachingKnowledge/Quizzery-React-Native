import { configureStore, combineReducers } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';
import settingsReducer from './slices/settings';
import quizReducer from './slices/quiz';
import statsReducer from './slices/stats';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
}

const reducers = combineReducers({
  settings: settingsReducer,
  quiz: quizReducer,
  stats: statsReducer
});
const persistReducers = persistReducer(persistConfig, reducers)


export const store = configureStore({
  reducer: persistReducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store)