// Template Literals
const nama = "mahesa";
const umur = 19;

function coba(str, ...values) {
  let result = "";
  str.forEach((strs, i) => {
    result += `${strs}${values[i] || ""}`;
  });

  return result;
}

const str = coba`hallo nama saya ${nama}, saya umur ${umur} tahun`;

console.log(str);
