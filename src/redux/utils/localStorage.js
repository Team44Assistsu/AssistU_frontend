export default {
  getItem: (key) => {
    try {
      const value = localStorage.getItem(key);
      return value;
    } catch (error) {
      console.log(error);
      return error;
    }
  },

  setItem: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
      return error;
    }
  },

  removeItem: (key) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.log(error);
      return error;
    }
  },

  clearStorage: () => {
    try {
      localStorage.clear();
    } catch (error) {
      console.log(error);
      return error;
    }
  },
};
