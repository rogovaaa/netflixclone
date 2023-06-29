import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'
import thunkMiddleware from "redux-thunk"
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist"

import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'register', 'favoritesMovies', 'changeTheme', 'backgroundMovie'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(thunkMiddleware),
});

export const persistor = persistStore(store)

export type GlobalState = ReturnType<typeof store.getState>
export type GlobalDispatch = typeof store.dispatch