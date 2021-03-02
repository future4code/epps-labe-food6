export const goHome = (history) => {
  history.push("/");
};

export const goToLogin = (history) => {
  history.push("/login");
};

export const goToSignUp = (history) => {
  history.push("/signUp");
};

export const goToSignAddress = (history) => {
  history.push("/signAddress");
};

//de olho pra consertar essa rota aqui, é só pra ver a renderização
export const goToRestaurantDetails = (history) => {
  history.push("/restaurantdetails");
};
