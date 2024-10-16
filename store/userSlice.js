import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  clips: [] //格納先
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addClip: (state, action) => {
      const newClip = action.payload
      state.clips.push(newClip)
    },
    deleteClip: (state, action) => {
      const deletingClip = action.payload;
      const currentClips = state.clips;
      const fliteredClips = currentClips.filter((clip) => clip.url !== deletingClip.url);
      state.clips = fliteredClips
    }
  },
})

// Action creators are generated for each case reducer function
export const { addClip, deleteClip } = userSlice.actions

export default userSlice.reducer
