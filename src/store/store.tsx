import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import userReducer from "./user/user.reducer";
// import messagesReducer from "./messages/messages.reducer";

import rootSaga from "./root-saga";
import rootReducer from "./root-reducer";

// import onFetchCategories from "./messages/messages.saga";

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware),
});

// const store = configureStore({
//   reducer: {
//     user: userReducer,
//     messages: messagesReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }).concat(sagaMiddleware),
// });

sagaMiddleware.run(rootSaga);
export default store;
export const persistor = persistStore(store);
