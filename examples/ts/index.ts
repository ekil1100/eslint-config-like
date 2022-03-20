function a() {
    return 2
}

a()

export function b() {
    return 2
}

export function args(a: unknown, b: number) {
    if (a === 1) {
        return 2
    }

    if (b === 2) return 3
}

function fn(obj: unknown) {
    obj = { x: 'a' }
    switch (obj) {
        case 1:
            break
    }
    return obj
}

fn({})
