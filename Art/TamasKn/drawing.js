window.addEventListener('load', () => {
    const canvas = document.querySelector('canvas')
    const ctx = canvas.getContext('2d')

    canvas.height = 300
    canvas.width = 500

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
        ctx.lineTo(e.clientX, e.clientY)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(e.clientX, e.clientY)
    }

    canvas.addEventListener('mousedown', startPos)
    canvas.addEventListener('mouseup', finishPos)
    canvas.addEventListener('mousemove', draw)
})