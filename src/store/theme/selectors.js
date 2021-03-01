import { createSelector } from 'reselect'

export const themeActive = state => state.language

// Get Theme
export const themeSelector = createSelector(
    themeActive,
    data => data.get('theme')
)