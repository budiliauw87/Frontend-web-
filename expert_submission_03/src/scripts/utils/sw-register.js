const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Service worker not supported');
  }

  try {
    await navigator.serviceWorker.register('./sw.bundle.js');
    console.log('Service worker register Successfully');
  } catch (error) {
    console.log('Service worker register Failed');
  }
};
export default swRegister;
