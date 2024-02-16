import './style.css'

main();

function assertExists<T>(value: T | undefined | null): asserts value is T {
    if (value == undefined) {
        throw new Error("Unexpected empty value");
    }
}

function main(): void {
    const canvas = document.querySelector<HTMLCanvasElement>("#canvas");
    assertExists(canvas);
    const ctx = canvas?.getContext("2d");
    assertExists(ctx);
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fill();
}
