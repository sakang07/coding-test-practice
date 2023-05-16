function solution(name, yearning, photo) {
    // name과 yearning을 객체로 대응시키기 e.g. {may: 5, kein: 10}
    const scoreTable = name.reduce((result, item, index) => {
        result[item] = yearning[index];
        return result;
    }, {})
    
    // photo 배열 내부의 배열을 순회하며 scoreTable의 key와 비교
    // 있으면 scoreTable의 value를 더하기
    const answer = photo.reduce((result, item) => {
        const score = item.reduce((rel, el) => {
            if (scoreTable[el]) {
                return rel + scoreTable[el];
            }
            return rel;
        }, 0);
        result.push(score);
        return result;
    }, []);
    
    console.log(answer)
    return answer;
}