import { combineReducers, configureStore } from '@reduxjs/toolkit';  
import authReducer from './authSlice';
import companySlice from './companySlice';
import applicationSlice from './applicationSlice';

import jobSlice from './jobSlice';

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';

import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
    key: 'root',
  version: 1,
  storage,
}
const rootReducer = combineReducers({
    auth: authReducer,
    job: jobSlice,
    company: companySlice,
    application: applicationSlice,
  });
  
  // Create a persisted reducer

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({ 
    reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
 });
 export const persistor = persistStore(store);
export default store;
