export default function getNumBaseballLevel(levelNum) {
    switch (levelNum) {
        case 0:
            return "Easy";
        case 1:
            return "Normal";
        case 2:
            return "Hard";
        default:
            return "알 수 없음";
    }
}