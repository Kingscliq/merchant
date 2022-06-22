// import Counter from '@/features/Counter/Counter.store';
import Auth from '@/features/Auth/Auth.store';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import type { WebStorage } from 'redux-persist';
import { persistReducer } from 'redux-persist';
// import { getLogger } from 'react-query/types/core/logger';

interface PersitConfig {
  key: string;
  storage: WebStorage;
}

export const persistConfig: PersitConfig = {
  key: 'root',
  storage: storage,
  // blacklist: ['extras'],
  // transforms: [TransformCredentials]
};

const rootReducer = combineReducers({
  // counter: Counter.reducer,
  auth: Auth.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const getMiddlewares = (getDefaultMiddlewares: any) => {
  if (process.env.NODE_ENV !== 'development') return getDefaultMiddlewares();
  return [...getDefaultMiddlewares(), logger];
};

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getMiddlewares,
});

// here
