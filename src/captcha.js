class Captcha {
    constructor(leftoperand,rightoperand,operator) {
        this.leftoperand = leftoperand
        this.rightoperand = rightoperand
        this.operator = operator
    }

    getLeft() {
        return this.leftoperand.toString()
    }

    getRight() {
        let intText = ["One","Two","Three","Four","Five","Six","Seven","Eight","Nine"]
        return intText[this.rightoperand - 1]
    }

    getOperator() {
        let listOperator = ["+","*","-"]
        return listOperator[this.operator - 1]
    }
}

let captcha1 = new Captcha(1,2,1)

console.log(`${captcha1.getLeft()} ${captcha1.getOperator()} ${captcha1.getRight()}`)