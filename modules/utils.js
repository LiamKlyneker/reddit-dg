export const success = actionType => `${actionType}_SUCCESS`;
export const failure = actionType => `${actionType}_FAIL`;

export const createSuccessAction = (type, payload) => ({
  type: success(type),
  payload,
});

export const createFailureAction = (type, payload) => ({
  type: failure(type),
  payload,
});
