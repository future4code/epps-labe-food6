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

export const goToFeed = (history) => {
  history.push("/feed/restaurants");
};

export const goToCart = (history, id) => {
  history.push(`/feed/cart/${id}`);
};

export const goToProfile = (history, id) => {
  history.push(`/feed/profile/${id}`);
};

export const goToEditProfile = (history, id) => {
  history.push(`/feed/profile/edit/${id}`);
};
export const goToEditAddress = (history, id) => {
  history.push(`/feed/profile/edit/address/${id}`);
};

export const goToRestaurantDetails = (history, id) => {
  history.push(`/feed/details/${id}`);
};

export const goBackTo = (history) => { 
  history.goBack()
}
