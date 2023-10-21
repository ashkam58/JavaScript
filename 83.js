function longest_string(str_arr)
{
   var max = str_arr[0].length;
  str_arr.map(v=> max = Math.max(max, v.length));
   result = str_arr.filter(v=> v.length == max);
  return result;
}

console.log(longest_string(['a', 'aa', 'aaa',
                                          'aaaaa','aaaa']))