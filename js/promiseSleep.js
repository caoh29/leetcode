async function sleep(millis) {
  return new Promise(resolve => setTimeout(resolve, millis));
}

// Call the above function and wait for it to finish
sleep(1000).then(() => console.log('Done!'));