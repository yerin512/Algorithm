/* 

문제 : k초 후에 몇 번 음식부터 섭취해야하는지를 구하라
자료 : 
    food_times 각 음식을 모두 먹는데 필요한 시간
    k 네트워크 장애가 발생한 시간
조건 :
1번 음식부터 먹기 시작함
회전판은 번호가 증가하는 순서대로 음식을 무지 앞으로 가져다 놓음
마지막 번호의 음식을 섭취후엔 다시 1번 음식이 무지 앞으로 옴
음식 하나를 1초동안 섭취후 남은 음식은 그대로 두고 다음 음식을 섭취
(다음 음식은 남은 음식중 가장 가까운 다음 번호의 음식)
다음 음식을 가져오는 데 걸리는 시간은 없음

계획: for문 반복문으로 food_times[i] 원소에서 1을 하나씩 빼줌
0이면 건너뜀
i가 k일때 그 다음인 0이 아닌 원소를 찾음


*/

const run = (food_times, k) => {
  let count = 0;
  for (let i = 0; i <= k; i++) {
    if (count + 1 > food_times.length) {
      count = 0;
    }

    if (count === 0) {
      return food_times;
    }

    food_times[count] = food_times[count] - 1;
    count++;
    console.log(food_times);
  }

  console.log();
};

const solution = (food_times, k) => {};

test('정수 k와 음식이 걸리는 시간을 담은 배열을 입력받은 경우 먹어야하는 다음 음식의 번호를 출력하라', () => {
  expect(solution([3, 1, 2], 5)).toBe(1);
});
