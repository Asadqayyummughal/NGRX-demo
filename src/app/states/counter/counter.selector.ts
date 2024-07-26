import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state"

export const selectCounterState = (state: AppState) => state.counter;
export const createSelectorCount = createSelector(selectCounterState, state => state.count)
