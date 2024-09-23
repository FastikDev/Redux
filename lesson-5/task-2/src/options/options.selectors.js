import { createSelector } from 'reselect';

const optionsListSelector = state => {
  return state.options.optionsList;
};

const selectedIdsSelector = state => {
  return state.options.selected;
};

export const selectedOpionsSelector = createSelector(
  [optionsListSelector, selectedIdsSelector],
  (allOptions, selectedIds) => {
    return allOptions.filter(option => selectedIds.includes(option.id));
  },
);

export const availableOpionsSelector = createSelector(
  [optionsListSelector, selectedIdsSelector],
  (allOptions, selectedIds) => {
    return allOptions.filter(option => !selectedIds.includes(option.id));
  },
);
