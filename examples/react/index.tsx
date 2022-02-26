export function App() {
  return <div>App</div>
}

function a() {
  return 2
}

a()

export function b() {
  return 2
}

export function args(a: number, b: number) {
  if (a === 1) {
    return 2
  }

  if (b === 2) return 3
}

function fn(obj: unknown) {
  obj = { x: 'a' }
  return obj
}

fn({})
