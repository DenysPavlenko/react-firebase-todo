export const colorFilterChange = (name) => ({
  type: 'todosFilters/colorFilterChange',
  payload: name,
});

export const statusFilterChange = (status) => ({
  type: 'todosFilters/statusFilterChange',
  payload: status,
});
