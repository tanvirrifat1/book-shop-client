import { configureStore } from "@reduxjs/toolkit";

// import logger from "./middleware/logger";
import userReducer from "./features/users/userSLice";
import { api } from "./api/apiSLice";
import notificationReducer from "./notification/notificationSLice";
import WishlistReducer from "./features/whislist/whislistSlice";
import readBookReducer from "./features/readedBook/readedBookSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    notification: notificationReducer,
    wishlist: WishlistReducer,
    readBook: readBookReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
  // devTools:true
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export default store;
