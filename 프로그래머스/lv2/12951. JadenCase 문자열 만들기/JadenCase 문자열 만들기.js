function solution(s) {
    const list = s.split(' ');
    return list.reduce((acc, cur) => {
        const item = cur ? cur[0].toUpperCase() + cur.slice(1).toLowerCase() : '';
        // console.log(acc, cur, item);
        acc = acc ? acc + ' ' + item : item;
        return acc;
    }, '');
}