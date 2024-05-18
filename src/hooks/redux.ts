import { AppDispatch, RootState } from "../store/index";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useTypedDispatch = () => useDispatch<AppDispatch>();
