// 재사용 가능성이 있는것들은 따로 파일을 만들어서 모아둔다.
// 다른곳에서 쓸때 import 해서 쓸수 있기 때문

export function getToDay() {
  const date = new Date();
  const yyyy = date.getFullYear();
  const mm = date.getMonth() + 1;
  const dd = date.getDate();
  const result = `${yyyy}-${mm}-${dd}`;
  return result;
}
