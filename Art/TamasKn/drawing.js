window.addEventListener('load', () => {
    const canvas = document.querySelector('canvas')
    const ctx = canvas.getContext('2d')

    canvas.height = 300
    canvas.width = 500
    canvas.style.position = 'absolute';
    canvas.style.top = "100px";
    canvas.style.left = "300px";

    let color = "blue"
    let width = 2
    let drawing = false

    const startPos = (e) => {
        drawing = true
        draw(e)
    }

    const finishPos = () => {
        drawing = false
        ctx.beginPath()
    }

    const draw = (e) => {
        if(!drawing) return

        ctx.strokeStyle = color
        ctx.lineWidth = width
        ctx.lineCap = 'round'
        ctx.lineTo(e.clientX-300, e.clientY-100)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(e.clientX-300, e.clientY-100)
    }

    canvas.addEventListener('mousedown', startPos)
    canvas.addEventListener('mouseup', finishPos)
    canvas.addEventListener('mousemove', draw)
})