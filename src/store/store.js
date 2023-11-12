import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import OrganizationSlice from "./OrganizationSlice";

const store = configureStore({
    reducer:{
        auth: AuthSlice,
        organizations: OrganizationSlice,
    }
}) 

export default store