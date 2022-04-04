"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1.33
class Color {
    getRandomColor() {
        const randomValue = () => Math.floor(Math.random() * 256);
        return `rgb(${randomValue}, ${randomValue}, ${randomValue})`;
    }
}
exports.default = Color;
