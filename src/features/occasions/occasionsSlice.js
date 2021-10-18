import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', title: 'Valentine\'s Day', occasionDate: '02/15/2021'},
  { id: '2', title: 'Eric\'s birthday', occasionDate: '04/15/2021'}
]

const occasionsSlice = createSlice({
  name: 'occasions',
  initialState,
  reducers: {
    occasionAdded(state, action) {
      state.push(action.payload)
    }
  }
})

export const { occasionAdded } = occasionsSlice.actions
export default occasionsSlice.reducer