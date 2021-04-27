const clearTranslationCache = prefix => {
  var arr = [] // Array to hold the keys

  // Iterate over localStorage and insert the keys that meet the condition into arr
  for (let i = 0; i < localStorage.length; ++i){
    if (localStorage.key(i).startsWith(prefix)) {
      arr.push(localStorage.key(i))
    }
  }

  // Iterate over arr and remove the items by key
  for (let i = 0; i < arr.length; ++i) {
    localStorage.removeItem(arr[i])
  }
}

export default clearTranslationCache