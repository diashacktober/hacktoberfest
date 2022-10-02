function findScreenHeight(width, ratio) {
  const [w, h] = ratio.split(':')
  return `${width}x${h/w * width}`
}
