window.addEventListener('load', () => {
    const canvas = document.querySelector('canvas')
    const ctx = canvas.getContext('2d')
    const canvasWidth = 500
    const canvasHeight = 300

    let offsetX = getOffsetX()
    const offsetY = 200

    window.addEventListener('resize', () => {
        offsetX = getOffsetX()
    })

    function getOffsetX() {
        return (document.body.clientWidth - canvasWidth) / 2
    }

    canvas.height = canvasHeight
    canvas.width = canvasWidth

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
        ctx.lineTo(e.clientX-offsetX, e.clientY-offsetY)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(e.clientX-offsetX, e.clientY-offsetY)
    }

    canvas.addEventListener('mousedown', startPos)
    canvas.addEventListener('mouseup', finishPos)
    canvas.addEventListener('mousemove', draw)
})