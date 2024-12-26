//국가/지역 선택 액션과 리듀서 한 곳에 저장 및 관리

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NationState {
  selectedNation: string | null;
  isNationMouse: boolean;
}

const initialState: NationState = {
  selectedNation: "",
  isNationMouse: false,
};

const nationSlice = createSlice({
  name: "nation",
  initialState,
  reducers: {
    setSelectedNation: (state, action: PayloadAction<string>) => {
      state.selectedNation = action.payload;
    },

    setIsNationMouse: (state, action: PayloadAction<boolean>) => {
      state.isNationMouse = action.payload;
    },
  },
});

export const {setIsNationMouse,setSelectedNation}=nationSlice.actions;

export default nationSlice.reducer;