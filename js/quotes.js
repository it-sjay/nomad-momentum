const quotes = [
    {
        quote:"산을 움직이려 하는 이는 작은 돌을 들어내는 일로 시작한다.",
        author:"공자",
    },
    {
        quote:"말만 하고 행동하지 않는 사람은 잡초로 가득 찬 정원과 같다.",
        author:"하우얼",
    },
    {
        quote:"다리를 움직이지 않고는 작은 도랑도 건널 수 없다.",
        author:"알랭",
    },
    {
        quote:"자기 신뢰는 성공의 첫 번째 비결이다.",
        author:"랄프 왈도 에머슨",
    },
    {
        quote:"당신이 할 수 있다고 생각하든, 그렇지 않다고 생각하든 당신 말이 맞습니다.",
        author:"헨리 포드",
    },
    {
        quote:"공부할 때의 고통은 잠깐이지만 못 배운 고통은 평생을 간다.",
        author:"알버트 아인슈타인",
    },
    {
        quote:"당신이 허락해주지 않으면 아무도 당신이 열등감을 느끼게 만들 수 없다.",
        author:"엘리너 루즈벨트",
    },
    {
        quote:"낭비한 시간에 대한 후회는 더 큰 시간 낭비이다.",
        author:"메이슨 쿨리",
    },
    {
        quote:"휴식은 게으름도, 멈춤도 아니다.",
        author:"헨리 포드",
    },
    {
        quote:"난 미래에 대해 생각하는 법이 없다. 어차피 곧 닥치니까.",
        author:"알버트 아인슈타인",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;