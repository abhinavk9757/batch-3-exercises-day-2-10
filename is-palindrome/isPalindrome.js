function checkPalindrome(arr) {
  const len = arr.length;
  for (let i = 0; i <= len / 2; i += 1) if (arr[i] !== arr[len - i - 1]) return false;
  return true;
}
function isPalindrome(arrr) {
  const arr = arrr
    .toString()
    .toLowerCase()
    .replace(/([^a-z0-9]+)/gi, '')
    .split('');
  return checkPalindrome(arr);
}

export { isPalindrome };
