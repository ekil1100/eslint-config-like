export function args(a, b, c) {
    if (a === 1) {
        return 2
    }

    if (b === 2) return 3
}

function fn(obj) {
    obj = { x: 'a' }
    switch (obj) {
        case 1:
            break
    }
}

fn()
